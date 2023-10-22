<script setup lang="ts">
 import store from "@/store/store";
 import PokemonCardList from "@/pokemons/components/PokemonCardList.vue";
 import {useQuery} from "@tanstack/vue-query";
 import {getPokemons} from "@/pokemons/helpers/get-pokemons";
 
 useQuery(
     ['pokemons'],
     getPokemons,
     {
       select(data)
       {
         store.loadedPokemons(data)
       }
     }
 )
 
</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Loading</h1>
  
  <div v-else-if="store.pokemons.hasError">
    {{store.pokemons.errorMessage}}
  </div>
  
  <div v-else>
    
    <h1>Pokemon List Native - {{ store.pokemons.count }}</h1>

  <PokemonCardList :pokemons="store.pokemons.list"/>
    
  </div>
  
  
  
</template>

<style scoped>

</style>