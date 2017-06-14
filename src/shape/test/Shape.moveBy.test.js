import beforeEachHelper from './beforeEachHelper';
import * as statics from './static';

describe('Shape', function() {
    let shape;

    beforeEach(function() {
        ({ shape } = beforeEachHelper());
    });

    describe('moveBy', function() {
        it('should recalculate all coordinates by vector', function() {
            const MOVE_BY_VECTOR = { x: 2, y: 7 };
            shape.path = [copy(statics.POINT_1), copy(statics.POINT_2), copy(statics.POINT_3)];

            shape.moveBy(MOVE_BY_VECTOR);

            expect(shape.path[0]).to.have.been.eql({ x: statics.POINT_1.x + MOVE_BY_VECTOR.x, y: statics.POINT_1.y + MOVE_BY_VECTOR.y});
            expect(shape.path[1]).to.have.been.eql({ x: statics.POINT_2.x + MOVE_BY_VECTOR.x, y: statics.POINT_2.y + MOVE_BY_VECTOR.y});
            expect(shape.path[2]).to.have.been.eql({ x: statics.POINT_3.x + MOVE_BY_VECTOR.x, y: statics.POINT_3.y + MOVE_BY_VECTOR.y});
        });

        function copy(obj) {
            return Object.assign({}, obj);
        }
    });
});