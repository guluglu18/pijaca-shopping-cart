let allTotal = 0;
function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    price = price.substring(1)

    let cartItems = document.querySelector('.cart-items');

    if(quantity>0){
        let total = quantity * price
        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>${price}$ x ${quantity} = ${total}$</p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');
        allTotal+=total;    
        document.querySelector('.total').innerHTML=`Total: ${allTotal}$`;


    }else{
        alert('Odaberi kolicinu');
    }

}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    mainEl.remove();


}


