<template>
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title">{{ character.name }}</h4>
        <p class="card-text">Height: {{ character.height }}</p>
        <p class="card-text">Mass: {{ character.mass }}</p>
        <p class="card-text">Hair color: {{ character.hair_color }}</p>
        <p class="card-text">Eye color: {{ character.eye_color }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {},
    };
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.dev/api/people/${id}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          this.character = data;
        });
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(random_id);
    },
  },
  created() {
    this.fetchCharacter(this.id);
  },
};
</script>

