import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Photo from '../views/Photos.vue'
import Album from '../views/Albums.vue'
import Detail from '../views/Detail.vue'

// import SideBar from '../components/SideBar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    // children: [
    //   {
    //     path: "detail/:id",
    //     name: "Post Detail",
    //     component: Detail
    //   }
    // ]
  },
  {
    path: "/post/detail/:id",
    name: "Post Detail",
    component: Detail,
    // children: [
    //   {
    //     path: "detail/:id",
    //     name: "Post Detail",
    //     component: Detail
    //   }
    // ]
  },
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
    // children: [
    //   {
    //     path: "detail",
    //     name: "Photo Detail",
    //     component: Detail
    //   }
    // ]
  },
  {
    path: "/photo/detail/:id",
    name: "Photo Detail",
    component: Detail,
    // children: [
    //   {
    //     path: "detail/:id",
    //     name: "Post Detail",
    //     component: Detail
    //   }
    // ]
  },
  {
    path: "/album",
    name: "Album",
    component: Album,
    // children: [
    //   {
    //     path: "detail",
    //     name: "Album Detail",
    //     component: Detail
    //   }
    // ]
  },
  {
    path: "/album/detail/:id",
    name: "Album Detail",
    component: Detail,
    // children: [
    //   {
    //     path: "detail/:id",
    //     name: "Post Detail",
    //     component: Detail
    //   }
    // ]
  },
]

const router = new VueRouter({
  routes
})

export default router
