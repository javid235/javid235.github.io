import { products } from "../data/products.js"

// Function to generate HTML for product section
function generateProductSection(category, items) {
  const section = document.createElement('div')
  section.classList.add('pro-section')

  const topInfo = document.createElement('div')
  topInfo.classList.add('product-top-info')
  topInfo.innerHTML = `
      <h4>${category}</h4>
      <a href="/pages/sub-products/${category
        .toLowerCase()
        .replace(/\s+/g, '-')}-main.html"><p>see more &#8594;</p></a>
    `
  section.appendChild(topInfo)

  const productGrid = document.createElement('div')
  productGrid.classList.add('product-grid')
  items.slice(0, 4).forEach((item) => {
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
    productGrid.appendChild(productCont)
  })
  section.appendChild(productGrid)
  return section
}

// Generate product sections dynamically
const productSectionsContainer = document.getElementById('productSections')
products.forEach((product) => {
  const section = generateProductSection(product.category, product.items)
  productSectionsContainer.appendChild(section)
})
