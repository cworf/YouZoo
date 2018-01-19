import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from '../zoo-model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {
	@Input() currentlyEditingThis: Zoo;
	@Output() doneSender = new EventEmitter();

  constructor() { }
	sendDone(){
		this.doneSender.emit();
	}
  ngOnInit() {
  }
}
