<template>
  <div class="container mx-auto mt-10" id="app">
    <!-- <img class="mx-auto" alt="Vue logo" src="./assets/logo.png"> -->
    <img class="mx-auto" alt="Vue logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZE46RaWqc4512Ddjw6KHE2xVD-EjUW8rutg&usqp=CAU">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button @click="checkData">Check</button> -->
    <SearchBox @new-search="newSearch" />
    <List title="Selected Product" :data="selected" />
    <List title="Searched Product" :data="searched" @click="addItems" />
    <List title="All Product" :data="products" @click="addItems" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SearchBox from './components/SearchBox.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  data: function() {
    return {
      products: [
        {
          "id": 1,
          "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          "name": "CHECK PRINT SHIRT",
          "price": 200000
        },
        {
          "id": 2,
          "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          "name": "GLORIA HIGH LOGO SNEAKER",
          "price": 150000
        },
        {
          "id": 3,
          "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          "name": "CATE RIGID BAG",
          "price": 160000
        },
        {
          "id": 4,
          "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          "name": "GUESS CONNECT WATCH",
          "price": 45000
        },
        {
          "id": 5,
          "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          "name": "'70s RETRO GLAM KEFIAH",
          "price": 50000
        },
        {
          "id": 6,
          "imgUrl": "https://cf.shopee.co.id/file/bed37bc93505bead092b8b3f5d03144b",
          "name": "Rinso Coklat",
          "price": 35000
        },
        {
          "id": 7,
          "imgUrl": "https://cf.shopee.co.id/file/bed37bc93505bead092b8b3f5d03144b",
          "name": "Rinso Strawberry",
          "price": 35000
        },
        {
          "id": 8,
          "imgUrl": "https://cf.shopee.co.id/file/bed37bc93505bead092b8b3f5d03144b",
          "name": "Pupuk Rinso",
          "price": 35000
        },
        {
          "id": 9,
          "imgUrl": "https://cf.shopee.co.id/file/bed37bc93505bead092b8b3f5d03144b",
          "name": "Rinso Glow in The Dark",
          "price": 35000
        },
      ],
      selected: [],
      searched: [],
      search: "",
    }
  },
  components: {
    // HelloWorld
    SearchBox,
    List,
  },
  methods: {
    newSearch(e) {
      this.searched = this.products.filter(val => val.name.toLowerCase().includes(e.toLowerCase()))
      console.log(this.searched)
    },
    addItems(e) {
      this.selected.push(e)
    }
    // checkData() {
    //   console.log(this.products)
    // }
    // addItem(e) {
      
    // }
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
  margin-top: 60px;
}
</style>
