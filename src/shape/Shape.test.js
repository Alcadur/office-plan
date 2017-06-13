import Shape from './Shape';

describe('Shape', function() {
    const POINT_1 = { x: 2, y: 2 };
    const POINT_2 = { x: 5, y: 5 };
    const POINT_3 = { x: 2, y: 5 };
    let shape;

    beforeEach(function() {
        shape = new Shape();
    });

    describe('constructor', function() {
        //TODO constructor tests || remove describe
    });

    describe('addPoint', function() {
        it('should add shape path points and return shape', function() {
            shape.addPoint(POINT_1.x, POINT_1.y)
                .addPoint(POINT_2.x, POINT_2.y)
                .addPoint(POINT_3.x, POINT_3.y);

            expect(shape.path).to.be.eql([POINT_1, POINT_2, POINT_3])
        });
    });

    describe('draw', function() {
        let contextMock;

        beforeEach(function() {
            contextMock = sinon.stub({
                beginPath: function() {},
                moveTo: function() {},
                lineTo: function() {},
                closePath: function() {}
            });
        });

        afterEach(function() {
            //contextMock.restore();
        });

        it('should beginPth and move to start position (first point in path)', function() {
            shape.path = [POINT_3, POINT_2];

            shape.draw(contextMock);

            expect(contextMock.beginPath).to.have.been.called;
            expect(contextMock.moveTo).to.have.been.calledWith(POINT_3.x, POINT_3.y);
        });

        it('should not change path property', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(contextMock);

            expect(shape.path).to.have.lengthOf(3);
            expect(shape.path).to.be.eql([POINT_1, POINT_2, POINT_3]);
        });

        it('should draw line between all path point', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(contextMock);

            expect(contextMock.lineTo.getCall(0)).to.have.been.calledWith(POINT_2.x, POINT_2.y);
            expect(contextMock.lineTo.getCall(1)).to.have.been.calledWith(POINT_3.x, POINT_3.y);
        });

        it('should close path after draw line to last path point', function() {
            shape.path = [POINT_1, POINT_2, POINT_3];

            shape.draw(contextMock);

            expect(contextMock.closePath).to.have.been.called;
        });
    });
});