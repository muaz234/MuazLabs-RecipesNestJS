import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
    controllers: [RecipesController],
    imports: [RecipesModule],
    providers: [RecipesService]
})
export class RecipesModule {
  
}
