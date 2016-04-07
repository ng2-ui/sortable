System.register("src/seed-examples/my.pipe", ["node_modules/angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var MyPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyPipe = (function () {
                function MyPipe() {
                }
                MyPipe.prototype.transform = function (v, args) {
                    return 'My ' + v;
                };
                MyPipe = __decorate([
                    core_1.Pipe({ name: 'my' })
                ], MyPipe);
                return MyPipe;
            }());
            exports_1("MyPipe", MyPipe);
        }
    }
});

System.register("src/seed-examples/my.service", ["node_modules/angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var MyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyService = (function () {
                function MyService() {
                    this.hello = "Hello From MyService\n    packaged as ng2-package-seed";
                }
                MyService = __decorate([
                    core_1.Injectable()
                ], MyService);
                return MyService;
            }());
            exports_1("MyService", MyService);
        }
    }
});

System.register("ng2-package-seed", ["src/seed-examples/my.pipe", "src/seed-examples/my.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var my_pipe_1, my_service_1;
    var MY_PROVIDERS;
    var exportedNames_1 = {
        'MY_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (my_pipe_1_1) {
                my_pipe_1 = my_pipe_1_1;
                exportStar_1(my_pipe_1_1);
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
                exportStar_1(my_service_1_1);
            }],
        execute: function() {
            exports_1("MY_PROVIDERS", MY_PROVIDERS = [
                my_pipe_1.MyPipe,
                my_service_1.MyService
            ]);
        }
    }
});
