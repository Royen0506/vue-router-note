<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="push">push</button>
    <button @click="go">go</button>
    <button @click="replace">replace</button>
    <button @click="getRoute">getRoute</button>
    <button @click="addRoute">addRoute</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  data() {
    return {}
  },

  mounted() {},

  methods: {
    push() {
      this.$router.push('/newPage') //push會有歷史紀錄
    },

    go() {
      this.$router.go(-1) //可以是正整數或負整數，類似於返回
    },

    replace() {
      this.$router.replace('/') //不會有歷史紀錄
    },

    getRoute() {
      console.log(this.$router)
      console.log(this.$route)
    },

    addRoute() {
      this.$router.addRoute({
        //新增路由
        path: '/newA',
        name: 'newA',
        component: () => import('../views/ComponentA.vue')
      })
    }
  }
}
</script>
