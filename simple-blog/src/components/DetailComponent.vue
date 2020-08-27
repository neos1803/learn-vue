<template>
    <div>
        <img class="mx-auto h-64" v-bind:src="this.new.url">
        <p class="text-gray-900 font-bold text-xl my-4">{{this.new.title}}</p>
        <p class="text-gray-700 text-sm">{{this.$route.name}} Number: {{this.new.id}}</p>
        <p class="text-gray-700 text-base mt-8">{{this.new.body}}</p>
    </div>
</template>

<script>
export default {
    name: "DetailComponent",
    props: ["data"],
    data() {
        return {
            new: []
        }
    },
    methods: {
        checkData() {
            console.log(this.data)
        },
        getId() {
            console.log(this.data)
            this.new = this.getById([this.data, this.$route.params.id])[0]
        }
    },
    created() {
        this.getId()
    }
}
</script>