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
    create(@Body() recipe: Recipes): Promise<any>{
        return this.recipes.createRecipe(recipe)
    }

    @Put(':id')
    update(@Param() params, @Body() updateRecipe: Recipes): Promise<any> {
        const id = params.id
        console.log('Update data of ID: ' + id)
        return this.recipes.updateRecipe(id, updateRecipe)
    }

    @Delete(':id')
    deleteRecipe(@Body() recipe: Recipes): Promise<any>{
        return this.recipes.deleteRecipe(recipe)
    }
}
