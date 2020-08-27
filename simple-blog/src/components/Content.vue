<template>
        <div class="content">
            <paginate name="items" :list="data" :per="3">
                <div v-for="d in paginated('items')" v-bind:key="d.id">
                    <div class="w-2/3 h-full mx-auto grid my-8 grid-cols-2 gap-x-0" >
                        <div class="h-48 lg:h-auto lg:full flex-none bg-no-repeat bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" v-bind:style="{ 'background-image': 'url(' + d.url + ')' }" title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-l-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                            <div class="mb-8">
                                <div class="text-gray-900 font-bold text-xl my-8">{{d.title}}</div>
                                <p class="text-gray-700 text-base">{{d.body}}</p>
                            </div>
                            <button>
                                <div v-if="route == 'Post'">
                                    <router-link :to="'/post/detail/'+d.id">
                                        Read More
                                    </router-link>
                                </div>
                                <div v-if="route == 'Photo'">
                                    <router-link :to="'/photo/detail/'+d.id">
                                        Read More
                                    </router-link>
                                </div>
                                <div v-if="route == 'Album'">
                                    <router-link :to="'/album/detail/'+d.id">
                                        Read More
                                    </router-link>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </paginate>
            <!-- <paginate-links class="block" for="items" :show-step-links="true"></paginate-links> -->
            <paginate-links class="block" for="items" :simple="{
                    next: 'Next »', prev: '« Back'
                    }">
            </paginate-links>
        </div>
</template>

<script>

import posts from '../data/posts'
import photos from '../data/photos'
import albums from '../data/albums'

export default {
    name: "Content",
    props: ["data", "route"],
    data() {
        return {
            posts: posts,
            photos: photos,
            albums: albums,
            paginate: ["items"]
        }
    },
    created() {
        console.log(this.route)
    }
}
</script>