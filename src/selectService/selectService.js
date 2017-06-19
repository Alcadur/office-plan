export default {
    context: null,
    strokeColor: '#ffc601',
    fillColor: '#ad7e01',
    selectedElement: null,
    draw: function () {
        if(!this.selectedElement) {
            return;
        }

        this.selectedElement.drawShape(this.context);

        this.context.lineWidth = this.selectedElement.lineWidth;
        this.context.strokeStyle = this.strokeColor;
        this.context.stroke();

        this.context.fillStyle = this.fillColor;
        this.context.fill();
    },
    setup(context) {
        this.context = context;

        return this;
    }
}