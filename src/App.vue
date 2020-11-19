<template>
  <div class="min-h-screen bg-gray-900">
    <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="flex flex-col space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl leading-9 font-extrabold text-white tracking-tight sm:text-4xl">Cocktail API</h2>
          <p class="text-xl leading-7 text-gray-300">Do you want to drink something 🤔🤔🤔</p>
          <input aria-label="Enter your coktail" v-model="coktailSearch" class="m-auto appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Search your coktail" type="search" autocomplete="off" />
        </div>
        <div v-if="coktails.loading" class="w-full h-full block top-0 left-0 bg-white opacity-75 z-50">
          <span class="text-white top-1/2 my-0 mx-auto block relative w-0 h-0" style="
            top: 50%;
          ">
            <i class="fas fa-circle-notch fa-spin fa-5x"></i>
          </span>
        </div>
        <p v-if="coktails.error">{{ coktail.error }}</p>
        <ul v-if="coktails.data" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <coktail 
            v-for="coktail in coktails.data" 
            :key="coktail.id" 
            :coktail="coktail"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Coktail from './components/Coktail.vue'

import callApi from './hooks/callApi';

export default {
  name: 'App',
  components: {
    Coktail
  },
  setup() {
    const coktailSearch = ref('')
    const coktails = callApi(coktailSearch)

    return {
      coktailSearch,
      coktails
    }
  }
}
</script>
