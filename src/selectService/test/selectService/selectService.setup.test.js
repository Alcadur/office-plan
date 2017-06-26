import _selectService from '../../selectService'

describe('selectService', function() {
    const FAKE_CONTEXT = 'canvas context';
    const DEFAULT_VALUES = {
        context: 'canvasContext',
        actionButtonFactory: 'actionButtonFactory'
    };
    let selectService;

    beforeEach(function() {
        selectService = Object.assign({}, _selectService, DEFAULT_VALUES);
    });

    describe('setup', function() {
        it('should bind canvas context to service context property', function() {
            selectService.setup({ canvasContext: FAKE_CONTEXT });

            expect(selectService.context).to.be.equal(FAKE_CONTEXT);
        });

        it('should bind action button factory to service actionButtonFactory property', function() {
            const actionButtonFactory = sinon.stub();

            selectService.setup({ actionButtonFactory });

            expect(selectService.actionButtonFactory).to.be.equal(actionButtonFactory);
        });

        it('should return selectedService', function() {
            const result = selectService.setup();

            expect(result).to.be.equal(selectService);
        });

        it('should not change another settings when setup canvas context', function() {
            selectService.setup({ canvasContext: FAKE_CONTEXT });

            expect(selectService.actionButtonFactory).to.be.equal(DEFAULT_VALUES.actionButtonFactory);
        });

        it('should not change another settings when setup actionButtonFactory', function() {
            selectService.setup({ actionButtonFactory: sinon.stub() });

            expect(selectService.context).to.be.equal(DEFAULT_VALUES.context);
        });
    });
});