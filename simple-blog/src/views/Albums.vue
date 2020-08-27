<template>
    <div class="album w-4/6 my-8 mx-8">
        <div class="">
            <Content :data="albums" :isAlbum="isAlbum" />
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
    </div>
</template>

<script>
import Content from '../components/Content.vue'
// import VuePaginator from "vuejs-paginator"


export default {
    name: "Album",
    props: ["albums", "isAlbum"],
    data() {
        return {
            // resource_url: "../data/posts.js"
        }
    },
    components: {
        Content,
        // VPaginator: VuePaginator
    },
    methods: {
        // updateResource(data) {
        //     this.posts = data
        // }
    }
}
</script>