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
                                    <p>${price} x ${quantity} = <span>${total}</span>$</p>
                                    <button onclick="removeFromCard(this)" class="remove-item">Ukloni</button>
                                </div>`;
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');
        allTotal+=total;    
        document.querySelector('.total').innerHTML=`Total: ${allTotal}$`;


    }else{
        alert('Odaberi kolicinu');
    }

}

function removeFromCard(element){
    let totalBuy = document.querySelector('.total');
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt(price);
    allTotal -= price;
    if(allTotal != 0){
    totalBuy = totalBuy.innerHTML = `Ukupno kosta: ${allTotal}$`;
    }else{
        totalBuy.innerHTML = "";
    }
    mainEl.remove();
    
    vegetables.forEach(function (vege){
        let itemName = vege.querySelector('.si-content h3').innerText
        if(name == itemName){
           vege.querySelector('.actions input').value = 0;
           vege.querySelector('.actions button').innerText = "Dodaj";
           vege.querySelector('.actions button').removeAttribute('disabled');
        }
    });
}


