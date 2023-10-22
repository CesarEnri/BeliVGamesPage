import type {Pokemon, PokemonListResponse, PokemonResponse} from "@/pokemons/interfaces";
import pokemonApi from "@/pokemons/api/pokemonApi";
import axios from "axios";
import {sleep} from "@/pokemons/helpers/sleep";


export const getPokemons = async(): Promise<Pokemon[]> =>
{
    //await sleep(10);
    //throw new Error('Error for test');
    
    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');

    const pokemonPromises: Promise<Pokemon>[] = [];
    
    for (const {url} of data.results) {
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({data})=> {
            return{
                id: data.id, name: data.name, frontSprite: data.sprites.front_default,                  
            }
        });
        
        pokemonPromises.push(pokemonPromise);
    }
    
    const pokemons = await Promise.all(pokemonPromises);
    return pokemons;
}

// export const getPokemonsById = async(): Promise<Pokemon[]> =>
// {
//     //await sleep(10);
//     //throw new Error('Error for test');
//
//     const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon/');
//
//     const pokemonPromises: Promise<Pokemon>[] = [];
//
//     for (const {url} of data.results) {
//         const pokemonPromise = axios.get<PokemonResponse>(url).then(({data})=> {
//             return{
//                 id: data.id, name: data.name, frontSprite: data.sprites.front_default,
//             }
//         });
//
//         pokemonPromises.push(pokemonPromise);
//     }
//
//     const pokemons = await Promise.all(pokemonPromises);
//     return pokemons;
// }