import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAnimalsComponent,
    AddAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
