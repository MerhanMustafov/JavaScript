function solve() {
   let productsNames = new Set();
   let prices = []


   document.querySelector('.shopping-cart')
   .addEventListener("click", onClick)

   function onClick(ev){
      
      
      let output = document.querySelector('textarea')

      if (ev.target.tagName == 'BUTTON' && ev.target.className =='add-product'){
         // ev.target.classList.contains('add-product')
         let productData = ev.target.parentElement.parentElement
         let productName = productData.querySelector(".product-details").children[0].innerHTML.trim()
         let productPrice = Number(productData.querySelector(".product-line-price").innerHTML.trim())
         
         productsNames.add(productName)
         prices.push(productPrice)
         output.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

      }else if (ev.target.tagName == 'BUTTON' && ev.target.className == 'checkout'){
         // ev.target.classList.contains('checkout')
         let totalPrice = prices.reduce((a, b) => a + b, 0)
         let pNames = Array.from(productsNames)

          output.value += `You bought ${pNames.join(', ')} for ${totalPrice.toFixed(2)}.`
          
         document.querySelector('.shopping-cart')
         .removeEventListener("click", onClick)
      }
   }
}