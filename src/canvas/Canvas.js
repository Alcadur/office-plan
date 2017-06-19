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

        return this;
    }

    findObjByCoordinates(x, y) {
        return this.elements.filter((element) => {
            element.drawShape(this.context);
            return this.context.isPointInPath(x, y);
        }).reduce(function(previousElement, currentElement){
            if(previousElement.zIndex > currentElement.zIndex) {
                return previousElement;
            }

            return currentElement;
        }, { zIndex: -1 });
    }

    draw() {
        this.context.clearRect(0, 0, this.node.width, this.node.height);

        this.elements.forEach((element) => {
            element.draw(this.context);
        });

        this.staticElements.forEach((element) => {
            element.draw(this.context);
        });

        return this;
    }

    fitToWindow() {
        this.node.width = window.innerWidth;
        this.node.height = window.innerHeight;

        return this;
    }
}