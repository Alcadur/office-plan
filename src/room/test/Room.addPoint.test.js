import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    let room;
    let shapeStub;

    beforeEach(function() {
        ({ room, shapeStub } = beforeEachHelper());
    });

    describe('addPoint', function() {
        it('should add point in shape', function() {
            const X = 3;
            const Y = 5;

            room.addPoint(X, Y);

            expect(shapeStub.addPoint).to.have.been.calledWith(X, Y);
        });

        it('should return room', function() {
            const result = room.addPoint(0, 0);

            expect(result).to.be.equal(room);
        });
    });
});