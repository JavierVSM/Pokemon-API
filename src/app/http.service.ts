import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.getAbility();
  }
  getAbility(){
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/18/');
    ability.subscribe( (data:any) => {
      let abilityDetail = data;
      console.log (`${abilityDetail.pokemon.length} Pokemon have the ${abilityDetail.name} ability.`);
    })
  }

  getPokemon(){
      let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/58/');
      pokemon.subscribe( (data:any) => {
        let pokemonDetail = data;
        let x=[];
        for( let i = 0; i < pokemonDetail.abilities.length; i ++ ){
          x.push(pokemonDetail.abilities[i].ability.name);
        }

        console.log(`My favorite pokemon is ${pokemonDetail.name}.`);
        console.log(`${pokemonDetail.name} have ${pokemonDetail.weight} hectograms of weight and ${pokemonDetail.height} cm of height.`);
        console.log(`${pokemonDetail.name}'s abilities are ${x} .`);
      })
  }



}