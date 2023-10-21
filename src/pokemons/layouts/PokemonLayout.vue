
<script setup lang="ts">

import {RouterView} from "vue-router";
import NavBar from "@/shared/components/NavBar.vue";
import {pokemonRoute} from "@/pokemons/router";
import type {RouterLink} from "@/router/list-routes";

const routerLinks: RouterLink[] = pokemonRoute.children?.map(({name, path, props})=>{
  
  const {title, visible} = props as {title: string, visible: boolean};
  
  return {
    name: name?.toString() ?? '',
    path: path,
    title: title,
    visible: visible,
  }
}) || [];


</script>

<template>

  <NavBar :links="routerLinks" is-secondary/>
  <div>
<!--   <suspense>-->
     <RouterView /> 
     
<!--     <template #fallback>-->
<!--       Loading...-->
<!--       -->
<!--     </template>-->
<!--   </suspense>-->
    
  </div>
</template>

<style scoped>

</style>