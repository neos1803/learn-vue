<template>
    <div class="container w-4/6 my-8 mx-8">
        <div class="">
            <Content :data="posts" :route="route" />
            <!-- <v-paginator :resource_url="resource_url" @update="updateResource"> </v-paginator> -->
        </div>
        <!-- <side-bar /> -->
    </div>
</template>

<script>
// import SideBar from '../components/SideBar.vue'
import Content from '../components/Content.vue'
// import VuePaginator from "vuejs-paginator"


export default {
    name: "Post",
    props: ["posts", "route"],
    data() {
        return {
            // resource_url: "../data/posts.js"
        }
    },
    components: {
        // SideBar,
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