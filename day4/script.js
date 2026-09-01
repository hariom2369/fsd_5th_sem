let products = []
const showProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;
    console.log(products);

    products.map((product) => {
        console.log(product.title);
        const = document.createElement("div");
        const logo = document.createElement("img");
        logo.src = product.thumbnail;
        log.src = product.thumbnail;
        const title = document.createElement("h3");
        title.innerText = product.title;
        const price = document.createElement("p");
        price.innerText = product.price;
        div.append(logo, title, price);
        document.body.append(div);
    }
    products.map((product) => console.log(product.title));
    img,src = product.thumbnail;
    img.alt=product.title;

    const priceGreaterthanTwelve = products.filter((product) => product.price > 100);
    console.log(priceGreaterthanTwelve);
    
    const title = products.map((product) => product.title);
    title.innerText = product.title;

    const price = products.map((product) => product.price);
    price.innerText = product.price;

    const incrementButton = document.createElement("button");
    incrementButton.innerText = "+";





}
showProducts();