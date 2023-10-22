<script setup lang="ts">
import {usePokemons} from "@/pokemons/composables/usePokemons";
import PokemonCardList from "@/pokemons/components/PokemonCardList.vue";

const {count, pokemons, isLoading, isError, error} = usePokemons();

</script>

<template>
  <h1 v-if="isLoading">Loading</h1>
  
  <div v-else-if="error">
    {{error}}
  </div>
  
  <div v-else>
    
    <h1>Pokemon List - {{ count }}</h1>

  <PokemonCardList :pokemons="pokemons ?? []"/>
    
  </div>
  
  
  
</template>

<style scoped>

</style>