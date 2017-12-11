import { ReciepeService } from '../reciepe/reciepe.service';
import { Recipe } from '../reciepe/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  public recipeList : Recipe[];
  
  constructor(private recipeservice : ReciepeService) { 
    
    this.recipeList = recipeservice.getRecipeList();
  
  }

  ngOnInit() {
  }

}
