(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["sortable"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else
		root["sortable"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
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
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NguiSortableDirective.prototype, "orderChanged", void 0);
NguiSortableDirective = __decorate([
    core_1.Directive({
        selector: '[ngui-sortable]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], NguiSortableDirective);
exports.NguiSortableDirective = NguiSortableDirective;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(5);
var common_1 = __webpack_require__(4);
var sortable_directive_1 = __webpack_require__(0);
var NguiSortableModule = (function () {
    function NguiSortableModule() {
    }
    return NguiSortableModule;
}());
NguiSortableModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [sortable_directive_1.NguiSortableDirective],
        exports: [sortable_directive_1.NguiSortableDirective]
    })
], NguiSortableModule);
exports.NguiSortableModule = NguiSortableModule;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortable_directive_1 = __webpack_require__(0);
exports.NguiSortableDirective = sortable_directive_1.NguiSortableDirective;
var sortable_module_1 = __webpack_require__(2);
exports.NguiSortableModule = sortable_module_1.NguiSortableModule;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=sortable.umd.js.map