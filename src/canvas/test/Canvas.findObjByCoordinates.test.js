import beforeEachHelper from './beforeEachHelper';
import afterEachHelper from './afterEachHelper';

describe('Canvas', function() {
    let canvasNode;
    let canvas;

    beforeEach(function() {
        [canvas, canvasNode] = beforeEachHelper();
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
        });

        it('should return element witch area include click point', function() {
            const event = eventFactory(4, 7);
            canvas.elements = [obj2, obj1, obj3];

            const result = canvas.findObjByCoordinates(event.clientX, event.clientY);

            expect(result).to.be.equal(obj3);
        });

        it('should return object with grater zIndex when elements overlap', function() {
            const event = eventFactory(3, 3);
            canvas.elements = [obj1, obj2, obj3];

            const result = canvas.findObjByCoordinates(event.clientX, event.clientY);

            expect(result).to.be.equal(obj2);
        });


        function testObjectFactory(aX, aY, bX, bY) {
            return {
                id: `obj-${nextObjNumber++}`,
                start: { x: aX, y: aY },
                end: { x: bX, y: bY },
                zIndex: nextZIndex++
            }
        }
    });

    function eventFactory(clientX, clientY) {
        return {
            clientX,
            clientY
        }
    }

});