import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Zoo } from '../zoo-model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
	@Output() editNewSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickToAdd(){
	  const blankAnimal = new Zoo();
	  this.editNewSender.emit(blankAnimal);
  }

}
