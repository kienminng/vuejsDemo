
<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn >
      <v-icon color="yellow" left class="mr-2">fas fa-signature</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
    <v-btn text @click="scroll('about')" class="text-yellow">About</v-btn>
    <v-btn text @click="scroll('portfolio')" class="text-yellow">Portfolio</v-btn>
    <v-btn text @click="scroll('service')" class="text-yellow">Service</v-btn>
    <v-btn text @click="scroll('page')" class="text-yellow">Page</v-btn>
    <v-btn text @click="scroll('blog')" class="text-yellow">Blog</v-btn>
  </v-app-bar>
</template>
<script>
export  default {
  methods : {
    scroll(refName){
      const  element = document.getElementById(refName)
      element.scrollIntoView({behavior : "smooth"});
    }
  }
}
</script>

<style>

</style>