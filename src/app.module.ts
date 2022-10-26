import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';

import  {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon')
  ],

  controllers: [],
  providers: [],
})


export class AppModule { }
