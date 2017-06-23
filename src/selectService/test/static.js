import * as helpers from '../../testHelpers'

const SP1 = { x: 0, y: 0 };
const SP2 = { x: 50, y: 0 };
const SP3 = { x: 50, y: 50 };
const SP4 = { x: 50, y: 0 };
export const square = helpers.getShapeMock([SP1, SP2, SP3, SP4]);

const HP1 = { x: 0, y: 0 };
const HP2 = { x: 0, y: 0 };
const HP3 = { x: 0, y: 0 };
const HP4 = { x: 0, y: 0 };
const HP5 = { x: 0, y: 0 };
const HP6 = { x: 0, y: 0 };
export const hexagon = helpers.getShapeMock([HP1, HP2, HP3, HP4, HP5, HP6]);

export const TOP_DIRECTION = 'top';
export const RIGHT_DIRECTION = 'right';
export const BOTTOM_DIRECTION = 'bottom';
export const LEFT_DIRECTION = 'left';