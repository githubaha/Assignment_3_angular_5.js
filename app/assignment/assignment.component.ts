import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styles: [`
       .textColor {
           color: white;
       }
    `]
})

export class AssigmentAppComponent {
    @Input() input;
    numbers: number;

   parseInt(input) {
     return parseInt(input);
   }
}