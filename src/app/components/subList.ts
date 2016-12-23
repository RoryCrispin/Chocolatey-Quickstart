import {Component, Input, EventEmitter, Output} from '@angular/core';
//import {softwareEntry} from "../softwareEntry"
import {SoftwarePackage} from "../SoftwarePackage"

@Component({
    selector: 'subList',
    template:`<masonry-brick class="subList">
    <p class="listHeader">{{softwarePackage.name}}</p>
      <ul>
        <li *ngFor="let entry of softwarePackage.software">
        <a>
        <input type="checkbox" [(ngModel)]="entry.selected" (change)="updated()"/> 
        <!--<input type="checkbox" [(ngModel)]="entry.selected" (change)="updateString()"/> -->
        <img class="listFavicon" [src]="entry.favicon" />
        {{entry.name}}</a>
        </li> 
      </ul>
    </masonry-brick>`,
    styleUrls:['app/components/subList.css']

})


export class subList{
  outputString:string[];
  @Input()  softwarePackage : SoftwarePackage;
  @Output() didUpdateList = new EventEmitter<boolean>();

  constructor() {
}
 updateString(){
    // this.outputString = []
    for (var i =0; i<this.softwarePackage.software.length; i++){

      if (this.softwarePackage.software[i].selected) {
        this.outputString.push(this.softwarePackage.software[i].command);
      }
    }
  }
  updated(){
    this.didUpdateList.emit(true);
  }

}
