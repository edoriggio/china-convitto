<template>
<scroll-view class="tabs"
             :horizontal="true"
             :showsHorizontalScrollIndicator="false">
  <tab v-for="tab in titles" :key="tab" :title="tab" :active="tab === 'Primo' ? true : false" />
</scroll-view>
</template>

<script>
import Tab from "./Tab.vue"

export default {
  components: {
    Tab
  },
  data() {
    return {
      titles: ['Primo', 'Secondo', 'Terzo', 'Quarto']
    }
  },
  mounted() {
    this.$root.$on('changedTab', (title) => {
      this.$root.$emit('activeTabChanged', title)
    })
  }
}
</script>

<style scoped>
.tabs {
  flex-direction: row;
  flex-wrap: nowrap;

  margin-top: 20px;
}
</style>
