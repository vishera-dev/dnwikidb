<template>
    <div>
        <JadeNavBar 
            :jadeType="jadeType"
            @typeSelected="selectJadeType"
        >
        </JadeNavBar>
        <div v-if="jadeType == 'lunar'">
            <LunarJade></LunarJade>
            
        </div>
        <div v-if="jadeType == 'frozen'">
            <FrozenJade></FrozenJade>
        </div>
    </div>
</template>

<script>
import JadeNavBar from '../components/subcomponents/JadeNavBar.vue'
import LunarJade from '../components/LunarJades.vue'
import FrozenJade from '../components/FrozenJades.vue'


export default {
    components: {
        JadeNavBar,
        LunarJade,
        FrozenJade
    },
    name: "JadeView",
    data: () => {
        return {
            jadeType: null
        }
    },
    methods: {
        selectJadeType(item) {
            this.jadeType = item
        }
    }
}
</script>
<style>

</style>