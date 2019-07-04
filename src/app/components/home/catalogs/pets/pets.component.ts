import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  @ViewChild('catalog', { read: ElementRef, static: false })
  public catalog: ElementRef<any>;
  currentPetIndex = 0;
  pets = [
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 1,
      agePeriod: 'años',
    },
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 2,
      agePeriod: 'años',
    },
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 3,
      agePeriod: 'años',
    },
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 4,
      agePeriod: 'años',
    },
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 5,
      agePeriod: 'años',
    },
    {
      image: '../../../../../../assets/img/taco.png',
      name: 'Taco',
      ageNumber: 6,
      agePeriod: 'años',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onSwipeRight(event: any) {
    if (window.innerWidth <= 1080 && this.currentPetIndex >= 0) {
      this.currentPetIndex = this.currentPetIndex - 1;
      this.catalog.nativeElement.scrollLeft -= 370;
      // TODO: move scroll relative to window.innerwidth
    }
  }

  onSwipeLeft(event: any) {
    if (window.innerWidth <= 1080 && this.currentPetIndex < this.pets.length) {
      this.currentPetIndex = this.currentPetIndex + 1;
      this.catalog.nativeElement.scrollLeft += 370;
    }
  }
}
