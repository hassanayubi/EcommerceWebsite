const product = [
    {
        id: 1,
        image: 'image/p5.png',
        title: 'Hand Bag',
        price: 100.5,
    },
    {
        id: 2,
        image: 'image/p6.png',
        title: 'Sport Shoes',
        price: 32.5,
    },
    {
        id: 3,
        image: 'image/p7.png',
        title: 'Girls Heel',
        price: 20.10,
    },
    {
        id: 4,
        image: 'image/p8.png',
        title: 'Mens Jeans',
        price: 65.50,
    },
    {
        id: 5,
        image: 'image/p9.jpg',
        title: 'Dark Pant',
        price: 13.5,
    },
    {
        id: 6,
        image: 'image/p10.jpg',
        title: 'Mwalk Billies',
        price: 6.50,
    },
    {
        id: 7,
        image: 'image/p11.jpg',
        title: 'Sweet Shirt',
        price: 10.5,
    },
    {
        id: 8,
        image: 'image/p12.jpg',
        title: 'Black T-Shirt',
        price: 5.1,
    }
];


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = product.filter(item => item.title.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});



const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
const displayProducts = (products) => {
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = "";

    products.forEach(item => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3', 'py-3', 'py-md-0');
        productCard.innerHTML = `
            <a href="#" class="card">
                <img src="${item.image}" alt="" />
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>$${item.price}</h5>
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                </div>
            </a>
        `;
        productCardsContainer.appendChild(productCard);
    });
};