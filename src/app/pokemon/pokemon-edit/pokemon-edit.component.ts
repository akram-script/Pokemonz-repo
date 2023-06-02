import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Route } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  template: `
    <h2 class="center"> Editer {{ pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src] = "pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class PokemonEditComponent implements OnInit{
  /**
   *
   */
  pokemon : Pokemon| undefined ;
  constructor(
    private route : ActivatedRoute ,
    private pokemonService : PokemonService 
  ) {
   
    
  }
  ngOnInit(): void {
    const pokemonId : string| null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe((res)=>this.pokemon = res) ;
    }else{
      this.pokemon = undefined ; 
    }
   
  }

}
