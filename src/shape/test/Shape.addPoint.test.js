import beforeEachHelper from './beforeEachHelper';
import * as statics from './static';

describe('Shape', function() {
    let shape;

    beforeEach(function() {
        ({ shape } = beforeEachHelper());
    });

    describe('addPoint', function() {
        it('should add shape path points and return shape', function() {
            shape.addPoint(statics.POINT_1.x, statics.POINT_1.y)
                 .addPoint(statics.POINT_2.x, statics.POINT_2.y)
                 .addPoint(statics.POINT_3.x, statics.POINT_3.y);

            expect(shape.path).to.be.eql([statics.POINT_1, statics.POINT_2, statics.POINT_3])
        });
    });
});