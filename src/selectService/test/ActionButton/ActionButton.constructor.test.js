import ActionButton from '../../ActionButton';
import beforeEachHelper from './beforeEachHelper';
import * as statics from '../static';

describe('ActionButton', function() {
    let startPoint;
    let endPoint;
    let actionButton;
    let actionButtonService;


    beforeEach(function() {
        ({ startPoint, endPoint, actionButton, actionButtonService } = beforeEachHelper());
    });

    describe('constructor', function() {
        it('should bind copy of startPoint to start property', function() {
            expect(actionButton.start).to.be.eql(startPoint);
            expect(actionButton.start).to.not.be.equal(startPoint);
        });

        it('should bind copy of endPoint to end property', function() {
            expect(actionButton.end).to.be.eql(endPoint);
            expect(actionButton.end).to.not.be.equal(endPoint);
        });

        it('should throw error when try to change start property', function() {
            expect(function() { actionButton.start = {} }).to.throw('Attempted to assign to readonly property.');
        });

        it('should throw error when try to change end property', function() {
            expect(function() { actionButton.end = {} }).to.throw('Attempted to assign to readonly property.');
        });

        it('should calculate button direction and bind it to \'direction\' property', function() {
            actionButtonService.countDirection.returns(statics.TOP_DIRECTION);

            actionButton = new ActionButton(actionButtonService, startPoint, endPoint);

            expect(actionButton.direction).to.be.eql(statics.TOP_DIRECTION);
            expect(actionButtonService.countDirection).to.have.been.calledWith(startPoint, endPoint);
        });

        it('should generate first bezier border base on start point for horizontal button', function() {
            const bezierCoordination = { x: 0, y: 0 };
            actionButtonService.countBezierCoordination.returns(bezierCoordination);
            actionButtonService.countDirection.returns(statics.TOP_DIRECTION);

            actionButton = new ActionButton(actionButtonService, startPoint, endPoint);

            expect(actionButton.firstBorderPoints).to.be.eql(bezierCoordination);
            expect(actionButtonService.countBezierCoordination).to.have.been.calledWith(startPoint, `${statics.TOP_DIRECTION}Left`);
        });

        it('should generate second bezier border base on end point for horizontal button', function() {
            const bezierCoordination = { x: 10, y: 0 };
            actionButtonService.countBezierCoordination.returns(bezierCoordination);
            actionButtonService.countDirection.returns(statics.TOP_DIRECTION);

            actionButton = new ActionButton(actionButtonService, startPoint, endPoint);

            expect(actionButton.secondBorderPoints).to.be.eql(bezierCoordination);
            expect(actionButtonService.countBezierCoordination).to.have.been.calledWith(endPoint, `${statics.TOP_DIRECTION}Right`);
        });


        it('should generate first bezier border base on start point for vertical button', function() {
            const bezierCoordination = { x: 0, y: 10 };
            actionButtonService.countBezierCoordination.returns(bezierCoordination);
            actionButtonService.countDirection.returns(statics.LEFT_DIRECTION);

            actionButton = new ActionButton(actionButtonService, startPoint, endPoint);

            expect(actionButton.firstBorderPoints).to.be.eql(bezierCoordination);
            expect(actionButtonService.countBezierCoordination).to.have.been.calledWith(startPoint, `${statics.LEFT_DIRECTION}Bottom`);
        });

        it('should generate second bezier border base on end point for vertical button', function() {
            const bezierCoordination = { x: 10, y: 10 };
            actionButtonService.countBezierCoordination.returns(bezierCoordination);
            actionButtonService.countDirection.returns(statics.LEFT_DIRECTION);

            actionButton = new ActionButton(actionButtonService, startPoint, endPoint);

            expect(actionButton.secondBorderPoints).to.be.eql(bezierCoordination);
            expect(actionButtonService.countBezierCoordination).to.have.been.calledWith(endPoint, `${statics.LEFT_DIRECTION}Top`);
        });
    });
});