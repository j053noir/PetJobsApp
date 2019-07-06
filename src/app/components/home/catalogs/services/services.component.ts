import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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
      name: 'Manual Altamira',
      category: 'Paseador',
      workHours: '5AM-7PM',
      isOpen: false,
      rating: 4.1,
      comments: 10,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Luis Armando Cassiani',
      category: 'Entrenador',
      workHours: '5AM-7PM',
      isOpen: false,
      rating: 4.1,
      comments: 10,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Dr. Juan Manuel Ricaurte',
      category: 'Veterinario',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.0,
      comments: 3,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Fundación "el asilo politico"',
      category: 'Fundación',
      workHours: '24 horas',
      isOpen: true,
      rating: 4.7,
      comments: 19,
    },
    {
      image: '../../../../../../assets/img/petjobs_logo_header.png',
      name: 'Tu Mascot',
      category: 'Tienda de mascotas',
      workHours: '9PM-5PM',
      isOpen: false,
      rating: 3.6,
      comments: 18,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
