import beforeEachHelper from './beforeEachHelper';

describe('Room', function() {
    const point1 = {x: 10, y: 10};
    const point2 = {x: 20, y: 20};
    const point3 = {x: 30, y: 30};
    let fakeShapePath;
    let room;

    beforeEach(function() {
        fakeShapePath = [point1, point2, point3];
        ({ room } = beforeEachHelper());
        room.shape.path = fakeShapePath;
    });

    it('should get first shape path point', function() {
        const result = room.getPoint(0);

        expect(result).to.be.equal(point1);
    });


    it('should get shape path point from middle', function() {
        const result = room.getPoint(1);

        expect(result).to.be.equal(point2);
    });

    it('should get last shape path point', function() {
        const result = room.getPoint(2);

        expect(result).to.be.equal(point3);
    });
});