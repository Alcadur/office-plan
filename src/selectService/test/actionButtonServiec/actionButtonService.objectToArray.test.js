import beforeEachHelper from './beforeEachHelper';

describe('actionButtonService', function() {
    let actionButtonService;
    let objValues;
    let obj;

    beforeEach(function() {
        objValues = ['key1-value', 'key2-value', 'key3-value'];
        obj  = {
            key1: objValues[0],
            key2: objValues[1],
            key3: objValues[2],
        };
        ({ actionButtonService } = beforeEachHelper());
    });


    describe('objectToArray', function() {
        it('should map object to array with values of object', function() {
            const result = actionButtonService.objectToArray(obj);

            expect(result).to.be.eql(objValues);
        });
    });
});