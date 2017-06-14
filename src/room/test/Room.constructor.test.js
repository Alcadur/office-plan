import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    let room;
    let shapeStub;

    beforeEach(function() {
        ({ room, shapeStub } = beforeEachHelper());
    });

    describe('constructor', function() {
        it('should bind new shape instance to shape property', function() {
            expect(room.shape).to.be.equal(shapeStub);
        });
    });
});