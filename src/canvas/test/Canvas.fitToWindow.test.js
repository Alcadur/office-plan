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

});