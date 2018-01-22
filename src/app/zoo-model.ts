import * as moment from 'moment';

export class Zoo {
	added:string;
	species: string = "";
	name: string = "";
	age: number = 0;
	diet: string = "";
	location: string = "";
	caretakers: number = 0;
	sex: string = "";
	likes: string = "";
	dislikes: string = "";
	newAnimal: boolean = true;
	constructor(added:number){
		this.added = moment(added).format("dddd, MMMM Do YYYY, h:mm:ss a");
	}
}
