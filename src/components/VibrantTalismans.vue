<template>
    <div >
        <v-list nav>
            <v-toolbar-items class="rarity-nav-bar">
                <v-btn-toggle v-model="ifHighlited" class="rarity-nav-toggle">
                    <v-btn 
                        plain
                        v-for="item in rarity_items"
                        :key="item.key"
                        :style="{'color':item['background-color']}"
                        @click="selectTalismanType(item.key)"
                        >
                        <div v-if="item.key!=='legend'"> {{ item.name }} </div>
                    </v-btn>
                </v-btn-toggle>
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
            <UniqueRarity
                :headers="talisman_headers"
                :itemType="item_type"
                :rowItems="talisman_items"
            >

            </UniqueRarity>
        </div>
        <!-- <div v-else-if="rarity_select === 'legend'">
            <MagicRarity></MagicRarity>
        </div> -->
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
import talismanUnique from '../db/talismans/vibrant-unique.json'

//vue components
import MagicRarity from './groupcomponents/MagicRarity.vue'
import RareRarity from './groupcomponents/RareRarity.vue'
import EpicRarity from './groupcomponents/EpicRarity.vue'
import UniqueRarity from './groupcomponents/UniqueRarity.vue'

export default {
    components: { MagicRarity, RareRarity, EpicRarity, UniqueRarity },
    data: () => {
        return {
            ifHighlited : true,
            item_type: 'talisman',
            talisman_items: null,
            talisman_headers: talismanHeaders,
            rarity_select: null,
            rarity_items: rarityItems
        }
    },
    created() {
        this.selectTalismanType('magic')
    },
    methods: {
        selectTalismanType(rarity){
            this.talisman_headers[0]={"name":"step","text":"Step"}
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
                this.rarity_select = rarity
                this.talisman_items = talismanEpic
            } 
            else if(rarity === 'unique'){
                this.talisman_headers[0]={"name":"option","text":"Option"}
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
                this.rarity_select = rarity
                this.talisman_items = talismanUnique
            } 
            else if(rarity === 'legend'){
                this.talisman_headers[9]={"name":"atk","text":"Atk%"}
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
.rarity-nav-toggle {
    padding: 10px
}
.is-active-button {
    color: grey
}
</style>