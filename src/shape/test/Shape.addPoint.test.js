import Shape from '../Shape';

describe('Shape', function() {
    const POINT_1 = { x: 2, y: 2 };
    const POINT_2 = { x: 5, y: 5 };
    const POINT_3 = { x: 2, y: 5 };
    let shape;

    beforeEach(function() {
        shape = new Shape();
    });

    describe('addPoint', function() {
        it('should add shape path points and return shape', function() {
            shape.addPoint(POINT_1.x, POINT_1.y)
                 .addPoint(POINT_2.x, POINT_2.y)
                 .addPoint(POINT_3.x, POINT_3.y);

            expect(shape.path).to.be.eql([POINT_1, POINT_2, POINT_3])
        });
    });
});