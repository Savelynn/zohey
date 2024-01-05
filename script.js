const product = {
    list: [
        {
            name: "Jersey Adidas",
            price: 100000,
            image: "/images/adidas_jersey/adidas_jersey.jpg",
            desc: "Jersey Adidas Dengan kualitas tinggi dan berbagai ukuran"
        },
        {
            name: "Sepatu Adidas",
            price: 100000,
            image: "/images/adidas_sepatu/adidas_sepatu.jpg",
            desc: "Sepatu Adidas Dengan kualitas tinggi dan berbagai ukuran"
        },
        {
            name: "Sepatu Nike",
            price: 100000,
            image: "/images/nike_sepatu/nike_sepatu.jpg",
            desc: "Jersey Adidas Dengan kualitas tinggi dan berbagai ukuran"
        },
        {
            name: "Jersey Puma",
            price: 100000,
            image: "/images/puma_jersey/puma_jersey.jpg",
            desc: "Jersey Adidas Dengan kualitas tinggi dan berbagai ukuran"
        }
    ],
    cart: [
        {
            name: "jersey"
        }
    ]
}

const app = new Vue({
    el: '#product',
    data: product,
    methods: {
        addToCart(item) {
            this.cart.push(item);
            alert("Product added to cart!");
        }
    }
});

function consol() {
    console.log(product.cart)
}