<template>
    <div >
        <v-list nav >
            <v-toolbar-items class="rarity-nav-bar">
                <v-btn :class="{ active: isActive }"
                    flat
                    v-for="item in rarity_items"
                    :key="item.key"
                    :style="{'color':item['background-color']}"
                    @click="selectTalismanType(item.key)"
                    >
                    {{ item.name }}
                </v-btn>
            </v-toolbar-items>
        </v-list>
        <div v-if="rarity_select === 'magic'">
            <MagicRarity 
                :headers="talisman_headers"
                :itemType="item_type"
                :rowItems="talisman_items"
            >
            </MagicRarity>
        </div>
        <div v-else-if="rarity_select === 'rare'">
            <RareRarity
                :headers="talisman_headers"
                :itemType="item_type"
                :rowItems="talisman_items"
            >
            </RareRarity>
        </div>
        <div v-else-if="rarity_select === 'epic'">
            <EpicRarity
                :headers="talisman_headers"
                :itemType="item_type"
                :rowItems="talisman_items"
            >
            </EpicRarity>
        </div>
        <div v-else-if="rarity_select === 'unique'">
            <MagicRarity></MagicRarity>
        </div>
        <div v-else-if="rarity_select === 'legend'">
            <MagicRarity></MagicRarity>
        </div>
    </div>
</template>

<script>
//json files
import rarityItems from '../db/rarity.json'

//talisman
import talismanHeaders from '../db/talismans/header.json'
import talismanMagic from '../db/talismans/vibrant-magic.json'
import talismanRare from '../db/talismans/vibrant-rare.json'
import talismanEpic from '../db/talismans/vibrant-epic.json'

//vue components
import MagicRarity from './groupcomponents/MagicRarity.vue'
import RareRarity from './groupcomponents/RareRarity.vue'
import EpicRarity from './groupcomponents/EpicRarity.vue'
import UniqueRarity from './groupcomponents/UniqueRarity.vue'
import LegendRarity from './groupcomponents/LegendRarity.vue'

export default {
    components: { MagicRarity, RareRarity, EpicRarity, UniqueRarity, LegendRarity },
    data: () => {
        return {
            item_type: 'talisman',
            talisman_items: null,
            isActive: false,
            talisman_headers: talismanHeaders,
            rarity_select: null,
            rarity_items: rarityItems
        }
    },
    methods: {
        selectTalismanType(rarity){
            if(rarity === 'magic'){
                this.talisman_headers[9]={};
                this.rarity_select = rarity
                this.talisman_items = talismanMagic
            }
            else if(rarity === 'rare'){
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
                this.rarity_select = rarity
                this.talisman_items = talismanRare
            } 
            else if(rarity === 'epic'){
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
                this.talisman_items = talismanEpic
            } 
            else if(rarity === 'unique'){
                this.talisman_headers[0]={"name":"option","text":"Option"}
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
                this.talisman_items = talismanUnique
            } 
            else if(rarity === 'legend'){
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
                this.talisman_items = talismanLegend
            }else{
                this.rarity_select = null;
                this.talisman_items = null;
            }
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
.rarity-nav-bar {
    margin-top: 20px;
    justify-content: center;
}
</style>