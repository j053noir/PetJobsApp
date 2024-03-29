import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {
  @Input() pet: any;

  constructor() {}

  ngOnInit() {}
}
