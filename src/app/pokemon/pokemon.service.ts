import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  /**
   *
   */
  pokemonList : Pokemon[] | [];
  constructor(private http : HttpClient) {
    
    
  }
 getPokemonlist():Observable<Pokemon[]> {
  //  return POKEMONS;
  return this.http.get<Pokemon[]>('api/pokemons').pipe(
    tap((Response) => this.log(Response)) ,
    catchError((error)=>this.handleError(error , [])) ) ;
 }
 getPokemonById(index : number) : Observable<Pokemon | undefined> {
   return this.http.get<Pokemon>(`api/pokemons/${index}`).pipe(
    tap((Response) => this.log(Response)) ,
    catchError((error)=> this.handleError(error , undefined))
   ) ;
 }
 updatePokemon(pokemon : Pokemon) : Observable<Pokemon | null> {
   const httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}) 
   } ;

   return this.http.put('api/pokemons' , pokemon, httpOptions).pipe(
    tap((res)=>this.log(res)),
    catchError((err)=>this.handleError(err , null ))
   )
 }
 addPokemon(pokemon : Pokemon) : Observable<Pokemon> {
  const httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}) 
   } ;

   return this.http.post<Pokemon>('api/pokemons' , pokemon, httpOptions).pipe(
    tap((res)=>this.log(res)),
    catchError((err)=>this.handleError(err , null ))
   )
 }
 
 deletePokemonByid(pokemonId : number) : Observable<null> {
  return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
    tap((Response) => this.log(Response)) ,
    catchError((error)=> this.handleError(error , undefined))
   ) ;
 }
 searchPokemonList(term : string) : Observable<Pokemon[]>{
  if(term.length < 1 ){
    return of([]) ; 
  }
  return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe( 
    tap((Response) => this.log(Response)) ,
    catchError((error)=> this.handleError(error , [])));
}
 private log(response : any){
  console.table(response);
 }
 private handleError(error : Error , errorValue :any){
  console.error(error) ; 
  return of(errorValue) ;
 }
  getPokemonTypeList() : Observable<string[]>{
    return this.getPokemonlist().pipe(
      map(pokemonList => Array.from(new Set(pokemonList.map(t => t.types).flatMap(array => array))))) ;
 }
}
