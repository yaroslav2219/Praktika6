const app = Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, name: "Golden Kiwi", image: "kiwi1.jpg" },
                { id: 2, name: "Green Kiwi", image: "kiwi2.jpg" },
                { id: 3, name: "Mini Kiwi", image: "kiwi3.jpg" },
                { id: 4, name: "Organic Kiwi", image: "kiwi4.jpg" },
                { id: 5, name: "Tropical Kiwi", image: "kiwi5.jpg" }
            ],
            btnVisible: {} 
        };
    },
    methods: {
        addToCart(id) {
            let cart = JSON.parse(localStorage.getItem("cart")) || {};
            if (!cart[id]) {
                cart[id] = 1;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
            this.btnVisible[id] = true; 
        },
        goToCart() {
            window.location.href = "cart.html"; // Перехід у кошик
        }
    },
    mounted() {
        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        this.products.forEach(product => {
            this.btnVisible[product.id] = !!cart[product.id];
        });
    }
});

app.mount("#app");
