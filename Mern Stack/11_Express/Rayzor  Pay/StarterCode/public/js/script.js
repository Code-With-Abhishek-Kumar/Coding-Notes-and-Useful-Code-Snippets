const products = [
  {
    image: "https://via.placeholder.com/150?text=Product+1",
    name: "Cool Gadget",
    price: 200,
  },
  {
    image: "https://via.placeholder.com/150?text=Product+2",
    name: "Awesome Widget",
    price: 49,
  },
  {
    image: "https://via.placeholder.com/150?text=Product+3",
    name: "Stylish Accessory",
    price: 19,
  },
  {
    image: "https://via.placeholder.com/150?text=Product+4",
    name: "High-Tech Device",
    price: 89,
  },
  {
    image: "https://via.placeholder.com/150?text=Product+5",
    name: "Elegant Item",
    price: 59,
  },
];



// Example usage:
// console.log(products);


let container = document.getElementById("product-container");


products.map(function (product) {



  container.innerHTML += `

<div class="product-card">
        <div class="product-image">
            <img src="${product.image}" alt="Product Image">
        </div>
        <div class="product-info">
            <div class="rating">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
            </div>
            <h2 class="product-title">${product.name}</h2>
            <p class="product-description">This is a brief description of the product. It highlights the key features and benefits to grab the customer's attention.</p>
            <div class="product-amount">
               ₹<span> ${product.price.toFixed(2)}</span>
            </div>
            <button class="pay-now">Pay Now</button>
        </div>
    </div>






`;

  console.log(product)




});










// let api = fetch('localhost:3000/create-order')

let cards = document.querySelectorAll('.product-card');

cards.forEach(function (card) {
  

  card.addEventListener('click', function () {

    let productAmount = card.childNodes[3].childNodes[7].childNodes[1].innerHTML;
    let paybtn = card.childNodes[3].childNodes[9];
   

    let createdOrder = axios.post('/create-order', {
      "amount": productAmount,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });




    var options = {
      "key": "rzp_test_f9jJDk2hzpjsEo", // Enter the Key ID generated from the Dashboard
      "amount": productAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Abhishek Gupta",
      "description": "Coding Tech bhai",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F908%2F013%2Fnon_2x%2Fcoding-logo-design-template-free-vector.jpg&f=1&nofb=1&ipt=4b1bd31b44dfaa27bfc22292c822955796a722d261178e7e42a2fb8d7b648521&ipo=images",
      "order_id": createdOrder.id, //This is a sample Order ID. Enter Take From backend Api
      "callback_url": "/success",
      "prefill": {
        "name": "Abhishek Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9661342993"
      },
      "notes": {
        "address": "Bagodar"
      },
      "theme": {
        "color": "red"
      },

      "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
      }

    };






    // alert('clicked')
    console.log(paybtn)

    console.log(productAmount)
    const rzp = new Razorpay(options);
    rzp.open();
  
  })




})


