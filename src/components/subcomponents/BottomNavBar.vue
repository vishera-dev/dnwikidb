<template>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation
        v-model="value"
        active
        color="white"
        style="background-color: grey; color: white"
      >
        <!-- <v-btn>
          <v-icon>mdi-information-outline</v-icon>
          <span>About</span>
        </v-btn>
        <v-btn>
          <v-icon>mdi-history</v-icon>
          Recents
        </v-btn>
        <v-btn>
          <v-icon>mdi-heart</v-icon>
          Favorites
        </v-btn> -->
        <div class="bottom-nav-notification">
          development-mode |  © 2022 rizdc
        </div>
      </v-bottom-navigation>
    </v-layout>
  </template>

<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>
<style>
/* class="bg-indigo-lighten-1" */
.bottom-nav-bar {
  background-color: black;
}
.bottom-nav-notification{
  margin-top: 20px;
}
</style>