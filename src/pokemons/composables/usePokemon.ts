//use query

import {isError, useQuery} from "@tanstack/vue-query";
import {getPokemonById} from "@/pokemons/helpers/get-pokemon-by-id";

export const usePokemon = (id: string ) => {
    const {isLoading, isError, data: pokemon, error} = useQuery(
        ['pokemon', id],
        () => getPokemonById(id),
    )


    return {
        isLoading, isError, pokemon, errorMessage: error
    }
}
