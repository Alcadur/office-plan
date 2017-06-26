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
    });
});