/<script>
import dn_classes from '../db/classes'
export default {
    mounted: () => {
        console.log(dn_classes)
    },
    data: () => {
        return {
            classes: dn_classes,
            //specialization: dn_classes.secondaryClass.specialization
        }
        
    }
}
</script>

<template>
    <div>
        
    </div>
</template>

<style>

</style>