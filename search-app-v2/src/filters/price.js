import Vue from "vue"

// Vue.filter("price-filter", (data) => {
//     `Rp ${data.toLocaleString("in")}`
//     console.log(`Rp ${data.toLocaleString("in")}`)
// })

Vue.filter("price-filter", (data) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data))