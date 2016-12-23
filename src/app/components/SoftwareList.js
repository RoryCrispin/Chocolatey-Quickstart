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
var PackageService_1 = require("../PackageService");
var SoftwareList = (function () {
    function SoftwareList() {
        // this.softwarePackages = [this.softwarePackage1, this.softwarePackage2];
        this.softwarePackages = new PackageService_1.PackageService().getSoftwareList();
    }
    SoftwareList.prototype.didUpdate = function (updated) {
        this.updateWholeString();
    };
    SoftwareList.prototype.updateWholeString = function () {
        this.outputString = [];
        for (var x = 0; x < this.softwarePackages.length; x++) {
            for (var i = 0; i < this.softwarePackages[x].software.length; i++) {
                if (this.softwarePackages[x].software[i].selected) {
                    this.outputString.push(this.softwarePackages[x].software[i].command);
                }
            }
        }
    };
    SoftwareList = __decorate([
        core_1.Component({
            selector: 'SoftwareList',
            template: "\n   \n    <div id=\"softwareList\">\n    <masonry>\n      <div *ngFor=\"let sub of softwarePackages\"> <subList [softwarePackage]=\"sub\" (didUpdateList)=\"didUpdate($event)\" ></subList></div>\n    </masonry>\n    </div>\n   \n   <TerminalView [OutputString]=\"outputString\"></TerminalView>\n\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], SoftwareList);
    return SoftwareList;
}());
exports.SoftwareList = SoftwareList;
//# sourceMappingURL=SoftwareList.js.map