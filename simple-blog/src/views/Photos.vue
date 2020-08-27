<template>
    <div class="container w-4/6 my-8 mx-8">
        <div class="">
            <!-- <router-link :to="'/photo/detail/'">Read More</router-link> -->
            <Content :data="photos" :isPhoto="isPhoto" />
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Content from '../components/Content.vue'
// import VuePaginator from "vuejs-paginator"


export default {
    name: "Photo",
    props: ["photos", "isPhoto"],
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