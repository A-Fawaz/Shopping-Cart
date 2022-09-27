let shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("data")) || []
console.log(shop);
let shopItemsData = [{
  id:"book1",
  name:"book1",
  price:"$ 45",
  desc: "lorem ipsim",
  img: "./imgs/olia-gozha-J4kK8b9Fgj8-unsplash.jpg",

},
{ id:"book2",
name:"book2",
price:" $ 10",
desc: " A book about phoenicians",
img: "./imgs/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg",},
{ id:"book3",
name:"book3",
price:"$ 55",
desc: "lorem ipsim",
img: "./imgs/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg",},
{ id:"book4",
name:"book4",
price: "$ 45",
desc: "lorem ipsim",
img: "./imgs/olia-gozha-J4kK8b9Fgj8-unsplash.jpg",}]

let generateShop =()=>{
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let{id,name,price,desc,img} = x
    let search = basket.find((y) => y.id === id)
    return `
    <div id =product-id-${id} class="item">
      <img width="220" src=${img} alt="image of book">
      <div class="details">
        <h3>${name}</h3>
        <p> ${desc}<p>
        <div class="price-quantity">
          <h2>${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
          
        </div>
      </div>
    </div>`
  }).join(""));
}

generateShop();

let increment = (id)=>{
let selectedItem = id;
let search = basket.find((x)=>x.id === selectedItem.id);
if(search === undefined){
  basket.push({
  id: selectedItem.id,
  item: 1,

});}
else {
  search.item += 1;
}
update(selectedItem.id);
console.log(basket);

localStorage.setItem("data", JSON.stringify(basket));
}

;


let decrement = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=>x.id === selectedItem.id);
  if(search ===undefined) return;
  else if(search.item === 0) return;
  else {
    search.item -= 1;
  }
  
  
  update(selectedItem.id);
  console.log(basket);
  basket = basket.filter((x) => x.item !== 0);
   localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id)=>{
  let search = basket.find((x) => x.id ===id);
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)};
  calculation();
  
