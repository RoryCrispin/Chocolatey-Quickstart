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
var core_1 = require('@angular/core');
var TerminalView = (function () {
    function TerminalView() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TerminalView.prototype, "OutputString", void 0);
    TerminalView = __decorate([
        core_1.Component({
            selector: 'TerminalView',
            template: "\n\n       <div class=\"terminalBody\"> \n       <a class=\"terminalHeader\">>_</a>\n        C:\\ choco install \n        <a *ngFor=\"let command of OutputString\">\n        {{command}}\n        </a>\n\n       </div>\n\n\n    ",
            styles: ["\n    \n.terminalBody{\n  padding-bottom:10px;\n  padding-left:10px;\n  background-color:#EEE;\n  font-family: monospace;\n  font-size:1.6em;\n  font-weight:600;\n\n}\n\n.terminalHeader {\n  font-weight:900;\n  font-size:2em;\n}\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], TerminalView);
    return TerminalView;
}());
exports.TerminalView = TerminalView;
//# sourceMappingURL=TerminalView.js.map