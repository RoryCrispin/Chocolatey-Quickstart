import {Component} from '@angular/core';

@Component ({
    selector: 'header',
    template: `

    <div id="header">

        <h1> Get going quick!</h1>
        
        <div id="headercontent">
            Set up new systems with all the software you know and love, powered by 
            <a href="https://chocolatey.org/">Choclatey</a>
        </div>


    </div>
    
    `,
    styleUrls: ['app/components/header/header.css']
})

export class header{
    
}