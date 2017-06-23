import _selectService from '../../selectService'
import * as statics from '../static';
import * as helpers from '../../../testHelpers';

describe('selectService', function() {
    const LINE_WIDTH = 40;
    let xOffset = 20;
    let yOffset = 30;
    let selectService;
    let canvasContext;
    let selectedElement;
    let square;

    beforeEach(function() {
        square = statics.square;
        selectedElement = helpers.drawableObjectFactory();
        selectedElement.shape = square;
        selectedElement.lineWidth = LINE_WIDTH;
        canvasContext = sinon.stub(helpers.getCanvasContext());
        selectService = Object.assign({}, _selectService);
        selectService.context = canvasContext;
        xOffset = selectService.ACTION_BUTTON_X_OFFSET;
        yOffset = selectService.ACTION_BUTTON_Y_OFFSET;
    });

    describe('selectElement', function() {

        it('should draw selected element shape', function() {
            selectService.selectElement(selectedElement);

            expect(selectedElement.drawShape).to.have.been.calledWith(canvasContext);
        });

        it('should set line width equal selected element line width', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.lineWidth).to.be.equal(LINE_WIDTH);
        });

        it('should set stroke style to strokeColor', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.strokeStyle).to.be.equal(selectService.strokeColor);
        });

        it('should set fill style to fillColor', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.fillStyle).to.be.equal(selectService.fillColor);
        });

        it('should draw selected stroke', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.stroke).to.have.been.called;
        });

        it('should fill selected shape', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.fill).to.have.been.called;
        });

        it('should do nothing when there is no selected element', function() {
            const FAKE_LINE_WIDTH = 'no width!!!';
            canvasContext.lineWidth = FAKE_LINE_WIDTH;

            selectService.selectElement();

            expect(canvasContext.lineWidth).to.be.equal(FAKE_LINE_WIDTH);
        });

        it('should do nothing when selected element will have \'zIndex\' set to -1', function() {
            const FAKE_LINE_WIDTH = 'no width!!!';
            canvasContext.lineWidth = FAKE_LINE_WIDTH;

            selectService.selectElement({ zIndex: -1 });

            expect(canvasContext.lineWidth).to.be.equal(FAKE_LINE_WIDTH);
        });
        it('should begin canvas context path', function() {
            selectService.selectElement(selectedElement);

            expect(canvasContext.beginPath).to.have.been.called;
        });
        it('should move draw point to first shape point', function() {
            const firstPoint = square.get(0);
            selectService.selectElement(selectedElement);

            expect(canvasContext.moveTo).to.have.been.calledWith(firstPoint.x, firstPoint.y);
        });
        /**
         * P1         P2
         * *----------*
         * |          |
         * *----------*
         * P4         P3
         */
        it('should draw bezier to P1x + x offset and P1y - y offset', function() {
            const firstPoint = square.get(0);
            const x = firstPoint.x;
            const y = firstPoint.y;

            selectService.selectElement(selectedElement);

            expect(canvasContext.bezierCurveTo).to.have.been.calledWith(x + xOffset, y, x, y - yOffset, x + xOffset, y - yOffset )
        });

        it('should draw line to P2x - x offset and P2y - y offset', function() {
            const P2 = square.get(1);
            const x = P2.x;
            const y = P2.y;

            selectService.selectElement(selectedElement);

            expect(canvasContext.lineTo).to.have.been.calledAfter(canvasContext.bezierCurveTo)
                .and.calledWith(x - xOffset, y - yOffset);
        });
        /**
         *   P1    P2
         *     *--*
         *    /    \
         * P6*     *P3
         *   \    /
         *    *--*
         *  P5    P4
         */
    });
});