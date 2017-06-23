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
        const context = this.context;
        const startPoint = this.selectedElement.shape.get(0);
        const startX = startPoint.x;
        const startY = startPoint.y;
        const endPoint = this.selectedElement.shape.get(1);
        const endX = endPoint.x;
        const endY = endPoint.y;

        context.beginPath();
        context.moveTo(startX, startY);

        context.bezierCurveTo(startX + this.ACTION_BUTTON_X_OFFSET,
            startY,
            startX,
            startY - this.ACTION_BUTTON_Y_OFFSET,
            startX + this.ACTION_BUTTON_X_OFFSET,
            startY - this.ACTION_BUTTON_Y_OFFSET);

        context.lineTo(endX - this.ACTION_BUTTON_X_OFFSET, endY - this.ACTION_BUTTON_Y_OFFSET);
        //context.closePath()
        //context.strokeStyle = 'red';
        //context.stroke();
    },
    setup(context) {
        this.context = context;

        return this;
    }
}