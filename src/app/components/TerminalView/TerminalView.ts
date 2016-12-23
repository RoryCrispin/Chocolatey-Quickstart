import {Component, Input} from '@angular/core';
@Component({
  selector: 'TerminalView',
  template:`

       <div class="terminalBody"> 
       <a class="terminalHeader">>_</a>
        C:\\ choco install 
        <a *ngFor="let command of OutputString">
        {{command}}
        </a>

       </div>


    `, 
    styles:[`
    
.terminalBody{
  padding-bottom:10px;
  padding-left:10px;
  background-color:#EEE;
  font-family: monospace;
  font-size:1.6em;
  font-weight:600;

}

.terminalHeader {
  font-weight:900;
  font-size:2em;
}
    `],
})

export class TerminalView{
    @Input() OutputString : String[];

}