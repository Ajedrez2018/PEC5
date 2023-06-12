import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input()
  cards!: Card[];
}
