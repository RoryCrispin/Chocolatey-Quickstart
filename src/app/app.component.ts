import { Component } from '@angular/core';
import {subList} from './components/subList';
import {SoftwareList} from './components/SoftwareList';
import {header} from './components/header/header';

@Component({
  selector: 'app-root',
  template: `
    <html>
      <header> </header>
      <SoftwareList> </SoftwareList>
    </html>
  `, 
  styleUrls: ['app/app.component.css']
})

export class AppComponent  {
  
  }
  
 

