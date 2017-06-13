export default class Canvas {
    constructor(canvasSelector) {
        this.staticElements = [];
        this.elements = [];
        this.node = document.querySelector(canvasSelector);
        this.context = this.node.getContext('2d');
    }

    addStaticElement(staticElement) {
        this._addElementTo(staticElement, this.staticElements);
    }

    _addElementTo(element, array) {
        if(this._isElementInArray(array, element)) {
            throw new Error('Duplicated ID');
        }

        array.push(element);
    }

    _isElementInArray(array, element) {
        return !!array.find(function(arrayElement) {
            return arrayElement.id === element.id;
        });
    }

    addElement(element) {
        this._addElementTo(element, this.elements);
    }

    findObjByCoordinates(x, y) {
        return this.elements.filter(function(element) {
           return element.start.x < x && element.start.y > y && element.end.x > x && element.end.y < y;
        }).reduce(function(previousElement, currentElement){
            if(previousElement.zIndex > currentElement.zIndex) {
                return previousElement;
            }

            return currentElement;
        }, { zIndex: -1 });
    }

    drow() {
        this.elements.forEach(function(element) {

        });

        this.staticElements.forEach(function(element) {

        });
    }

    drawPath(start, end) {
        this.context.beginPath();
        this.context.lineWidth = .5;
        this.context.moveTo(start.x, start.y);
        this.context.lineTo(end.x, start.y);
        this.context.lineTo(end.x, end.y);
        this.context.lineTo(start.x, end.y);
        this.context.closePath();

        //no test case
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();
    }

    fitToWindow() {
        this.node.width = window.innerWidth;
        this.node.height = window.innerHeight;
    }
}