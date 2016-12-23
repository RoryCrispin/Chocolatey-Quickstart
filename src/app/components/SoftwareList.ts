import {Component} from '@angular/core';
import {SoftwarePackage} from "../SoftwarePackage"
import {PackageService} from "../PackageService"
import {TerminalView} from "./TerminalView/TerminalView"

@Component({
  selector: 'SoftwareList',
  template:`
   
    <div id="softwareList">
    <masonry>
      <div *ngFor="let sub of softwarePackages"> <subList [softwarePackage]="sub" (didUpdateList)="didUpdate($event)" ></subList></div>
    </masonry>
    </div>
   
   <TerminalView [OutputString]="outputString"></TerminalView>

    `,
})

export class SoftwareList{

  softwarePackages : SoftwarePackage[];

  softwarePackage1: SoftwarePackage;
  softwarePackage2: SoftwarePackage;

  outputString: string[];

  constructor(){

    // this.softwarePackages = [this.softwarePackage1, this.softwarePackage2];
    this.softwarePackages = new PackageService().getSoftwareList();
  }

  didUpdate(updated:boolean){
    this.updateWholeString();
  }

  public updateWholeString(){

    this.outputString = [];

    for (var x=0; x<this.softwarePackages.length; x++){
      for (var i =0; i<this.softwarePackages[x].software.length; i++){
        if (this.softwarePackages[x].software[i].selected) {
          this.outputString.push(this.softwarePackages[x].software[i].command);
        }
      }
    }

  }


}
