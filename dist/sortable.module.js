"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var sortable_directive_1 = require("./sortable.directive");
var NguiSortableModule = (function () {
    function NguiSortableModule() {
    }
    return NguiSortableModule;
}());
NguiSortableModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, forms_1.FormsModule],
                declarations: [sortable_directive_1.NguiSortableDirective],
                exports: [sortable_directive_1.NguiSortableDirective]
            },] },
];
/** @nocollapse */
NguiSortableModule.ctorParameters = function () { return []; };
exports.NguiSortableModule = NguiSortableModule;
//# sourceMappingURL=sortable.module.js.map