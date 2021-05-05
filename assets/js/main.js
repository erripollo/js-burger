/* Il programma dovrà consentire di calcolare il prezzo del panino
 selezionando o deselezionando gli ingredienti proposti. */

//definisco prezzo base per il burger
var burgerPrice = 5.99;

//creare lista di ingredienti e assegnare prezzo
var ingredients = [
    ['cheese', '1.4'],
    ['tomato', '1'],
    ['egg', '2'],
    ['lettuce', '1'],
    ['mustard', '0.8'],
    ['ketchup', '0.8']
]

function renderInputs(list, el) {
    i = 0;
    while (i < list.length) {

       el.insertAdjacentHTML('beforeend',
        `
        <div class="form-group col d-flex align-items-center">
            <img class="mr-4" width="60" src="./assets/img/${list[i][0] + '.svg'}"
            <label for="${list[i][0]}">${list[i][0]}</label>
            <input class="ml-4" type="checkbox" name="${list[i][0]}" id="${list[i][0]}" data-price="${list[i][1]}">
            <span class="ml-3" style="color:#F9395E;">add</span>
        </div>
        `
       );
        
       i++
    }
}

var ingElement = document.querySelector('.ingredients');
//console.log(ingElement);
renderInputs(ingredients, ingElement);

//ascolto per il click il pulsante
document.querySelector('button').addEventListener('click', function () {
    var checks = document.querySelectorAll("input[type='checkbox']")
    console.log(checks);

    //incremento il prezzo degli ingredienti selezionati
    sumIngredients = 0;
    for (var i = 0; i < checks.length; i++) {
        var element = checks[i];
        if (element.checked) {
            sumIngredients += Number(element.getAttribute('data-price'))
        }
    }
    
    console.log(sumIngredients);

    //incremento il prezzo degli ingredienti al prezzo base
    var totalPrice = burgerPrice + sumIngredients
    //console.log(totalPrice);

    //definire codici sconto
    var coupons = ['sconto15', 'sconto20', 'sconto30']

    var couponEl = document.querySelector('.input_coupon').value;
    
    //calcolo prezzo scontato
    if (couponEl == 'sconto15') {
        totalPrice -= discountCalc(totalPrice, 15)
    }else if (couponEl == 'sconto20') {
        totalPrice -= discountCalc(totalPrice, 20)
    }else if (couponEl == 'sconto30') {
        totalPrice -= discountCalc(totalPrice, 30)
    }

    
    var totalPriceEl = document.querySelector('.price');
    //console.log(totalPriceEl);
    
    totalPriceEl.innerHTML = totalPrice.toFixed(2);

})

//Function discount calc
/** 
 * ## Calcolo sconto
 * restituisce x% di N
 * @param {number} price N valore totale
 * @param {number} discount x percentuale  
 * @returns {number}
 */
 function discountCalc(price, discount) {
    var cutPrice = (price / 100) * discount
    return cutPrice
}


