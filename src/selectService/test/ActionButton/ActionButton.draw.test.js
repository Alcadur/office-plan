import beforeEachHelper from './beforeEachHelper';

describe('ActionButton', function() {
    let actionButton;
    let canvasContext;

    beforeEach(function() {
        ({ actionButton, canvasContext } = beforeEachHelper());
        sinon.stub(actionButton, 'drawShape');
    });

    describe('draw', function() {
        const LINE_WIDTH = 5;

        it('should draw button shape', function() {
           actionButton.draw(canvasContext);

           expect(actionButton.drawShape).to.have.been.calledWith(canvasContext);
        });

    });
});