<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-4">
            <div class="unfiltered-list" v-for="l in this.list" :key="l">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <a v-bind:href="l.url">
                        <img class="w-full" v-bind:src="l.thumbnailUrl" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Title of image id {{l.id}}</div>
                            <p class="text-gray-700 text-base">
                            {{l.title}}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "UnfilteredList",
    props: ["list"],
}
</script>