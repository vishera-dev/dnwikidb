<template>
  <nav>
    <v-toolbar flat app>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        <!-- <img src="../../assets/dnlogo.png" width="75" height="75"/> -->
        <v-toolbar-title class="text-uppercase grey--text">
            <!-- <span class="font-weight-light">Project: </span> -->
            <font-awesome-icon icon="fa-solid fa-dragon" />
            <span> Nest</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="exchange-rate-reminder"> 
            Exchange Rates:
            <a class="exchange-rate-text"> 3Php/1GS 6Php/1mG </a> 
        </div>
        <a class="exchange-rate-reminder"> | </a>
        <div class="navigation-timer-notification"> 
            Time: 
            <a class="navigation-timer-text"> {{ time }}</a> 
        </div>
        <!-- <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn> -->
    </v-toolbar>
    <v-navigation-drawer 
        app v-model="drawer" 
        temporary
    >
        <v-list nav
        >
        <v-list-item v-for="item in navIcons" :key="item.text" router :to="item.route">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon> <v-list-item-content> {{ item.text }} </v-list-item-content>
            </v-list-item-icon>
            <!-- <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content> -->
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data: () => {
        return {
            drawer: false,
            navIcons: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                // { icon: 'mdi-sword', text: 'Classes', route: '/classes' },
                { icon: 'mdi-hexagon-outline', text: 'Jades', route: '/jades' },
                { icon: 'mdi-necklace', text: 'Talismans', route: '/talismans' },
                // { icon: 'mdi-dice-d8-outline', text: 'Heraldries', route: '/heraldries' },
                { icon: 'mdi-pentagon-outline', text: 'Runes', route: '/runes' }
            ],
            interval: null,
            time: null
        }
    },
    beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
    },
    created() {
        // update the time every second
        this.interval = setInterval(() => {
        // Concise way to format time according to system locale.
        // In my case this returns "3:48:00 am"
        this.time = Intl.DateTimeFormat(navigator.language, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format()
        }, 1000)
    }
}
</script>

<style>
.exchange-rate-reminder {
    color: grey;
    font-size: 15px;
    margin-right: 15px;
}

.exchange-rate-text {
    color: black;
    font-size: 15px;
    margin-right: 15px;
}

.navigation-timer-notification {
    color: grey;
    font-size: 15px;
    margin-right: 25px;    
}

.navigation-timer-text {
    color: black;
    font-size: 15px;
}
</style>