<template>
  <v-app>
    <NavigationBar/>
    <router-view></router-view>
    <BottomNavBar/>
  </v-app>
</template>

<script>
import BottomNavBar from './components/subcomponents/BottomNavBar.vue';
import NavigationBar from './components/subcomponents/NavigationBar.vue'
import NotificationBar from './components/subcomponents/NotificationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    NotificationBar,
    BottomNavBar
},

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
@import "./styles/main.scss"

</style>