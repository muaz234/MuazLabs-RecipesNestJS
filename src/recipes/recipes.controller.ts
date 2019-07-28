import { Controller, Get } from '@nestjs/common';
@Controller('recipes')
export class RecipesController {

    @Get()
    getRecipes() : string {
        return 'this is a function to return all recipes to end point';
    }
}
