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
var header = (function () {
    function header() {
    }
    header = __decorate([
        core_1.Component({
            selector: 'header',
            template: "\n\n    <div id=\"header\">\n\n        <h1> Get going quick!</h1>\n        \n        <div id=\"headercontent\">\n            Set up new systems with all the software you know and love, powered by \n            <a href=\"https://chocolatey.org/\">Choclatey</a>\n        </div>\n\n\n    </div>\n    \n    ",
            styleUrls: ['app/components/header/header.css']
        }), 
        __metadata('design:paramtypes', [])
    ], header);
    return header;
}());
exports.header = header;
//# sourceMappingURL=header.js.map