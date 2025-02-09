import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superherores.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('debería agregar un superhéroe', () => {
    const spy = jest.spyOn(service, 'addSuperhero').mockReturnValue({
      id: 1,
      name: 'Thor',
      superpower: 'Martillo de trueno',
      humilityScore: 7,
    });

    const result = controller.addSuperhero({
      name: 'Thor',
      superpower: 'Martillo de trueno',
      humilityScore: 7,
    });

    expect(result).toEqual({
      id: 1,
      name: 'Thor',
      superpower: 'Martillo de trueno',
      humilityScore: 7,
    });
    expect(spy).toHaveBeenCalled();
  });

  it('debería obtener la lista de superhéroes', () => {
    const mockHeroes = [
      { id: 1, name: 'Spider-Man', superpower: 'Sentido arácnido', humilityScore: 9 },
      { id: 2, name: 'Hulk', superpower: 'Fuerza', humilityScore: 5 },
    ];

    jest.spyOn(service, 'getSuperheroes').mockReturnValue(mockHeroes);
    expect(controller.getSuperheroes()).toEqual(mockHeroes);
  });
});
