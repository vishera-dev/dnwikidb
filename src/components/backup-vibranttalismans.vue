<template>
    <div class="matrix-table">
        <v-list nav>
                <v-toolbar-items class="hidden-xs-only">
                    <v-btn
                        flat
                        v-for="item in rarity_items"
                        :key="item.name"
                        :style="{'color':item['background-color']}"
                        class="rarity-nav-bar"
                        @click="selectTalismanType(item.value)"
                        >
                        {{ item.name }}
                    </v-btn>
                </v-toolbar-items>
        </v-list>
        <v-table density="compact">
            <thead>
                <!-- <tr style="text-align:center; background-color: greenyellow;"> Magic </tr> -->
                <tr>
                    <th> Step </th>
                    <th> Sucess Rate </th>
                    <th> Iron Wall</th>
                    <th> Tent</th>
                    <th> Destruction</th>
                    <th> Magic</th>
                    <th> Fatal</th>
                    <th> Limitation</th>
                    <th> Life Vitality</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="talisman in vibrant_talismans" :key="talisman.step">
                    <td> {{ talisman.step }}</td>
                    <td> {{ talisman.rate }}</td>
                    <td v-for="talismanType in talisman.talismanType" :key="talismanType.name"> {{ talismanType.value }}</td>
                </tr>
            </tbody>
        </v-table>
    </div> 
</template>

<script>
import vibrant_talisman_obj from '../db/talismans/vibrant-magic.json'
import rarityItems from '../db/rarity.json'

export default {
    name: 'VibrantTalismans',
    data: () => {
        return {
            isMagic: true,
            vibrant_talismans: vibrant_talisman_obj,
            rarity_items: rarityItems
        }
    },
    methods: {
        selectTalismanType(item) {
            this.$emit
        }
    }
}
</script>

<style>
.mid-success-rate {
    color: orange
}
.low-success-rate {
    color: red
}
.matrix-table {
    align-self: center;
    width: 900px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
}

.rarity-nav-bar {
    padding: 5px;
    margin-left: 10px
    
}

.rarity-nav-bar:active {
    background-color: azure
}
</style>