import { recipeList, Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class ReciepeService {

  getRecipeList(): Recipe[] {
    
    return recipeList;
    
  }

}
