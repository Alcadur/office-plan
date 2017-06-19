import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    let room;
    let shapeStub;
    let canvasContext;

    beforeEach(function() {
        ({ room, shapeStub, canvasContext } = beforeEachHelper());
    });

    describe('drawShape', function() {
        it('should trigger draw of room shape', function() {
            room.drawShape(canvasContext);

            expect(shapeStub.draw).to.have.been.calledWith(canvasContext);
        });
    });
});