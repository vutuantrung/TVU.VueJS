<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experience found...
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      // display spinner by setting isLoading -> true
      this.isLoading = true;
      // remove error when starting to fetch data
      this.error = null;

      fetch(
        'https://vue-http-demo-60796-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(res => res.json())
        .then(data => {
          // hide spinner by setting isLoading -> false
          this.isLoading = false;

          const newResult = [];
          for (const id in data) {
            newResult.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }

          this.results = newResult;
        })
        .catch(err => {
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later...';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>