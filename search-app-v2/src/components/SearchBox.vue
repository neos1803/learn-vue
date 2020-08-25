<template>
    <div class="search mt-8">
        <input v-model="search" v-on:keyup="checkSearch" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="tex" placeholder="Insert Title">
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    data: function() {
        return {
            search: "",
        }
    },
    methods: {
        checkSearch() {
            this.$emit("new-search", this.search)
        }
    }
}
</script>