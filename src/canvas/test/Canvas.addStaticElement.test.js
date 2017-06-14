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
});