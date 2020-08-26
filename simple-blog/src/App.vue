<template>
  <div id="app">
    <nav-bar @click="checkStatus" />
    <router-view :posts="posts" :photos="photos" 
          :albums="albums" 
          :isPost="isPost"
          :isPhoto="isPhoto"
          :isAlbum="isAlbum"
          >
    </router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
// import SideBar from './components/SideBar.vue'

import posts from './data/posts'
import photos from './data/photos'
import albums from './data/albums'

export default {
  name:"App",
  data() {
    return {
      posts: posts,
      photos: photos,
      albums: albums,
      // isHome: true,
      isPost: false,
      isPhoto: false,
      isAlbum: false
    }
  },
  components: {
    NavBar,
    Footer
    // SideBar
  },
  methods: {
    checkStatus(e) {
      if(e == "Post") {
        this.isPost = true
        this.isPhoto = false
        this.isAlbum = false
      } else if (e == "Photo") {
        this.isPhoto = true
        this.isAlbum = false
        this.isPost = false
      } else if(e == "Album") {
        this.isPhoto = false
        this.isAlbum = true
        this.isPost = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
