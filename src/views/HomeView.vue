<template>
  <div class="home">
    <h3>テキストバインディング</h3>
    <span>{{ msg }}</span>

    <h3>リストレンダリング</h3>
    <ul id="item-list">
      <li v-for="item in items" :key="item.id">
        {{item.name}}
      </li>
    </ul>
    <h3>イベントハンドリング</h3>
    <button v-on:click="onClick">実行</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
declare interface Item {
  id: number;
  name: string;
}
export default defineComponent({
  data() {
    return {
      msg: "Hello Vue.js!",
      items: [
        {
          id: 1,
          name: "キーボード"
        },
        {
          id: 2,
          name: "マウス"
        }
      ] as Item[]
    };
  },
  methods: {
    onClick(): void {
      alert(this.msg);
    }
  }
});
</script>

<style scoped>
.home {
  text-align: left;
}
</style>