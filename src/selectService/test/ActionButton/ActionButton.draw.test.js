import beforeEachHelper from './beforeEachHelper';

describe('ActionButton', function() {
    let actionButton;
    let canvasContext;

    beforeEach(function() {
        ({ actionButton, canvasContext } = beforeEachHelper());
        sinon.stub(actionButton, 'drawShape');
    });

    describe('draw', function() {
        it('should draw button shape', function() {
           actionButton.draw(canvasContext);

           expect(actionButton.drawShape).to.have.been.calledWith(canvasContext);
        });

        it('should stroke button shape', function() {
            actionButton.draw(canvasContext);

            expect(canvasContext.stroke).to.have.been.called;
        });

        it('should fill button shape', function() {
            actionButton.draw(canvasContext);

            expect(canvasContext.fill).to.have.been.called;
        });
    });
});