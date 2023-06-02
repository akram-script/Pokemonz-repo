import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
   <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, page not found !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        go back 
      </a>
    </div>
  `
})
export class PageNotFoundComponent {

}
