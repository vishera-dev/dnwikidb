<template>
    <div class="matrix-table">
        <v-table density="compact">
            <thead>
                <tr style="align-items:center">
                    <th> Attempt To </th>
                    <th> Success Rate </th>
                    <th colspan="3" style="text-align: center" class="red-lighten-4"> Materials </th>
                    <th colspan="3" style="text-align: center"> Total Stats Gain </th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th> Balkov Fragment </th>
                    <th> Fat Gravy </th>
                    <th> Power </th>
                    <th> Attack </th>
                    <th> Max Hp </th>
                    <th style="color:skyblue"> Frozen Adaptability </th>
                </tr>
            </thead>
            <tbody>
            <tr style="text-align: center;" v-for="frozenJade in frozenJades" :key="frozenJade.key">
                    <td> +{{ frozenJade.attemptTo }}</td>
                    <td :class="{ 'mid-success-rate': (frozenJade.successRate < 100 && frozenJade.successRate > 15 ), 'low-success-rate': (frozenJade.successRate < 16),  }"> {{ frozenJade.successRate }}% </td>
                    <td v-for="materials in frozenJade.materials" :key="materials.key"> {{materials.balkovFragment }}</td>
                    <td v-for="materials in frozenJade.materials" :key="materials.key"> {{materials.fatGravy }}</td>
                    <td v-for="materials in frozenJade.materials" :key="materials.key"> {{materials.power }}</td>
                    <td v-for="totalStatGain in frozenJade.totalStatGain" :key="totalStatGain.key"> {{totalStatGain.attack}}</td>
                    <td v-for="totalStatGain in frozenJade.totalStatGain" :key="totalStatGain.key"> {{totalStatGain.maxHP }}</td>
                    <td v-for="totalStatGain in frozenJade.totalStatGain" :key="totalStatGain.key"> {{totalStatGain.frozenAdaptability }}</td>
            </tr>
            </tbody>
        </v-table>
    </div> 
</template>

<script>
import frozenJades_obj from '../db/jades/frozen.json'
export default {
    name: 'FrozenJades',
    data: () => {
        return {
            frozenJades: frozenJades_obj,
            headers: [
                "Attempt To",
                "Success Rate",
                "Materials",
                "Total Gain Stat"
            ]
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
</style>