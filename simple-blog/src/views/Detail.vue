<template>
    <div class="container w-4/6 my-8 mx-8">
        <div class="">
            <!-- <router-link :to="'/photo/detail/'">Read More</router-link> -->
            <!-- <Content :data="photos" :isPhoto="isPhoto" /> -->
            <div v-if="route == 'Post Detail'">
                <detail-component :data="posts" />
            </div>
            <div v-if="route == 'Album Detail'">
                <detail-component :data="albums" />
            </div>
            <div v-if="route == 'Photo Detail'">
                <detail-component :data="photos" />
            </div>
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import DetailComponent from '../components/DetailComponent.vue'
// import Content from '../components/Content.vue'
// import VuePaginator from "vuejs-paginator"


export default {
    name: "Detail",
    props: ["photos", "posts", "albums", "route"],
    data() {
        return {
            // resource_url: "../data/posts.js"
        }
    },
    components: {
        DetailComponent
        // Content,
        // VPaginator: VuePaginator
    },
    methods: {
        // updateResource(data) {
        //     this.posts = data
        // }
    },
    created() {
        console.log(this.route)
    }
}
</script>