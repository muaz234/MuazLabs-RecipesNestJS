import { Controller, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipes } from './recipes.entity';
@Controller('recipes')
export class RecipesController {
    constructor( private recipes: RecipesService){}

    @Get(':id')
    getbyid(@Param() params ) {
        return  this.recipes.getRecipes(params.id);
    }

    @Get()
    get(@Body() recipes: Recipes) {
        return this.recipes.getAllRecipes(recipes)
    }

    @Post()
    create(@Body() recipes: Recipes){
        return this.recipes.createRecipe(recipes)
    }
    @Put()
    update(@Body() recipes: Recipes) {
        return this.recipes.updateRecipe(recipes)
    }

    @Delete(':id')
    deleteRecipe(@Param() params){
        return this.recipes.deleteRecipe(params.id)
    }
}
