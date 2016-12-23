import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { subList }  from './components/subList';
import { SoftwareList }  from './components/SoftwareList';
import { MasonryModule } from 'angular2-masonry';
import { TerminalView } from './components/TerminalView/TerminalView';

import { header }  from './components/header/header';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MasonryModule ],
  declarations: [ AppComponent,  subList, header, SoftwareList, TerminalView ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
