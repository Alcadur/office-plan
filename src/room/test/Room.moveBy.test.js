import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    let room;
    let shapeStub;

    beforeEach(function() {
        ({ room, shapeStub} = beforeEachHelper());
    });

    describe('moveBy', function() {
        it('should shape calculate new points values', function() {
            const X = 4;
            const Y = 6;

            room.moveBy(X, Y);

            expect(shapeStub.moveBy).to.have.been.calledWith({ x: X, y: Y });
        });

        it('should return room', function() {
            const result = room.moveBy(0, 0);

            expect(result).to.be.equal(room);
        });
    });
});