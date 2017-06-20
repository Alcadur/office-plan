import _selectService from '../selectService'

describe('selectService', function() {
    const FAKE_CONTEXT = 'canvas context';
    let selectService;

    beforeEach(function() {
        selectService = Object.assign({}, _selectService);

    });

    describe('setup', function() {
        it('should bind canvas context to service context property', function() {
            selectService.setup(FAKE_CONTEXT);

            expect(selectService.context).to.be.equal(FAKE_CONTEXT);
        });

        it('should return selectedService', function() {
            const result = selectService.setup();

            expect(result).to.be.equal(selectService);
        })
    });
});