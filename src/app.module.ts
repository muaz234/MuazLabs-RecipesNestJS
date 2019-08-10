import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesService } from './recipes/recipes.service';
import { Connection } from 'typeorm';
@Module({
  imports: [RecipesModule,
            TypeOrmModule.forRoot()],
controllers: [AppController],
providers: [AppService]         
})
export class AppModule {
  constructor( private readonly connection: Connection) {}
}
