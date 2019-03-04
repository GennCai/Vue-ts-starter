<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ComponentA msg="I see you!"/>
  </div>
</template>
<script>
import Vue from 'vue';
import ComponentA from '@/components/ComponentA.vue';

export default Vue.extend({
  name: 'About',
  components: { ComponentA }
});
</script>

