import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AgePipe } from './age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListAnimalsComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
