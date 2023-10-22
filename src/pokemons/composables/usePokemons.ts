import {computed, watchEffect} from "vue";
import {getPokemons} from "../helpers/get-pokemons";
import type {Pokemon} from "../interfaces";
import {useQuery} from "@tanstack/vue-query";


 export const usePokemons =() => {
     
     const {isLoading , data:pokemons, isError, error } = useQuery(
         ['pokemons'],
         getPokemons,
         {
             retry: 0
             
         }
     );
     
     watchEffect(() =>
     {
         console.log('isLoading',isError.value);
     })
     
    return{
        //Properties
        pokemons,
        isLoading,
        isError,
        error,
        
        //computed
        count: computed(() => pokemons.value?.length ?? 0)
    }
 }