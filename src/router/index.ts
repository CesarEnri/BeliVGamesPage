import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from "@/shared/views/AboutView.vue";
import PrivacySpaceSurfers from "@/shared/views/PrivacySpaceSurfers.vue";
import {pokemonRoute} from "@/pokemons/router";
import TermsofuseSpaceSurfers from '@/shared/views/termsofuseSpaceSurfers.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/privacyspacesurfers',
      name: 'PrivacySpaceSurfers',
      component: PrivacySpaceSurfers
    },
    {
      path: '/termsofusespacesurfers',
      name: 'termsofusespacesurfers',
      component: TermsofuseSpaceSurfers
    },
    {
      ...pokemonRoute,
      path: '/pokemons',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () =>
      {
        console.log("Ruta no existe");
        return{name: 'home'};
      },
    }
  ]
})

export default router
