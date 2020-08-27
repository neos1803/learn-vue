<template>
    <div>
        <div class="font-bold border-b">
            popular {{this.$route.name}}
        </div>
        <!-- <div v-for="p in posts" v-bind:key="p.id">
                {{posts.title}}
            </div> -->
        <div v-if="this.$route.name == 'Post'">
            <div v-for="(p, index) in posts.slice(0, 5)" v-bind:key="index">
                {{index+1}}. <router-link :isPost="true" :to="`/post/detail/${p.id}`">{{p.title}}</router-link>
            </div>
        </div>
        <div v-if="this.$route.name == 'Photo'">
            <div v-for="(p, index) in photos.slice(0, 5)" v-bind:key="index">
                {{index+1}}. <router-link :isPhoto="true" :to="`/photo/detail/${p.id}`">{{p.title}}</router-link>
            </div>
        </div>
        <div v-if="this.$route.name == 'Album'">
            <div v-for="(a, index) in albums.slice(0, 5)" v-bind:key="index">
                {{index+1}}. <router-link :isAlbum="true" :to="`/album/detail/${a.id}`">{{a.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import posts from '../../data/posts'
import photos from '../../data/photos'
import albums from '../../data/albums'

export default {
    name: "Popular",
    props: ["route"],
    data() {
        return {
            posts: posts,
            albums: albums,
            photos: photos
        }
    }
    // created() {
    //     console.log(this.$route.name)
    // },
}
</script>