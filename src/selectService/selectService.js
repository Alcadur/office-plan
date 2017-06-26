import actionButtonFactory from './actionButtonFactory';

export default {
    context: null,
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
        this._drawAddButtons();

    },
    _drawObjectSelectLayer() {
        const context = this.context;
        context.lineWidth = this.selectedElement.lineWidth;
        context.strokeStyle = this.strokeColor;
        context.stroke();

        context.fillStyle = this.fillColor;
        context.fill();
    },
    _drawAddButtons() {
        actionButtonFactory(this.selectedElement.shape.get(0), this.selectedElement.shape.get(1)).draw(this.context);
        actionButtonFactory(this.selectedElement.shape.get(1), this.selectedElement.shape.get(2)).draw(this.context);
        actionButtonFactory(this.selectedElement.shape.get(2), this.selectedElement.shape.get(3)).draw(this.context);
        actionButtonFactory(this.selectedElement.shape.get(3), this.selectedElement.shape.get(0)).draw(this.context);
    },
    setup(context) {
        this.context = context;

        return this;
    }
}