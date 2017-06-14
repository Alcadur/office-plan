import Room from '../Room';
import * as helpers from '../../testHelpers';

export default function () {
    const shapeStub = sinon.stub(helpers.getShapeMock());

    const canvasContext = sinon.stub(helpers.getCanvasContext());
    const room = new Room(shapeStub);

    return { shapeStub, canvasContext, room }
}