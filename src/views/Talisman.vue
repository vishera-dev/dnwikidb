<template>
    <div>
        <TalismanNavBar 
            :talismanType="talismanType"
            @typeSelected="selectTalismanType"
        >
        </TalismanNavBar>
        <div v-if="talismanType == 'vibrant'">
            <VibrantTalisman></VibrantTalisman>
            
        </div>
        <div v-if="talismanType == 'chaos'">
        </div>
    </div>
</template>

<script>
import TalismanNavBar from '../components/subcomponents/TalismanNavBar.vue'
import VibrantTalisman from '../components/VibrantTalismans.vue'

export default {
    components: {
        TalismanNavBar,
        VibrantTalisman
    },
    name: "TalismanView",
    data: () => {
        return {
            talismanType: null
        }
    },
    methods: {
        selectTalismanType(item) {
            this.talismanType = item
        }
    }
}
</script>
<style>

</style>