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
	clearEdit(){
		this.currentlyEditing = null;
	}
	onEditClick(animal: Zoo){
		this.currentlyEditing = animal;
		console.log(animal)
	}
	addNewAndEdit(animal){
		this.tempAnimals.push(animal);
		this.currentlyEditing = animal;
	}
}
