import Shape from '../Shape';

describe('Shape', function() {
    const POINT_1 = { x: 2, y: 2 };
    const POINT_2 = { x: 5, y: 5 };
    const POINT_3 = { x: 2, y: 5 };
    let shape;

    beforeEach(function() {
        shape = new Shape();
    });

    describe('moveBy', function() {
        it('should recalculate all coordinates by vector', function() {
            const MOVE_BY_VECTOR = { x: 2, y: 7 };
            shape.path = [copy(POINT_1), copy(POINT_2), copy(POINT_3)];

            shape.moveBy(MOVE_BY_VECTOR);

            expect(shape.path[0]).to.have.been.eql({ x: POINT_1.x + MOVE_BY_VECTOR.x, y: POINT_1.y + MOVE_BY_VECTOR.y});
            expect(shape.path[1]).to.have.been.eql({ x: POINT_2.x + MOVE_BY_VECTOR.x, y: POINT_2.y + MOVE_BY_VECTOR.y});
            expect(shape.path[2]).to.have.been.eql({ x: POINT_3.x + MOVE_BY_VECTOR.x, y: POINT_3.y + MOVE_BY_VECTOR.y});
        });

        function copy(obj) {
            return Object.assign({}, obj);
        }
    });
});