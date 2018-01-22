import { Component, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  	title = 'You-Zoo';
	animals: Zoo[] = [
		{added : "Sunday, January 21st 2018, 3:22:12 pm", species : "Arctic Fox", name : "Moon", age : 1, diet : "Carnivore", location : "Northern Trail", caretakers : 5, sex : "Female", likes : "Cool shade", dislikes : "Loud noise", newAnimal : false},
		{added : "Friday, January 19th 2018, 5:34:22 pm", species : "Ocelot", name : "Prince", age : 4, diet : "Carnivore", location : "Tropical Rain Forest Building", caretakers : 6, sex : "Male", likes : "Laying in the sunshine", dislikes : "Toys that are not rope-based", newAnimal : false},
		{added : "Monday, January 15th 2018, 1:14:55 pm", species : "Northwest Black Tailed Deer", name : "Tinkerbell", age : 8, diet : "Herbivore", location : "Northern Trail", caretakers : 2, sex : "Female", likes : "Delicate roots and leaves", dislikes : "Loud Noises", newAnimal : false}
	];


}
