<template>
    <div>
        <h1 class="my-8">{{title}}</h1>
        <div class="grid grid-cols-3 gap-4">
            <!-- <button @click="checkData">Tombol</button> -->
            <div class="all-item" v-for="l in data" :key="l">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" v-bind:src="l.imgUrl" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{l.name}}</div>
                        <p class="text-black-700 text-base">
                            Price: {{ l.price | price-filter }}
                        </p>
                    </div>
                    <div v-if="isAdded" @click="removeItems(l)">
                        <button>Remove</button>
                    </div>
                    <div v-else>
                        <button @click="addItems(l)">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>    
export default {
    name: "List",
    props: ["data", "title", "isAdded"],
    methods: {
        // checkData() {
        //     console.log(this.data)
        // }
        addItems(e) {
            // this.$confirm("Want to add this item?").then(() => {
            //     this.$emit("click", e)
            // })
            this.$emit("click", e)
        },
        removeItems(e) {
            this.$confirm("Remove this item?").then(() => {
                this.$emit("click", e)
            })
        }
    }
}
</script>