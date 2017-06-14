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

    describe('constructor', function() {
        it('should bind to \'node\' property DOM element find by selector', function() {
            expect(canvas.node).to.be.equal(canvasNode);
        });

        it('should bind to \'context\' 2d canvas context', function() {
            expect(canvas.context).to.be.equal(canvasNode.getContext('2d'));
        });
    });
});