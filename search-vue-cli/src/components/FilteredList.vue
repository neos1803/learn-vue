<template>
    <div class="my-8 grid grid-cols-3 gap-4">
        <div class="filtered-list" v-for="l in filteredList" :key="l">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <a v-bind:href="l.url">
                        <img class="w-full" v-bind:src="l.thumbnailUrl" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Title of image id {{l.id}}</div>
                            <p class="text-gray-700 text-base">
                            {{l.title}}
                            </p>
                        </div>
                    </a>
                </div>
        </div>
    </div>
    <!-- <div class="">
        <input v-on:keyup="checkSearch" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="tex" placeholder="Lorem Ipsum">
    </div> -->
</template>

<script>
export default {
    name: "FilteredList",
    props: ["filteredList", "search"],
    computed: {
        // filterList() {
        //     return this.list.filter(e => {
        //         return e.title
        //         .includes(this.search.toLowerCase())
        //     })
        // }
    },
    methods: {
        checkSearch() {
            console.log(this.search)
        }
    }
}
</script>