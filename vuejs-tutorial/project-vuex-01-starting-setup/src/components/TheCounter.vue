<template lang="">
    <div>
        <h3>{{ result }}</h3>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters['numbers/finalCounter'];
    // },

    // mapGetters gives you an object, which we now merge into the computed properties object.
    // ...mapGetters('numbers', ['finalCounter']),

    ...mapGetters({
      result: 'finalCounter',
    }), // This will point to the methods in getters
  },
};
</script>