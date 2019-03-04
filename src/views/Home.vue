<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ComponentB msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComponentB from '@/components/ComponentB.vue'; // @ is an alias to /src

@Component({
  components: {
    ComponentB
  }
})
export default class Home extends Vue {}
</script>
