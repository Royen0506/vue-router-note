<template>
  <div>動態路由搭配props</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['id'],

  mounted() {
    const seed = this.id
    this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
