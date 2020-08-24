<template>
    <div class="search mt-8">
        <input v-model="searchValue" v-on:keyup="checkSearch" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="tex" placeholder="Insert Title">
        <h1 class="mt-8">{{message}} </h1>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    props: ["message"],
    data: function() {
        return {
            searchValue: "",
        }
    },
    methods: {
        checkSearch: function(){
            this.$emit("new-search", this.searchValue)
        }
    }
}
</script>