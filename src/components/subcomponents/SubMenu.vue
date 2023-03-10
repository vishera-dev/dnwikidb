<template>
    <nav>
      <v-list-item>
      </v-list-item>
    </nav>
  </template>
  
  <script>
  export default {
      data: () => {
          return {
              drawer: false,
              navIcons: [
                  { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                  { icon: 'mdi-sword', text: 'Classes', route: '/classes' },
                  { icon: 'mdi-octagon-outline', text: 'Jades', route: '/jades' }
              ]
          }
      }
  }
  </script>
  
  <style>
  
  </style>