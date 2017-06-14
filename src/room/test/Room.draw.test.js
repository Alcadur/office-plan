import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    let room;
    let shapeStub;
    let canvasContext;

    beforeEach(function() {
        ({ room, shapeStub, canvasContext } = beforeEachHelper());
    });

    describe('draw', function() {
        it('should set context strokeStyle to strokeColor property', function() {
            room.draw(canvasContext);

            expect(canvasContext.strokeStyle).to.be.equal(room.strokeColor);
        });

        it('should set context fillStyle to fillColor property', function() {
            room.draw(canvasContext);

            expect(canvasContext.fillStyle).to.be.equal(room.fillColor);
        });

        it('should draw room shape', function() {
            room.draw(canvasContext);

            expect(shapeStub.draw).to.have.been.calledWith(canvasContext);
        });

        it('should fill room', function() {
            room.draw(canvasContext);

            expect(canvasContext.fill).to.have.been.called;
        });

        it('should stork room', function() {
            room.draw(canvasContext);

            expect(canvasContext.stroke).to.have.been.called;
        });

        it('should set context lineWidth to room lineWidth property', function() {
            room.draw(canvasContext);

            expect(canvasContext.lineWidth).to.be.eql(room.lineWidth);
        });

        it('should return room', function() {
            const result = room.draw(canvasContext);

            expect(result).to.be.equal(room);
        });
    });
});