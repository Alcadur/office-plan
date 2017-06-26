import actionButtonFactory from './actionButtonFactory';

export const selectService = {
    context: null,
    actionsButtons: [],
    strokeColor: '#ffc601',
    fillColor: '#ad7e01',
    selectedElement: null,
    ACTION_BUTTON_X_OFFSET: 20,
    ACTION_BUTTON_Y_OFFSET: 30,
    selectElement (element) {
        this.selectedElement = element;

        if(!element || element.zIndex === -1) {
            return;
        }

        element.drawShape(this.context);
        this._drawObjectSelectLayer();
        this.actionsButtons = this._createAddButtons();
        this._drawButtons();
    },
    _drawObjectSelectLayer() {
        const context = this.context;
        context.lineWidth = this.selectedElement.lineWidth;
        context.strokeStyle = this.strokeColor;
        context.stroke();

        context.fillStyle = this.fillColor;
        context.fill();
    },
    _createAddButtons() {
        const actionButtonFactory = this.actionButtonFactory;
        const element = this.selectedElement;

        const topButton = actionButtonFactory(element.getPoint(0), element.getPoint(1));
        const rightButton = actionButtonFactory(element.getPoint(1), element.getPoint(2));
        const bottomButton = actionButtonFactory(element.getPoint(2), element.getPoint(3));
        const leftButton = actionButtonFactory(element.getPoint(3), element.getPoint(0));

        return [topButton, rightButton, bottomButton, leftButton];
    },
    _drawButtons() {
        this.actionsButtons.forEach((button) => button.draw(this.context));
    },
    setup({
        canvasContext = this.context,
        actionButtonFactory = this.actionButtonFactory
    } = {}) {
        this.context = canvasContext;
        this.actionButtonFactory = actionButtonFactory;

        return this;
    }
};


export default selectService.setup({ actionButtonFactory });