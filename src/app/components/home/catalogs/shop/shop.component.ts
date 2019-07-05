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
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Clinica Veterinaria Patitas',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.6,
      comments: 3,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
