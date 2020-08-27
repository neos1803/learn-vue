import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Post from '../views/Post.vue'
// import Photo from '../views/Photos.vue'
// import Album from '../views/Albums.vue'
// import Detail from '../views/Detail.vue'

// import SideBar from '../components/SideBar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => 
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/post",
    name: "Post",
    components: {
      default: () =>
        import(/* webpackChunkName: "post" */ "../views/Post.vue"),
      popular: () =>
        import(/* webpackChunkName: "popular-post" */ "../components/widgets/Popular.vue")
    },
    beforeEnter: (to, from, next) => {
      
      let auth = prompt("Authenticate yourself!");
      while(auth != "admin"){
        next({ name: "Home" });
        return
      }
      next();
    },
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
    components: {
      default: () =>
        import(/* webpackChunkName: "detail-post" */ "../views/Detail.vue"),
    },
    beforeEnter: (to, from, next) => {
      
      let auth = prompt("Authenticate yourself!");
      while(auth != "admin"){
        next({ name: "Post" });
        return
      }
      next();
    },
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
    components: {
      default: () =>
        import(/* webpackChunkName: "photo" */ "../views/Photos.vue"),
      popular: () =>
        import(/* webpackChunkName: "popular-photo" */ "../components/widgets/Popular.vue")
    }
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
    components: {
      default: () =>
        import(/* webpackChunkName: "detail-photo" */ "../views/Detail.vue"),
    },
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
    components: {
      default: () =>
        import(/* webpackChunkName: "album" */ "../views/Albums.vue"),
      popular: () =>
        import(/* webpackChunkName: "popular-album" */ "../components/widgets/Popular.vue")
    }
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
    components: {
      default: () =>
        import(/* webpackChunkName: "detail-album" */ "../views/Detail.vue"),
    },
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
