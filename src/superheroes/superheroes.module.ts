import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroesService } from './superheroes.service';
import { SuperheroesController } from './superherores.controller';
import { Superhero } from './superheroe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
  exports: [SuperheroesService],
})
export class SuperheroModule {}
