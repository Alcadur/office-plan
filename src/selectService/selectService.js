export default {
    context: null,
    strokeColor: '#ffc601',
    fillColor: '#ad7e01',
    selectedElement: null,
    selectElement (element) {
        this.selectedElement = element;

        if(!element) {
            return;
        }

        element.drawShape(this.context);

        this.context.lineWidth = element.lineWidth;
        this.context.strokeStyle = this.strokeColor;
        this.context.stroke();

        this.context.fillStyle = this.fillColor;
        this.context.fill();
    },
    drawAddButtons() {

    },
    setup(context) {
        this.context = context;

        return this;
    }
}