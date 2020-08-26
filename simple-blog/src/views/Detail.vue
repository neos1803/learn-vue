<template>
    <div class="detail flex">
        <div class="container w-4/6 my-8 mx-8">
            <!-- <router-link :to="'/photo/detail/'">Read More</router-link> -->
            <!-- <Content :data="photos" :isPhoto="isPhoto" /> -->
            <div v-if="isPost">
                <detail-component :data="posts" />
            </div>
            <div v-else-if="isAlbum">
                <detail-component :data="albums" />
            </div>
            <div v-else-if="isPhoto">
                <detail-component :data="photos" />
            </div>
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
        <side-bar />
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import DetailComponent from '../components/DetailComponent.vue'
// import Content from '../components/Content.vue'
// import VuePaginator from "vuejs-paginator"


export default {
    name: "Detail",
    props: ["photos", "posts", "albums", "isAlbum", "isPhoto", "isPost"],
    data() {
        return {
            // resource_url: "../data/posts.js"
        }
    },
    components: {
        SideBar,
        DetailComponent
        // Content,
        // VPaginator: VuePaginator
    },
    methods: {
        // updateResource(data) {
        //     this.posts = data
        // }
    }
}
</script>