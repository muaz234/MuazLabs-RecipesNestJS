import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipes } from './recipes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
constructor(@InjectRepository(Recipes)private recipesRepository: Repository<Recipes>) {}

// method to return all recipes
async getAllRecipes( recipes: Recipes): Promise<Recipes[]> {
    return await this.recipesRepository.find();
}

// method to return a recipe
async getRecipes(_id: Number): Promise<Recipes[]> {
    return await this.recipesRepository.find({
        where: [{"id": _id}]
    });
}

async createRecipe(recipe: Recipes ){
    return await this.recipesRepository.save(recipe);
}

async updateRecipe(recipe: Recipes) {
    return await this.recipesRepository.save(recipe)
}

async deleteRecipe(recipes: Recipes) {
   return await this.recipesRepository.delete(recipes);
}
    
}
