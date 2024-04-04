<template>
 <HeaderComponent />
  <div class="home">
    <TableMissions />
  </div>
</template>

<script>

import TableMissions from '@/components/tableMissions/TableMissions.vue'
import HeaderComponent from "@/components/template/HeaderComponent.vue";

export default{
    components:{
    HeaderComponent,
    TableMissions
  }
}
</script>


<style>


</style>
