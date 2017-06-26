import { selectService as _selectService } from '../../selectService'
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
    let actionButtonFactoryStub;
    const button1 = helpers.drawableObjectFactory();
    const button2 = helpers.drawableObjectFactory();
    const button3 = helpers.drawableObjectFactory();
    const button4 = helpers.drawableObjectFactory();


    beforeEach(function() {
        actionButtonFactoryStub = sinon.stub();
        actionButtonFactoryStub.returns(helpers.drawableObjectFactory())
        .onCall(0).returns(button1)
        .onCall(1).returns(button2)
        .onCall(2).returns(button3)
        .onCall(3).returns(button4);


        square = statics.square;
        selectedElement = helpers.drawableObjectFactory();
        selectedElement.shape = square;
        selectedElement.lineWidth = LINE_WIDTH;
        canvasContext = sinon.stub(helpers.getCanvasContext());
        selectService = Object.assign({}, _selectService);
        selectService.context = canvasContext;
        selectService.actionButtonFactory = actionButtonFactoryStub;
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

        it('should draw actions buttons', function() {
            selectService.selectElement(selectedElement);

            expect(actionButtonFactoryStub.getCalls()).to.have.lengthOf(4);
        });

        it('should create top action button', function() {
            selectedElement.getPoint.onCall(0).returns(square.path[0])
                .onCall(1).returns(square.path[1]);

            selectService.selectElement(selectedElement);

            expect(actionButtonFactoryStub).to.have.been.calledWith(square.path[0], square.path[1]);
        });

        it('should create right action button', function() {
            selectedElement.getPoint.onCall(2).returns(square.path[1])
                           .onCall(3).returns(square.path[2]);

            selectService.selectElement(selectedElement);

            expect(actionButtonFactoryStub).to.have.been.calledWith(square.path[1], square.path[2]);
        });

        it('should create bottom action button', function() {
            selectedElement.getPoint.onCall(4).returns(square.path[2])
                           .onCall(5).returns(square.path[3]);

            selectService.selectElement(selectedElement);

            expect(actionButtonFactoryStub).to.have.been.calledWith(square.path[2], square.path[3]);
        });

        it('should create bottom action button', function() {
            selectedElement.getPoint.onCall(6).returns(square.path[3])
                           .onCall(7).returns(square.path[0]);

            selectService.selectElement(selectedElement);

            expect(actionButtonFactoryStub).to.have.been.calledWith(square.path[3], square.path[0]);
        });

        it('should bind actions buttons to actionsButtons property', function() {
            selectService.selectElement(selectedElement);

            expect(selectService.actionsButtons).to.have.lengthOf(4);
            expect(selectService.actionsButtons[0]).to.be.equal(button1);
            expect(selectService.actionsButtons[1]).to.be.equal(button2);
            expect(selectService.actionsButtons[2]).to.be.equal(button3);
            expect(selectService.actionsButtons[3]).to.be.equal(button4);
        });

        it('should draw all action buttons', function() {
            selectService.selectElement(selectedElement);

            expect(button1.draw).to.have.been.calledWith(canvasContext);
            expect(button2.draw).to.have.been.calledWith(canvasContext);
            expect(button3.draw).to.have.been.calledWith(canvasContext);
            expect(button4.draw).to.have.been.calledWith(canvasContext);
        });
    });
});