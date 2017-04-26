"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NguiSortableDirective = (function () {
    function NguiSortableDirective(viewContainerRef) {
        var _this = this;
        this.viewContainerRef = viewContainerRef;
        this.orderChanged = new core_1.EventEmitter();
        this.dragStartHandler = function (event) {
            //console.log('dragStartHandler');
            _this.draggingEl = event.target;
            //noinspection TypeScriptUnresolvedFunction
            Object.assign(_this.draggingEl.style, {
                zIndex: 3,
                pointerEvents: 'none'
            });
        };
        this.dragHandler = function (event) {
            //console.log('dragHandler');
            //noinspection TypeScriptUnresolvedFunction
            Object.assign(_this.draggingEl.style, {
                transform: 'translate(0px,' + event.deltaY + 'px)'
            });
            var newElDragEnter = document.elementFromPoint(event.center.x, event.center.y);
            if (_this.elDragEnter !== newElDragEnter) {
                if (_this.elDragEnter) {
                    _this.elDragEnter.className = _this.elDragEnter.className.replace(/\ drag-enter/g, '');
                }
                _this.elDragEnter = newElDragEnter;
                if (newElDragEnter.tagName === 'LI') {
                    newElDragEnter.className += ' drag-enter';
                }
            }
        };
        this.dragEndHandler = function (event) {
            //console.log('dragEndHandler');
            //noinspection TypeScriptUnresolvedFunction
            Object.assign(_this.draggingEl.style, {
                transform: 'translate(0,0)',
                zIndex: 1,
                pointerEvents: 'inherit'
            });
            // remove class and drop the element
            if (_this.elDragEnter) {
                _this.elDragEnter.className = _this.elDragEnter.className.replace(/\ drag-enter/g, '');
                _this.elDragEnter.parentNode.insertBefore(_this.draggingEl, _this.elDragEnter);
                _this.emitOrderChanged();
            }
        };
        this.ulEl = this.viewContainerRef.element.nativeElement;
    }
    NguiSortableDirective.prototype.ngAfterViewInit = function () {
        this.liEls = this.ulEl.querySelectorAll('li');
        for (var i = 0; i < this.liEls.length; i++) {
            var liEl = this.liEls[i];
            // create a simple instance by default, it only adds horizontal recognizers
            var mc = new Hammer(liEl);
            // let the pan gesture support all directions.
            // this will block the vertical scrolling on a touch-device while on the element
            mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            mc.on('panstart', this.dragStartHandler);
            mc.on('panup pandown', this.dragHandler);
            mc.on('panend', this.dragEndHandler);
            this.emitOrderChanged();
        }
    };
    NguiSortableDirective.prototype.emitOrderChanged = function () {
        var liEls = this.ulEl.querySelectorAll('li');
        var orders = Array.prototype.slice.call(liEls).map(function (el) { return el.id; });
        this.orderChanged.emit(orders);
    };
    return NguiSortableDirective;
}());
NguiSortableDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ngui-sortable]'
            },] },
];
/** @nocollapse */
NguiSortableDirective.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
]; };
NguiSortableDirective.propDecorators = {
    'orderChanged': [{ type: core_1.Output },],
};
exports.NguiSortableDirective = NguiSortableDirective;
//# sourceMappingURL=sortable.directive.js.map