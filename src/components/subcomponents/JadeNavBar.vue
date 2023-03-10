<template>
  <v-list nav class="text-center d-flex flex-column jade-nav-container" style="background-color: grey; color:white">
        <v-toolbar-items>
        <v-btn
          flat
          open-on-click
          v-for="item in menuItems"
          :key="item.title"
          @click="selectJadeType(item.value)"
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
        jadeType: {
            type: String,
            default: null
        }
    },
    mounted() {
        this.selectJadeType('frozen')
    },
    data: () => {
        return {
            drawer: false,
            jade: null,
            menuItems: [
                //{ title: "Lunar", value: "lunar"}
                 { title: "Frozen", value: "frozen"}
                // { title: "Skill", value: "skill"}
            ]
        }
    },
    emits: ["typeSelected"],
    methods: {
        selectJadeType(value) {
            this.$emit("typeSelected", value)
        }
    }
}
</script>

<style>
/* class="bg-indigo-lighten-1 text-center d-flex flex-column jade-nav-container" */
.jade-nav-container {
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
}
.top-nav-bar {
  background-color: grey
}
</style>