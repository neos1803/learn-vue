<template>
    <div class="home flex">
        <div class="container w-4/6 my-8 mx-8">
            <div class="w-2/3 h-64 mx-auto grid my-8 grid-cols-2 gap-x-1">
                <div class="h-48 lg:h-auto lg:full flex-none bg-no-repeat bg-contain bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZE46RaWqc4512Ddjw6KHE2xVD-EjUW8rutg&usqp=CAU')" title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl my-8">How many Posts in here?</div>
                        <p class="text-gray-700 text-base">Total Post</p>
                        <p class="text-gray-700 font-bold text-xl">{{posts.length}}</p>
                    </div>
                </div>
            </div>
            <div class="w-2/3 h-64 mx-auto grid my-8 grid-cols-2 gap-x-1">
                <div class="h-48 lg:h-auto lg:full flex-none bg-no-repeat bg-contain bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZE46RaWqc4512Ddjw6KHE2xVD-EjUW8rutg&usqp=CAU')" title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl my-8">How many Photo in here?</div>
                        <p class="text-gray-700 text-base">Total Post</p>
                        <p class="text-gray-700 font-bold text-xl">{{photos.length}}</p>
                    </div>
                </div>
            </div>
            <div class="w-2/3 h-64 mx-auto grid my-8 grid-cols-2 gap-x-1">
                <div class="h-48 lg:h-auto lg:full flex-none bg-no-repeat bg-contain bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZE46RaWqc4512Ddjw6KHE2xVD-EjUW8rutg&usqp=CAU')" title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl my-8">How many Album in here?</div>
                        <p class="text-gray-700 text-base">Total Post</p>
                        <p class="text-gray-700 font-bold text-xl">{{albums.length}}</p>
                    </div>
                </div>
            </div>
        </div>
        <side-bar />
        <!-- <Content :data="posts" text="Post" />
            <Content :data="photos" text="Photo" />
            <Content :data="albums" text="Album" /> -->
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
// import Content from '../components/Content.vue'

export default {
    name: "Home",
    props: ["posts", "albums", "photos"],
    // data() {
    //     return {
    //         posts: posts
    //     }
    // },
    components: {
        SideBar,
        // Content,
    }    
}
</script>