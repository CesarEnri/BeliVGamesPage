import type {Pokemon} from "@/pokemons/interfaces";
import {reactive} from "vue";

interface Store{
    
    //State
    pokemons:{
        list: Pokemon[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage?: string;
    },
    
    //Actions //Metodos
    startLoadingPokemons:() => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (data: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        count: 0, 
        hasError: false, 
        isLoading: false, 
        list: []
    },
    startLoadingPokemons: async function(): Promise<void> {
        this.pokemons =
            {
                ...this.pokemons,
                isLoading: true,
                hasError: false,
                errorMessage: false
            }
        
       // const pokemons = await  getPokemons();
       // this.loadedPokemons(pokemons);
    },
   loadedPokemons(data: Pokemon[]): void {
        this.pokemons=
            {
              list: data,
              count: data.length,
              isLoading: false,
              hasError: false, 
                errorMessage:undefined
            };
    },
    loadPokemonsFailed(error: string): void {
        this.pokemons =
            {
                ...this.pokemons,
                isLoading: false,
                hasError: true,
                errorMessage: error
            }
    },
     
    
})

//cargar data al iniciar la app;
store.startLoadingPokemons();
export default store;