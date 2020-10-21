import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './Input/input.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewComponent } from './input.input.component';
import {Router,Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
{
path:'',
component:ViewComponent
}


];



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NotFoundComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule.fo
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
