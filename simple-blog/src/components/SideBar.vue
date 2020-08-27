<template>
  <div class="container bg-indigo-300 w-2/6 min-h-screen">
      <router-view name="popular"></router-view>
  </div>
</template>

<script>
export default {
    name: "SideBar",
    // props: ["posts", "albums", "photos"]
    // created() {
    //     console.log(this.$route.name)
    // },
}
</script>