import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';
import { BodyComponent } from './body/body.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { routes } from './router';
import { RouterModule } from '@angular/router';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LeftnavigationComponent, BodyComponent, 
                  SigninComponent, HomeComponent, RecipelistComponent, RecipedetailComponent ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
