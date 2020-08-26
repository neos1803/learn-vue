<template>
    <div class="album flex">
        <div class="container w-4/6 my-8 mx-8">
            <Content :data="albums" :isAlbum="isAlbum" />
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
        <side-bar />
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
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
        SideBar,
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