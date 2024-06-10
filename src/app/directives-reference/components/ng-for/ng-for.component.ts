import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss',
})
export class NgForComponent {
  public animals = ['cat', 'dog', 'horse'];

  public addAnimal() {
    this.animals.push('pig');
  }
}
