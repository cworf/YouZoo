import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from '../zoo-model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {
	@Input() currentlyEditingThis: Zoo;
  constructor() { }

  ngOnInit() {
  }
}
