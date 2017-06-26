import ActionButton from './ActionButton';
import actionButtonService from './actionButtonService';

export default function(startPoint, endPoint) {
    return new ActionButton(actionButtonService, startPoint, endPoint);
}