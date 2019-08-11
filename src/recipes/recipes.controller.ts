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
    update(@Param('id') id, @Body() updateRecipe: Recipes): Promise<any> {
        updateRecipe.id = Number(id)
        console.log('Update data of ID: ' + updateRecipe.id)
        return this.recipes.updateRecipe(updateRecipe)
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id): Promise<any>{
        return this.recipes.deleteRecipe(id)
    }
}
