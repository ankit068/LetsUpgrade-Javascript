// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpg",
    description: "Good looking white Tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautiful Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },

  {
    id: 7,
    name: "Carribean Dress",
    size: "M",
    color: "Red",
    price: 1300,
    image: "product7.jpg",
    description: "A Champion dress for Woman",
  },

  {
    id: 8,
    name: "Denim shirts",
    size: "L",
    color: "Blue",
    price: 2000,
    image: "product8.jpg",
    description: "Amazing Denim Shirts for man ",
  },

  {
    id: 9,
    name: "Banarasi  Saree",
    size: "XL",
    color: "Orange",
    price: 2500,
    image: "product9.jpg",
    description: "Traditional Saree for Weddings",
  },

  {
    id: 10,
    name: "Jumpsuit",
    size: "S",
    color: "Light Blue",
    price: 1000,
    image: "product10.jpg",
    description: "Comfortable Jumpsuits for children",
  },

  {
    id: 11,
    name: "Sherwani",
    size: "XL",
    color: "White",
    price: 3000,
    image: "product11.jpg",
    description: "Modern Sherwanis for Weddings",
  },

  {
    id: 12,
    name: "Angel's Dress",
    size: "S",
    color: "Grey",
    price: 1200,
    image: "product12.jpg",
    description: "Good looking Dress",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}
let count;
function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  count=document.getElementById("count").value;
  
  //   putting in cart
  cart.push(pro);
  displayProducts(cart, "cart");
  count++;
  document.getElementById("count").value=count;
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
    
  });


  //   removing from cart based on index
  cart.splice(index, 1);
  count--;
  document.getElementById("count").value=count;
  displayProducts(cart, "cart");
}


