import _actionButtonService from '../../actionButtonService'

export default function () {
    return {
        actionButtonService: Object.assign({}, _actionButtonService),
        startPoint: { x: 10, y: 10 },
        endPoint: { x: 50, y: 10 }
    }
}