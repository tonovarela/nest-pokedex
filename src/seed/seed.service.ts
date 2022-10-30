import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

  private readonly  axios:AxiosInstance=axios;  
  async populate() {
    const {data}=await this.axios.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=1");
    const pokemons =data.results.map(({name,url})=>{
      const segments = url.split("/");
      const no = +segments[segments.length-2];  
      return  {name,no};   
    })
    return pokemons;
  }


}
