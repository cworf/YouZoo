import { Pipe, PipeTransform } from '@angular/core';
import { Zoo } from './zoo-model';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(animalsIn: Zoo[], age): any {
	  const youngAnimals: Zoo[] = [];
	  const oldAnimals: Zoo[] = [];

	  animalsIn.forEach(function(animal){
		 if (animal.age < 2) {
		     youngAnimals.push(animal);
		 } else {
		     oldAnimals.push(animal);
		 }
	  });
	  if (age === "old") {
	      return oldAnimals;
	  } else if (age === "young") {
		  return youngAnimals;
	  } else {
		  return animalsIn;
	  }
  }
}
