import { Component } from '@angular/core';
import { Zoo } from './zoo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
	animals: Zoo[] = [
		{species : "Arctic Fox", name : "Moon", age : 2, diet : "Carnivore", location : "Northern Trail", caretakers : 5, sex : "Female", likes : "Cool shade", dislikes : "Loud noise"},
		{species : "Ocelot", name : "Prince", age : 4, diet : "Carnivore", location : "Tropical Rain Forest Building", caretakers : 6, sex : "Male", likes : "Laying in the sunshine", dislikes : "Toys that are not rope-based"},
		{species : "Northwest Black Tailed Deer", name : "Tinkerbell", age : 8, diet : "Herbivore", location : "Northern Trail", caretakers : 2, sex : "Female", likes : "Delicate roots and leaves", dislikes : "Loud Noises"}
	];
}
