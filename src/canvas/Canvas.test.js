import Canvas from './Canvas';
import * as helpers from '../testHelpers';

describe('Canvas', function() {
    const NODE_ID = 'my-canvas';
    const CANVAS_SELECTOR = `#${NODE_ID}`;
    let canvasNode;
    let canvas;

    beforeEach(function() {
        canvasNode = document.createElement('canvas');
        canvasNode.id = NODE_ID;

        document.body.appendChild(canvasNode);

        canvas = new Canvas(CANVAS_SELECTOR);
        canvas.context = canvasNode.getContext('2d');
    });

    afterEach(function() {
        canvasNode.remove();
    });

    describe('constructor', function() {
       it('should bind to \'node\' property DOM element find by selector', function() {
           canvas = new Canvas(CANVAS_SELECTOR);

           expect(canvas.node).to.be.equal(canvasNode);
       });

       it('should bind to \'context\' 2d canvas context', function() {
           canvas = new Canvas(CANVAS_SELECTOR);

           expect(canvas.context).to.be.equal(canvasNode.getContext('2d'));
       });
    });

    describe('addStaticElement', function() {
        const OBJ_ID = 'my-obj';
        let staticObj;

        beforeEach(function() {
            staticObj = {
                id: OBJ_ID,
                name: 'my object'
            };
        });

        it('should add element to static element object wth key equal object id', function() {
            canvas.addStaticElement(staticObj);

            expect(canvas.staticElements[0]).to.be.equal(staticObj);
        });

        it('should throw error when try to add element with id witch exists', function() {
            const newObj = { id: OBJ_ID };
            canvas.staticElements.length = 0;
            canvas.staticElements.push(staticObj);

            expect(function() { canvas.addStaticElement(newObj); }).to.have.throw('Duplicated ID');
        });
    });

    describe('addElement', function() {
        const OBJ_ID = 'my-obj';
        let obj;

        beforeEach(function() {
            obj = {
                id: OBJ_ID,
                name: 'my object'
            };
        });

        it('should add element to elements object wth key equal object id', function() {
            canvas.elements.length = 0;

            canvas.addElement(obj);

            expect(canvas.elements[0]).to.be.equal(obj);
        });

        it('should throw error when try to add element with id witch exists', function() {
            const newObj = { id: OBJ_ID };
            canvas.elements.length = 0;
            canvas.elements.push(obj);

            expect(function() { canvas.addElement(newObj); }).to.have.throw('Duplicated ID');
        });

        it('should return canvas object', function() {
            const result = canvas.addElement({});

            expect(result).to.be.equal(canvas);
        })
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

    describe('draw', function() {
        beforeEach(function() {
            canvas.context = sinon.stub(helpers.getCanvasContext());
        });

        it('should clear draw area before draw elements', function() {
            canvas.draw();

            expect(canvas.context.clearRect).to.have.been.calledWith(0, 0, canvas.node.width, canvas.node.height);
        });

        it('should render each element in elements array', function() {
            const obj1 = helpers.drawableObjectFactory();
            const obj2 = helpers.drawableObjectFactory();
            const obj3 = helpers.drawableObjectFactory();
            canvas.elements = [obj1, obj2, obj3];

            canvas.draw();

            expect(obj1.draw).to.have.been.calledWith(canvas.context);
            expect(obj2.draw).to.have.been.calledWith(canvas.context);
            expect(obj3.draw).to.have.been.calledWith(canvas.context);
        });

        it('should render each element in static elements array', function() {
            const obj1 = helpers.drawableObjectFactory();
            const obj2 = helpers.drawableObjectFactory();
            const obj3 = helpers.drawableObjectFactory();
            canvas.staticElements = [obj1, obj2, obj3];

            canvas.draw();

            expect(obj1.draw).to.have.been.calledWith(canvas.context);
            expect(obj2.draw).to.have.been.calledWith(canvas.context);
            expect(obj3.draw).to.have.been.calledWith(canvas.context);
        });

        it('should return canvas object', function() {
            const result = canvas.draw();

            expect(result).to.be.equal(canvas);
        });
    });

    describe('fitToWindow', function() {
        const INNER_WIDTH = 1456;
        const INNER_HEIGHT = 2561;

        it('should set canvas node width and height equal window inner width and height', function() {
            window.innerWidth = INNER_WIDTH;
            window.innerHeight = INNER_HEIGHT;

            canvas.fitToWindow();

            expect(canvas.node.width).to.be.eql(INNER_WIDTH);
            expect(canvas.node.height).to.be.eql(INNER_HEIGHT);
        });

        it('should return canvas object', function() {
            const result = canvas.fitToWindow();

            expect(result).to.be.equal(canvas);
        });
    });

    function eventFactory(clientX, clientY) {
        return {
            clientX,
            clientY
        }
    }

});