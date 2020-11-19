import { reactive, watch } from 'vue'

export default function (coktailSearch) {
  const postsState = reactive({
    loading: false,
    error: '',
    data: [],
  });

  async function loadData() {
    postsState.loading = true;
    postsState.error = '';
    postsState.data = [];

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coktailSearch.value}`;
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    });
    const dataResponse = await response.json();
    if (response.ok) {
      postsState.data = dataResponse.drinks;
    }
    else {
      postsState.error = 'Error loading posts.';
    }

    postsState.loading = false;
  }

  watch(coktailSearch, loadData, { immediate: true });

  return postsState;
}