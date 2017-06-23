import ActionButton from '../../ActionButton'


describe('ActionButton', function() {
    const TOP_DIRECTION = 'top';
    const RIGHT_DIRECTION = 'right';
    const BOTTOM_DIRECTION = 'bottom';
    const LEFT_DIRECTION = 'left';
    let startPoint;
    let endPoint;
    let actionButton;


    beforeEach(function() {
        startPoint = { x: 10, y: 10 };
        endPoint = { x: 50, y: 10 };

        console.log(ActionButton);

        actionButton = new ActionButton(startPoint, endPoint);
    });

    describe('constructor', function() {
        it('should bind copy of startPoint to start property', function() {
            expect(actionButton.start).to.be.eql(startPoint);
            expect(actionButton.start).to.not.be.equal(startPoint);
        });

        it('should bind copy of endPoint to end property', function() {
            expect(actionButton.end).to.be.eql(endPoint);
            expect(actionButton.end).to.not.be.equal(endPoint);
        });

        it('should throw error when try to change start property', function() {
            expect(function() { actionButton.start = {} }).to.throw('Attempted to assign to readonly property.');
        });

        it('should throw error when try to change end property', function() {
            expect(function() { actionButton.end = {} }).to.throw('Attempted to assign to readonly property.');
        });
    });
});