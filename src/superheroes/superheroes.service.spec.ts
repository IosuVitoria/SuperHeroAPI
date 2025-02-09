import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('debería agregar un superhéroe correctamente', () => {
    const hero = service.addSuperhero('Spider-Man', 'Sentido arácnido', 9);
    expect(hero).toHaveProperty('id');
    expect(hero.name).toBe('Spider-Man');
    expect(hero.superpower).toBe('Sentido arácnido');
    expect(hero.humilityScore).toBe(9);
  });

  it('debería ordenar correctamente por humildad', () => {
    service.addSuperhero('Iron Man', 'Tecnología avanzada', 5);
    service.addSuperhero('Batman', 'Inteligencia', 7);
    service.addSuperhero('Superman', 'Superfuerza', 10);

    const heroes = service.getSuperheroes();
    expect(heroes[0].name).toBe('Superman');
    expect(heroes[1].name).toBe('Batman');
    expect(heroes[2].name).toBe('Iron Man');
  });

  it('debería asignar IDs únicos', () => {
    const hero1 = service.addSuperhero('Flash', 'Supervelocidad', 8);
    const hero2 = service.addSuperhero('Aquaman', 'Respirar bajo el agua', 6);
    expect(hero1.id).not.toBe(hero2.id);
  });
});
