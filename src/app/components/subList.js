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
var subList = (function () {
    function subList() {
        this.didUpdateList = new core_1.EventEmitter();
    }
    subList.prototype.updateString = function () {
        // this.outputString = []
        for (var i = 0; i < this.softwarePackage.software.length; i++) {
            if (this.softwarePackage.software[i].selected) {
                this.outputString.push(this.softwarePackage.software[i].command);
            }
        }
    };
    subList.prototype.updated = function () {
        this.didUpdateList.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], subList.prototype, "softwarePackage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], subList.prototype, "didUpdateList", void 0);
    subList = __decorate([
        core_1.Component({
            selector: 'subList',
            template: "<masonry-brick class=\"subList\">\n    <p class=\"listHeader\">{{softwarePackage.name}}</p>\n      <ul>\n        <li *ngFor=\"let entry of softwarePackage.software\">\n        <a>\n        <input type=\"checkbox\" [(ngModel)]=\"entry.selected\" (change)=\"updated()\"/> \n        <!--<input type=\"checkbox\" [(ngModel)]=\"entry.selected\" (change)=\"updateString()\"/> -->\n        <img class=\"listFavicon\" [src]=\"entry.favicon\" />\n        {{entry.name}}</a>\n        </li> \n      </ul>\n    </masonry-brick>",
            styleUrls: ['app/components/subList.css']
        }), 
        __metadata('design:paramtypes', [])
    ], subList);
    return subList;
}());
exports.subList = subList;
//# sourceMappingURL=subList.js.map