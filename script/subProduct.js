
import { products } from "../data/products.js"

var scriptElement = document.querySelector('script[data-sub-page]');
var subPageValue = scriptElement.getAttribute('data-sub-page');
console.log(subPageValue);

let subProNum;

switch (subPageValue) {
  case 'candle':
    subProNum = 0
    break
  case 'bathmilk':
    subProNum = 1
    break
  case 'bathbombs':
    subProNum = 2
    break
  case 'bathsalts':
    subProNum = 3
    break
  case 'showerstreamrs':
    subProNum = 4
    break
  default:
}

  function generateSection(cat, items) {
    const section = document.createElement('div')
    section.classList.add('main-container')

    const protitle = document.createElement('h1')
    protitle.textContent = `${cat}`
    section.appendChild(protitle)

    const proSection = document.createElement('div')
    proSection.classList.add('pro-section')
    proSection.innerHTML = `<div id="pro-nav">
                        <div class="pro-max-cont">
                            <a href="/pages/products-main.html"><p>All</p></a>
                            <img src="/img/arrow2.svg" alt="">
                            <a href=""><p>${cat}</p></a>
                        </div>
                    </div>`
    section.appendChild(proSection)

    const proGrid = document.createElement('div')
    proGrid.classList.add('product-grid')

    items.forEach((item) => {
      const productCont = document.createElement('div')
      productCont.classList.add('product-cont')
      productCont.innerHTML = `
        <a href="/pages/product-info.html">
          <div>
            <img src="${item.image}" alt="">
          </div>
          <div class="pro-info">
            <div>
              <h2 class="product-name">${item.name}</h2>
              <p>${item.description}</p>
            </div>
            <div>
              <h2 class="price">${item.price}</h2>
            </div>
          </div>
        </a>
      `
      proGrid.appendChild(productCont)
    })
    proSection.appendChild(proGrid)
    return section
  }

  const section = generateSection(
    products[subProNum].category,
    products[subProNum].items
  )

  document.getElementById('product').append(section)





