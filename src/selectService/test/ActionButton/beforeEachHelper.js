import sinon from 'sinon';
import _actionButtonService from '../../actionButtonService';
import ActionButton from '../../ActionButton';
import * as helpers from '../../../testHelpers';

export default function() {
    const startPoint = { x: 10, y: 10 };
    const endPoint = { x: 50, y: 10 };
    const actionButtonService = sinon.stub(Object.assign({}, _actionButtonService));

    return {
        startPoint,
        endPoint,
        actionButton: new ActionButton(actionButtonService, startPoint, endPoint),
        actionButtonService,
        canvasContext: sinon.stub(helpers.getCanvasContext())
    }
}