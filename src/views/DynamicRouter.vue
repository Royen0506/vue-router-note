<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {
    console.log(this.$route.params)
    const seed = this.$route.params.id
    this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
