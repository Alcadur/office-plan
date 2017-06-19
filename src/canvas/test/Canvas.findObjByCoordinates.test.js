import beforeEachHelper from './beforeEachHelper';
import afterEachHelper from './afterEachHelper';

describe('Canvas', function() {
    let canvasNode;
    let canvas;
    let canvasContext;

    beforeEach(function() {
        [canvas, canvasNode] = beforeEachHelper();
        canvasContext = canvas.context;
    });

    afterEach(function() {
        afterEachHelper(canvasNode);
    });

    describe('findObjByCoordinates', function() {
        let nextObjNumber = 1;
        let nextZIndex = 1;
        let obj1;
        let obj2;
        let obj3;

        beforeEach(function() {
            obj1 = testObjectFactory(1, 4, 4, 1);
            obj2 = testObjectFactory(2, 5, 6, 2);
            obj3 = testObjectFactory(3, 8, 5, 6);
            sinon.stub(canvasContext, 'isPointInPath');
        });

        afterEach(function() {
            canvasContext.isPointInPath.restore();
        });

        it('should create element path', function() {
            const event = eventFactory(4, 7);
            canvas.elements = [obj1];

            canvas.findObjByCoordinates(event.layerX, event.layerY);

            expect(obj1.drawShape).to.have.been.calledWith(canvasContext);
        });

        it('should check is element click base on context \'isPointInPath\' method', function() {
            const event = eventFactory(4, 7);
            canvas.elements = [obj1];


            canvas.findObjByCoordinates(event.layerX, event.layerY);

            expect(canvasContext.isPointInPath).to.have.been.calledWith(event.layerX, event.layerY);
        });

        it('should return element witch area include click point', function() {
            const event = eventFactory(4, 7);
            canvas.elements = [obj2, obj1, obj3];
            canvasContext.isPointInPath
                         .returns(false)
                         .onCall(2).returns(true);

            const result = canvas.findObjByCoordinates(event.layerX, event.layerY);

            expect(result).to.be.equal(obj3);
        });

        it('should return object with grater zIndex when elements overlap', function() {
            const event = eventFactory(3, 3);
            canvas.elements = [obj1, obj2, obj3];
            canvasContext.isPointInPath
                         .returns(false)
                         .onCall(0).returns(true)
                         .onCall(1).returns(true);

            const result = canvas.findObjByCoordinates(event.layerX, event.layerY);

            expect(result).to.be.equal(obj2);
        });


        function testObjectFactory(aX, aY, bX, bY) {
            return {
                id: `obj-${nextObjNumber++}`,
                start: { x: aX, y: aY },
                end: { x: bX, y: bY },
                zIndex: nextZIndex++,
                drawShape: sinon.stub()
            }
        }
    });

    function eventFactory(layerX, layerY) {
        return {
            layerX,
            layerY
        }
    }

});