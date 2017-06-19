import _selectService from '../selectService'
import * as helpers from '../../testHelpers';

describe('selectService', function() {
    const LINE_WIDTH = 40;
    let selectService;
    let canvasContext;
    let selectedElement;

    beforeEach(function() {
        selectedElement = helpers.drawableObjectFactory();
        selectedElement.lineWidth = LINE_WIDTH;
        canvasContext = sinon.stub(helpers.getCanvasContext());
        selectService = Object.assign({}, _selectService);
        selectService.selectedElement = selectedElement;
        selectService.context = canvasContext;
    });

    describe('draw', function() {
        it('should draw selected element shape', function() {
            selectService.draw();

            expect(selectedElement.drawShape).to.have.been.calledWith(canvasContext);
        });

        it('should set line width equal selected element line width', function() {
            selectService.draw();

            expect(canvasContext.lineWidth).to.be.equal(LINE_WIDTH);
        });

        it('should set stroke style to strokeColor', function() {
            selectService.draw();

            expect(canvasContext.strokeStyle).to.be.equal(selectService.strokeColor);
        });

        it('should set fill style to fillColor', function() {
            selectService.draw();

            expect(canvasContext.fillStyle).to.be.equal(selectService.fillColor);
        });

        it('should draw selected stroke', function() {
            selectService.draw();

            expect(canvasContext.stroke).to.have.been.called;
        });

        it('should fill selected shape', function() {
            selectService.draw();

            expect(canvasContext.fill).to.have.been.called;
        });

        it('should do nothing when there is no selected element', function() {
            const FAKE_LINE_WIDTH = 'no width!!!';
            selectService.selectedElement = null;
            canvasContext.lineWidth = FAKE_LINE_WIDTH;

            selectService.draw(canvasContext);

            expect(canvasContext.lineWidth).to.be.equal(FAKE_LINE_WIDTH);
        });
    });
});