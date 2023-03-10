<template>
<table>
  <thead>
    <tr>
      <th colspan="2">ColumnHeading1</th>
      <th colspan="2">ColumnHeading2</th>
    </tr>
    <tr>
      <th>SubHeading1A</th>
      <th>SubHeading1B</th>
      <th>SubHeading2A</th>
      <th>SubHeading2B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data1A</td>
      <td>data1B</td>
      <td>data2A</td>
      <td>data2B</td>
    </tr>
    <tr>
      <td>data1A</td>
      <td>data1B</td>
      <td>data2A</td>
      <td>data2B</td>
    </tr>
    <tr>
      <td>data1A</td>
      <td>data1B</td>
      <td>data2A</td>
      <td>data2B</td>
    </tr>
    <tr>
      <td>data1A</td>
      <td>data1B</td>
      <td>data2A</td>
      <td>data2B</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
    name: 'TestComponent',
    data: () => ({
      headers: [
        { text: 'Dessert', value: 'name' },
        { text: 'Calories', value: 'calories' },
        { text: 'Nested Calories', value: 'nested.nestedCalories' },
      ],
      desserts: [
        {
          name: 'Yogurt',
          calories: 100,
          nested: { nestedCalories: 100 },
        },
        {
          name: 'Ice cream',
          calories: 200,
          nested: { nestedCalories: 200 },
        },
        {
          name: 'Eclair',
          calories: 300,
          nested: { nestedCalories: 300 },
        },
      ],
    }),
    created: () => {
        
    }
}
</script>

<style>

</style>