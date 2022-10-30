import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { PokemonModule } from '../pokemon/pokemon.module';

import { SeedService } from './seed.service';
import { CommonModule } from '../common/common.module';
@Module({
  imports:[PokemonModule,CommonModule],
  providers:[SeedService],
  controllers: [SeedController],  
})
export class SeedModule {}
