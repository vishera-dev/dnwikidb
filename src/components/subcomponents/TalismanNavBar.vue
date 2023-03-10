<template>
    <v-list nav style="background-color:grey; color:white" class="text-center d-flex flex-column talisman-nav-container">
          <v-toolbar-items class="hidden-xs-only">
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            @click="selectTalismanType(item.value)"
            >
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-list>
  </template>
  
  <script>
  export default {
    props:{
        talismanType: {
            type: String,
            default: null
        }
    },
    mounted() {
        this.selectTalismanType('vibrant')
    },
    data: () => {
        return {
                drawer: false,
                talisman: null,
                menuItems: [
                    { title: "Vibrant", value: "vibrant"}
                //   { title: "Chaos", value: "chaos"},
                //   { title: "Frozen Chaos", value: "frozen-chaos"},
                //   { title: "Eyes of Nightmare", value: "eyes-of-nightmare"}
                ]
            }
        },
      emits: ["typeSelected"],
      methods: {
            selectTalismanType(value) {
              this.$emit("typeSelected", value)
          }
      }
  }
  </script>
  
  <style>
  .talisman-nav-container {
      align-items: center;
      margin-left: -80px;
      padding-top: 15px;
      padding-bottom: 15px;
  }
  </style>