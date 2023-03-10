<template>
  <div class="matrix-table">
      <v-table density="compact">
          <thead>
              <!-- <tr style="text-align:center; background-color: greenyellow;"> Magic </tr> -->
              <tr>
                  <th v-for="header in headers" :key="header.name">
                      {{ header.text }}
                  </th>
              </tr>
          </thead>
          <tbody v-if="itemType === 'jades'">
              <tr v-for="item in rowItems" :key="item.step">
                  <td v-for="item in item.talismanType" :key="item.name"> {{ item.text }}</td>
              </tr>
          </tbody>
          <tbody v-else-if="itemType === 'talisman'">
              <tr v-for="item in rowItems" :key="item.step">
                  <td> {{ item.step }}</td>
                  <td> {{ item.rate }}%</td>
                  <td v-for="item in item.talismanType" :key="item.name"> {{ item.value }} </td>
              </tr>
          </tbody>
          <tbody v-else-if="itemType === 'runes'">
              <tr v-for="item in rowItems" :key="item.step">
                  <td v-for="item in item.talismanType" :key="item.name"> {{ item.text }}</td>
              </tr>
          </tbody>
      </v-table>
  </div>
</template>

<script>
export default {
  props: {
      headers: {
          type: Array,
          default: () => []
      },
      rowItems: {
          type: Object,
          default: () => []
      },
      itemType: {
          type: String,
          default: null
      }
  },
  name: 'MagicRarity'
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
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
}

</style>