import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  item = {
    image: '../../../../../../assets/img/petjobs_logo_header.png',
    name: 'Clinica Veterinaria Patitas',
    category: 'Veterinario',
    workHours: '24 horas',
    isOpen: true,
    rating: 4.6,
    comments: 3,
  };

  constructor() {}

  ngOnInit() {}
}
