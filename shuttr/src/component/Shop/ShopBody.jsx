import React from 'react'

function ShopBody() {
  return (
      <div>
        <section id="shop-page" className="section">
    <div className="container">
      <div className="row">
        {/* <!-- shop-sidebar Start --> */}
        <div className="col-lg-4 col-md-12 mb-5 shop-sidebar-wrapper">
          <div className="product-search mb-5">
            <label>Product Search</label>
            <input type="text" placeholder="Search..."/><span><i className="fas fa-search"></i></span>
          </div>

        

          {/* <!-- filter start --> */}
          <div className="filter-by-price mb-4">
            <div className="price-range-block">

              <div className="sliderText">Filter By Pricing</div>

              <div id="slider-range" className="price-filter-range"></div>

              <div className="filter-box-wrapper">
                <div className="filter-text">
                  <p>Filter</p>
                </div>
                <div className="filter-input">
                  <input type="number" min="0" max="9900" onInput="validity.valid||(value='0');" id="min_price"
                    className="price-range-field" />
                  <input type="number" min="0" max="10000" onInput="validity.valid||(value='10000');" id="max_price"
                    className="price-range-field" />
                </div>
              </div>

              <a href="#" className="btn btn-custom btn-fill btn-black btn-block" id="price-range-submit">Search</a>

              <div id="searchResults" className="search-results-block"></div>

            </div>
          </div>
          
          {/* <!-- filter end -->

          <!-- Category Section Start --> */}
          <div className="categories-wrapper mb-5">
            <h3 className="sidebar-title mb-4">Categories</h3>
            <ul className="categories-collection">
              <li><a href="#">Belted chino trousers polo <span>(20)</span> </a></li>
              <li><a href="#">Denim Light Ripped <span>(15)</span> </a></li>
              <li><a href="#">Mashmallow Top <span>(17)</span> </a></li>
              <li><a href="#">Necklace Set <span>(10)</span> </a></li>
              <li><a href="#">Bangles <span>(13)</span> </a></li>
              <li><a href="#">Bridal Sets <span>(18)</span> </a></li>
            </ul>
          </div>

          
          {/* <!-- Category Section End -->

          <!-- Color Section Start --> */}
          <div className="categories-wrapper mb-5">
            <h3 className="sidebar-title mb-4">Color</h3>
            <ul className="color-collection">
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>
              <li><a href="#" className="color-choice"></a></li>

            </ul>
          </div>

          
          {/* <!-- Color Section End -->

          <!-- Color Section Start --> */}
          <div className="size-wrapper mb-5">
            <h3 className="sidebar-title mb-4">Size</h3>
            <ul className="size-collection">
              <li><a href="#" className="size-choice">S</a></li>
              <li><a href="#" className="size-choice">M</a></li>
              <li><a href="#" className="size-choice">L</a></li>
              <li><a href="#" className="size-choice">XL</a></li>
              <li><a href="#" className="size-choice">XXL</a></li>
            </ul>
          </div>

          
          {/* <!-- Color Section End -->

          <!-- Tags Section Start --> */}
          <div className="tags-wrapper mb-5">
            <h3 className="sidebar-title mb-4">Tags</h3>
            <ul className="tags-collection">
              <li><a href="#" className="tags-choice">Shirt</a></li>
              <li><a href="#" className="tags-choice">Trouser</a></li>
              <li><a href="#" className="tags-choice">Polo</a></li>
              <li><a href="#" className="tags-choice">Maroon</a></li>
              <li><a href="#" className="tags-choice">Eather</a></li>
              <li><a href="#" className="tags-choice">Magenta</a></li>
              <li><a href="#" className="tags-choice">Fashion</a></li>
            </ul>
          </div>

          
          {/* <!-- Tags Section End -->


          <!-- Image Start --> */}
          <div className="sidebar-img-wrapper">
            <div className="sidebar-img">
              <img src="assets/img/sidebar-img.jpg" alt=""/>
            </div>
            <div className="sidebar-img-hover">
              <div className="savings-content text-center">
                <p className="text-custom">save 30%</p>
                <h1 className="saving-title">women</h1>
                <a href="shop.html" className="btn btn-custom btn-custom-white">shop now</a>
              </div>
            </div>
          </div>
          {/* <!-- Image End --> */}


        </div>
        {/* <!-- shop-sidebar End -->

        <!-- Shop-Product Start --> */}
        <div className="col-lg-8 col-md-12 shop-right-side-wrapper">
          <section id="shop">
            <div className="shop-section">
              <div className="shop-top">
                <div className="row">
                  <div className="col-lg-8 col-md-9">
                    <div className="product-select-wrapper">
                      <div className="product-sort">
                        <div className="form-group sorting-wrapper">
                          <label for="product-sorting" className="mr-3">Sort by</label>
                          <select className="form-control" id="product-sorting">
                            <option value="New">New</option>
                            <option value="Low to high">Low to high</option>
                            <option value="High to low">High to low</option>
                          </select>
                        </div>
                      </div>

                      <div className="product-show">
                        <div className="form-group show-wrapper">
                          <label for="product-sorting" className="mr-3">Show</label>
                          <select className="form-control" id="product-showing">
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="grid-icon-wrapper">
                      <a href="#" className="grid-icon without-sidebar"><i className="fas fa-th"></i></a>
                      <a href="#" className="grid-icon with-sidebar active"><i className="fas fa-border-all"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-1.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price">
                        <p className="regular-price">$350.00</p>
                        <p className="offer-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-2.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-3.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-4.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-5.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-6.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-7.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-8.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-product">
                  <div className="sp-box">
                    <div className="spb-thumb">
                      <a href="shop-inner.html" className="sp-thumbnail-url">
                        <img src="assets/img/products/product-9.jpg" alt=""/>
                      </a>
                      <p className="discount-rat">-20%</p>
                      <div className="single-prod-icon">
                        <a href="#" className="addtowishlist">
                          <p className="wishlist"><i className="far fa-heart"></i></p>
                        </a>
                        <a href="shop-inner.html">
                          <p className="eye"><i className="fas fa-eye"></i></p>
                        </a>
                      </div>
                      <button className="btn btn-block add-to-cart"><span><i className="fas fa-shopping-bag"></i></span>add to
                        cart</button>
                    </div>

                    <div className="single-prod-bottom mt-3">
                      <a href="#" className="product-title">Belted chino trousers polo</a>
                      <div className="product-price-fixed mt-1">
                        <p className="fixed-price">$320.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Shop-Product End --> */}
      </div>
    </div>
  </section>  
    </div>
  )
}

export default ShopBody