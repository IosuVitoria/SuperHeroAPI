import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('Superheroes API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/superheroes (POST) debería agregar un superhéroe', async () => {
    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Black Panther', superpower: 'Agilidad', humilityScore: 8 })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Black Panther');
  });

  it('/superheroes (GET) debería devolver una lista de superhéroes', async () => {
    const response = await request(app.getHttpServer()).get('/superheroes').expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await app.close();
  });
});
