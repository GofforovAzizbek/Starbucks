const f = fetch("https://dummyjson.com/products");

console.log(f);

f.then((data) => {
    console.log(data);
    return data.json()
}).then((data) => {
    console.log("data", data);

    // const n = document.createElement("p");
    // n.textContent = data.products[1].title;
    
    document.body.appendChild(n)
}).catch((err) => {
    console.log("sxda xato", err);
})
