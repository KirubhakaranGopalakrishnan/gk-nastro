var offerBar = document.querySelector(".offer-bar")
var offerClose = document.getElementById("offer-close");

if (offerClose) {
    offerClose.addEventListener("click", function () {
        offerBar.style.display = "none";
    });
}

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
if (sideNavMenu) {
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
}
var sidenavClose = document.getElementById("side-navbar-close");

if (sidenavClose) {
    sidenavClose.addEventListener("click", ()=>{
        document.querySelector(".side-navbar").style.marginLeft = "-60%"
    })
}



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

if(sliderleftbutton) {
sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)
}
if(sliderleftbutton) {
sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
}




var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})


//Collections

 /* ── 1. PRODUCT DATA ── */
  const PRODUCTS = [
    { id:1,  name:"Classic White Tee",    category:"men",         tags:["new"],        price:799,  originalPrice:null, color:"white", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
    { id:2,  name:"Slim Fit Chinos",      category:"men",         tags:[],             price:1799, originalPrice:null, color:"black", img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
    { id:3,  name:"Leather Belt",         category:"accessories", tags:["sale"],       price:599,  originalPrice:999,  color:"black", img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    { id:4,  name:"Floral Wrap Dress",    category:"women",       tags:["new","sale"], price:1399, originalPrice:1999, color:"red",   img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
    { id:5,  name:"Canvas Sneakers",      category:"men",         tags:[],             price:2299, originalPrice:null, color:"white", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { id:6,  name:"Oversized Hoodie",     category:"women",       tags:["new"],        price:1899, originalPrice:null, color:"blue",  img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
    { id:7,  name:"Silk Scarf",           category:"accessories", tags:["sale"],       price:899,  originalPrice:1499, color:"red",   img:"https://images.unsplash.com/photo-1584030373081-f37b7bb4fa4b?w=400&q=80" },
    { id:8,  name:"Linen Shirt",          category:"men",         tags:["new"],        price:1299, originalPrice:null, color:"white", img:"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
    { id:9,  name:"High-Waist Jeans",     category:"women",       tags:[],             price:2099, originalPrice:null, color:"blue",  img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
    { id:10, name:"Crossbody Bag",        category:"accessories", tags:["new"],        price:3499, originalPrice:null, color:"black", img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
    { id:11, name:"Polo T-Shirt",         category:"men",         tags:["sale"],       price:999,  originalPrice:1399, color:"blue",  img:"https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80" },
    { id:12, name:"Pleated Midi Skirt",   category:"women",       tags:["sale"],       price:1599, originalPrice:2199, color:"green", img:"https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&q=80" },
    { id:13, name:"Straw Hat",            category:"accessories", tags:[],             price:699,  originalPrice:null, color:"white", img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=400&q=80" },
    { id:14, name:"Bomber Jacket",        category:"men",         tags:["new"],        price:3999, originalPrice:null, color:"green", img:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80" },
    { id:15, name:"Ribbed Crop Top",      category:"women",       tags:["new","sale"], price:799,  originalPrice:1199, color:"red",   img:"https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&q=80" },
    { id:16, name:"Minimalist Watch",     category:"accessories", tags:[],             price:4999, originalPrice:null, color:"black", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
    { id:17, name:"Cargo Pants",          category:"men",         tags:["sale"],       price:1699, originalPrice:2299, color:"green", img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
    { id:18, name:"Knit Cardigan",        category:"women",       tags:[],             price:2499, originalPrice:null, color:"blue",  img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80" },
  ];

  /* ── 2. STATE ── */
  let state = {
    search:   "",
    category: "all",
    tagSale:  false,
    tagNew:   false,
    maxPrice: 5000,
    color:    null,
    sort:     "default",
  };

  /* ── 3. RENDER ── */
  function renderProducts() {
    let list = [...PRODUCTS];

    // Search
    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category
    if (state.category !== "all") {
      list = list.filter(p => p.category === state.category);
    }

    // Tags
    if (state.tagSale) list = list.filter(p => p.tags.includes("sale"));
    if (state.tagNew)  list = list.filter(p => p.tags.includes("new"));

    // Max Price
    list = list.filter(p => p.price <= state.maxPrice);

    // Colour
    if (state.color) list = list.filter(p => p.color === state.color);

    // Sort
    if (state.sort === "price-asc")  list.sort((a,b) => a.price - b.price);
    if (state.sort === "price-desc") list.sort((a,b) => b.price - a.price);
    if (state.sort === "name-asc")   list.sort((a,b) => a.name.localeCompare(b.name));

    // Build HTML
    const grid = document.getElementById("products-grid");
    document.getElementById("visible-count").textContent = list.length;
    document.getElementById("total-count").textContent   = PRODUCTS.length;

    if (list.length === 0) {
      grid.innerHTML = `<div class="no-results">😕 No products match your filters.<br><small>Try adjusting your search or filters.</small></div>`;
      return;
    }

    grid.innerHTML = list.map(p => {
      const badgeHTML = p.tags.includes("sale")
        ? `<span class="product-card-badge badge-sale">Sale</span>`
        : p.tags.includes("new")
          ? `<span class="product-card-badge badge-new">New</span>`
          : "";

      const priceHTML = p.originalPrice
        ? `<span class="price-sale">₹${p.price.toLocaleString()}</span>
           <span class="price-original">₹${p.originalPrice.toLocaleString()}</span>`
        : `₹${p.price.toLocaleString()}`;

      return `
        <div class="product-card">
          ${badgeHTML}
          <div class="product-card-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
          </div>
          <div class="product-card-info">
            <div class="product-card-name">${p.name}</div>
            <div class="product-card-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
            <div class="product-card-price">${priceHTML}</div>
          </div>
        </div>`;
    }).join("");
  }

  /* ── 4. WIRE UP CONTROLS ── */
  document.addEventListener("DOMContentLoaded", () => {

    // Sidebar search
    document.getElementById("search-input").addEventListener("input", e => {
      state.search = e.target.value;
      renderProducts();
    });

    // Navbar search mirrors sidebar
    const navSearch = document.getElementById("navbar-search-input");
    if (navSearch) {
      navSearch.addEventListener("input", e => {
        state.search = e.target.value;
        document.getElementById("search-input").value = e.target.value;
        renderProducts();
      });
    }

    // Category radio
    document.querySelectorAll('input[name="category"]').forEach(radio => {
      radio.addEventListener("change", e => {
        state.category = e.target.value;
        renderProducts();
      });
    });

    // Tag checkboxes
    document.getElementById("tag-sale").addEventListener("change", e => {
      state.tagSale = e.target.checked;
      renderProducts();
    });
    document.getElementById("tag-new").addEventListener("change", e => {
      state.tagNew = e.target.checked;
      renderProducts();
    });

    // Price range
    const priceRange = document.getElementById("price-range");
    const priceLabel = document.getElementById("price-label");
    priceRange.addEventListener("input", e => {
      state.maxPrice = Number(e.target.value);
      priceLabel.textContent = Number(e.target.value).toLocaleString();
      renderProducts();
    });

    // Sort
    document.getElementById("sort-select").addEventListener("change", e => {
      state.sort = e.target.value;
      renderProducts();
    });

    // Colour swatches — click to toggle
    document.querySelectorAll(".color-swatch").forEach(swatch => {
      swatch.addEventListener("click", () => {
        const chosen = swatch.dataset.color;
        if (state.color === chosen) {
          // Deselect
          state.color = null;
          document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
        } else {
          state.color = chosen;
          document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
          swatch.classList.add("active");
        }
        renderProducts();
      });
    });

    // Reset button
    document.getElementById("reset-btn").addEventListener("click", () => {
      state = { search:"", category:"all", tagSale:false, tagNew:false, maxPrice:5000, color:null, sort:"default" };

      document.getElementById("search-input").value = "";
      if (navSearch) navSearch.value = "";
      document.querySelector('input[name="category"][value="all"]').checked = true;
      document.getElementById("tag-sale").checked = false;
      document.getElementById("tag-new").checked  = false;
      document.getElementById("price-range").value = 5000;
      document.getElementById("price-label").textContent = "5,000";
      document.getElementById("sort-select").value = "default";
      document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));

      renderProducts();
    });

    // Mobile side-navbar toggle
    const toggle  = document.getElementById("menu-toggle");
    const sideNav = document.getElementById("side-navbar");
    if (toggle && sideNav) {
      toggle.addEventListener("click", () => {
        sideNav.style.marginLeft = sideNav.style.marginLeft === "0px" ? "-60%" : "0px";
      });
    }

    // Initial render
    renderProducts();
  });

  //Contacts

   // Side navbar toggle
    const toggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-navbar');
    if (toggle && sideNav) {
      toggle.addEventListener('click', () => {
        sideNav.style.marginLeft = sideNav.style.marginLeft === '0px' ? '-60%' : '0px';
      });
    }

    // Contact form submit
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      });
    }