<template>
  <div>
    <Tab/>
    <div>
      <div v-for="(item, index) in contentList">
        <Item :item="item" :index="index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import Tab from './Tab';
  import Item from './Item';

  export default {
    data() {
      return {
      };
    },
    mounted() {
      this.fetchData();
    },
    watch: {
      selectTab() {
        this.fetchData();
      },
    },
    computed: {
      ...mapState([
        'contentList',
        'tabs',
        'selectTab',
      ]),
    },
    methods: {
      fetchData() {
        const self = this;
        fetch(`api/topics/${this.tabs[this.selectTab].value}.json`, {}).then(res => res.json()).then(json => self.CHANGE_LIST(json));
      },
      ...mapMutations([
        'CHANGE_LIST',
      ]),
    },
    components: { Tab, Item },
  };
</script>
