import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './interfaces/superhero.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post('add')
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ): Superhero {
    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes(): Superhero[] {
    return this.superheroesService.getSuperheroes();
  }
}
