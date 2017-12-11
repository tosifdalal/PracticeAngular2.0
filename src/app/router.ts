import { HomeComponent } from './home/home.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';

export const routes = [

      {path : '',redirectTo: '/home',pathMatch: 'full'},
      {path : 'recipelist/:id', component: RecipedetailComponent},
      {path : 'signin',component : SigninComponent},
      {path : 'recipelist',component :  RecipelistComponent},
      {path : 'home' , component: HomeComponent}
];
