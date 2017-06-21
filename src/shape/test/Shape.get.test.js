import beforeEachHelper from './beforeEachHelper';
import * as statics from './static';

describe('Shape', function() {
    let shape;

    beforeEach(function() {
        ({ shape } = beforeEachHelper());
    });

    describe('get', function() {
        it('should return coordination on given position when property name is number', function() {
            shape.path = [statics.POINT_1, statics.POINT_2, statics.POINT_3];

            const result1 = shape.get(0);
            const result2 = shape.get(2);

            expect(result1).to.be.equal(statics.POINT_1);
            expect(result2).to.be.equal(statics.POINT_3);
        });
    });
});