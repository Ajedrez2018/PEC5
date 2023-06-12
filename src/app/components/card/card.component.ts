import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  card!: Card;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    const idRuta = this.route.snapshot.paramMap.get('id');
    if (idRuta) {
      this.id = idRuta;
      this.listService.getPhotoById(this.id).subscribe((x) => {
        this.card = x;
      });
    }
  }
}
