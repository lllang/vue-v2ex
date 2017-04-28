<template>
<div>
  <ul>
    <li v-for="(tab, index) in tabs" :class="{ active : index == selectTab }" @click="changeIndex(index)">
      {{tab.name}}
    </li>
  </ul>
</div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'tabs',
        'selectTab',
      ]),
    },
    methods: {
      ...mapMutations([
        'CHANGE_INDEX',
      ]),
      changeIndex(index) {
        this.CHANGE_INDEX(index);
      },
    },
  };
</script>

<style>
  ul {
    height: 36px;
    line-height: 36px;
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }
  ul li {
    width: 50%;
    display: inline-block;
    list-style: none;
    text-align: center;
    line-height: 36px;
    height: 36px;
  }
  .active {
    color: #d22147;
  }
</style>
