// const getProductsData = async () => {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     console.log(data.products);
// }
// getProductsData();

// fetch("https://dummyjson.com/products");
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


let product = [];
const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    product = data.products;
    console.log(product);

    const priceGreaterthanTwelve = product.filter((product) => product.price > 100);
    console.log(priceGreaterthanTwelve);
}
getProductsData();

product.map((product) => console.log(product.title));