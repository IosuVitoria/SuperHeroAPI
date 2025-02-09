import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuperheroModule } from './superheroes/superheroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Superhero } from './superheroes/superheroe.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',               
      host: 'localhost',           
      port: 3306,                  
      username: 'root',            
      password: '',   
      database: 'superheroes_db',  
      entities: [Superhero],       
      synchronize: true,           
    }),
    SuperheroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
