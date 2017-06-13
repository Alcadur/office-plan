import Room from './Room';
import * as helpers from '../testHelpers'

describe('Room', function() {
    let room;
    let shapeStub;
    let canvasContext;

    beforeEach(function() {
        shapeStub = sinon.stub(helpers.getShapeMock());

        canvasContext = sinon.stub(helpers.getCanvasContext());
        room = new Room(shapeStub);
    });

    describe('constructor', function() {
        it('should bind new shape instance to shape property', function() {
            expect(room.shape).to.be.equal(shapeStub);
        });
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