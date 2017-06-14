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
});