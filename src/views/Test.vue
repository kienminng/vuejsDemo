<template>
    <button @click="count++">{{ count }}</button>
</template>
<script>
import {defineComponent} from "vue";

export  default defineComponent ({
  name: 'Test',
  data() {
    return {
      count: 0,
      Student : {
        Name : "",
        Age : 0,
      }
    }
  },
  methods : {

  },
  computed: {

  }

})
</script>
<style scoped>

</style>