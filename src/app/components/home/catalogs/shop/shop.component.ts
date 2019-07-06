import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items = [
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Repelente de mosquitos',
      category: 'Salud',
      cost: '24.000',
      isAble: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Shampoo para mascotas',
      category: 'Salud',
      cost: '35.000',
      isAble: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Jabón para mascotas',
      category: 'Salud',
      cost: '14.000',
      isAble: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Correa invisible',
      category: 'Entretenimiento',
      cost: '24.000',
      isAble: false,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Pelota limpia-dientes',
      category: 'Salud, Entretenimiento',
      cost: '60.000',
      isAble: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Poste para rascar',
      category: 'Entretenimiento',
      cost: '45.000',
      isAble: true,
      rating: 4.6,
      comments: 3,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
