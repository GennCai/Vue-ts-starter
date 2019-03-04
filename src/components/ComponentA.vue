<template>
  <div :class="$style.wrapper">
    <h1>
      ComponentA's message:
      <span :class="$style.message">{{ msg }}</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace } from 'vuex-class';

const home = namespace('home');

@Component
export default class ComponentA extends Vue {
  @Prop() private msg!: string;

  private user: App.Person = { name1: 'Cai', name2: 'Genn' };
  private ele: JSX.Element;

  public created() {
    console.log(this.user.name1 + '+++ComponentA+++' + this.user.name1);
    this.fetchTicketById('123-456-789-00' + Math.floor(Math.random() * 4));
    console.log();
  }

  @home.Action('fetchTicketById') private fetchTicketById(ticketId: string) {
    // empty block
  }
}
</script>

<style module lang="scss">
.wrapper {
  text-align: center;
  .message {
    color: blueviolet;
  }
}
</style>
