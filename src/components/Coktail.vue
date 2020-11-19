<template>
  <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
    <div class="space-y-6 xl:space-y-10">
      <img 
        class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" 
        :src="image" 
        alt=""
      />
      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
        <div class="font-medium text-lg leading-6 space-y-1">
          <h4 class="text-white">{{ glass }}</h4>
          <p class="text-indigo-400">{{ name }}</p>
        </div>

        <ul class="flex justify-center items-center space-x-5">
          <li>
            <a href="#" class="flex flex-row items-center text-gray-400 hover:text-gray-300 transition ease-in-out duration-150" :title="listIngredients">
              <span class="sr-only">List</span>
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              <span class="ml-1">{{ listIngredients.length }}</span>
            </a>
          </li>
          <li v-if="hasAlcohol">
            <a href="#" class="flex flex-row items-center text-gray-400 hover:text-gray-300 transition ease-in-out duration-150" title="Alcohol">
              <span class="sr-only">Alcohol</span>
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    coktail: Object,
  },
  setup(props) {
    const image = computed(() => props.coktail.strDrinkThumb)
    const name = computed(() => props.coktail.strDrink)
    const glass = computed(() => props.coktail.strGlass)
    const hasAlcohol = computed(() => props.coktail.strAlcoholic === 'Alcoholic')

    const listIngredients = computed(() => {
      let listIngredients = []
      for (let i=1; i <= 13; i++) {
        if (props.coktail['strIngredient' + i]) {
          listIngredients.push(props.coktail['strIngredient' + i])
        }
      } 
      return listIngredients
    })

    return {
      image,
      name,
      glass,
      hasAlcohol,
      listIngredients
    }
  }
}
</script>