import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent implements OnInit {
  
  pokemonlist : Pokemon[] ;
  /**
   *
   */
  constructor( private service : PokemonService ,
               private router : Router) {
    
  }
  ngOnInit(){
     this.service.getPokemonlist().subscribe(pokemonList =>this.pokemonlist = pokemonList) ;
  }
   goToPokemon(pokemonId : number){
      this.router.navigate(['/pokemon' , pokemonId]);
   }
  
}
