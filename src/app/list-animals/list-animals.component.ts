import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from '../zoo-model';
@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss']
})
export class ListAnimalsComponent implements OnInit {
 	@Input() tempAnimals: Zoo[];
	currentlyEditing: Zoo;
  constructor() { }

  ngOnInit() {
  }
	onEditClick(animal: Zoo){
		this.currentlyEditing = animal;
	}
}
