import React from 'react'

function BlogBody() {
  return (
      <div>
          <section id="blog" className="section">
    <div className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="product-search blog-top-search mb-5">
              <label>Blog Search</label>
              <input type="text" placeholder="Search..."/><span><i className="fas fa-search"></i></span>
            </div>
            <div className="blog-wrapper">
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-1.jpg" alt=""/>
                </div>
                <div className="bc-comment d-flex mt-3">
                  <a href="#" className="text-custom mr-4"><span><i className="fas fa-user"></i></span>Elex Janto </a>
                  <p className="text-custom mr-4"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" className="text-custom"><span><i className="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div className="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" className="read-more-btn mt-3">read more <span><i
                      className="fas fa-arrow-right"></i></span></a>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-2.jpg" alt=""/>
                </div>
                <div className="bc-comment d-flex mt-3">
                  <a href="#" className="text-custom mr-4"><span><i className="fas fa-user"></i></span>Elex Janto </a>
                  <p className="text-custom mr-4"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" className="text-custom"><span><i className="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div className="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" className="read-more-btn mt-3">read more <span><i
                      className="fas fa-arrow-right"></i></span></a>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-3.jpg" alt=""/>
                </div>
                <div className="bc-comment d-flex mt-3">
                  <a href="#" className="text-custom mr-4"><span><i className="fas fa-user"></i></span>Elex Janto </a>
                  <p className="text-custom mr-4"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" className="text-custom"><span><i className="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div className="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" className="read-more-btn mt-3">read more <span><i
                      className="fas fa-arrow-right"></i></span></a>
              </div>
              <div className="single-blog mb-5">
                <div className="blog-img">
                  <img src="assets/img/blog-4.jpg" alt=""/>
                </div>
                <div className="bc-comment d-flex mt-3">
                  <a href="#" className="text-custom mr-4"><span><i className="fas fa-user"></i></span>Elex Janto </a>
                  <p className="text-custom mr-4"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" className="text-custom"><span><i className="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div className="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" className="read-more-btn mt-3">read more <span><i
                      className="fas fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            {/* <!-- Search Start --> */}
            <div className="product-search blog-bottom-search mb-5">
              <label>Blog Search</label>
              <input type="text" placeholder="Search..."/><span><i className="fas fa-search"></i></span>
            </div>
            
            {/* <!-- Search End -->

            <!-- Recent Post Start --> */}
            <div className="recent-post-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Recent Post</h3>
              <ul className="recent-post-collection">
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-1.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <a href="blog-details.html" className="rp-title">Design how it work</a>
                    <p className=""><span><i className="fas fa-calendar-week"></i></span> 14 May 2022</p>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-2.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <a href="blog-details.html" className="rp-title">Many of the best UI?</a>
                    <p className=""><span><i className="fas fa-calendar-week"></i></span> 25 Dec 2022</p>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-4.jpg" alt="" className="rp-sm-img mr-3"/>
                  <div className="rp-text d-inline-block">
                    <a href="blog-details.html" className="rp-title">User Experience Role</a>
                    <p className=""><span><i className="fas fa-calendar-week"></i></span> 03 Sep 2022</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* <!-- Recent Post End -->

            <!-- Category Section Start --> */}
            <div className="categories-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Categories</h3>
              <ul className="categories-collection">
                <li><a href="#">Minimal <span>(20)</span> </a></li>
                <li><a href="#">User Experience <span>(15)</span> </a></li>
                <li><a href="#">Web Design <span>(17)</span> </a></li>
                <li><a href="#">Motion Design <span>(10)</span> </a></li>
                <li><a href="#">Inspiration <span>(13)</span> </a></li>
                <li><a href="#">Trendy <span>(18)</span> </a></li>
              </ul>
            </div>
            
            {/* <!-- Category Section End -->


            <!-- Tags Section Start --> */}
            <div className="tags-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Tags</h3>
              <ul className="tags-collection blog-tag-colloection">
                <li><a href="#" className="tags-choice">Design</a></li>
                <li><a href="#" className="tags-choice">Minimal</a></li>
                <li><a href="#" className="tags-choice">Art Design</a></li>
                <li><a href="#" className="tags-choice">Typography </a></li>
                <li><a href="#" className="tags-choice">Colorful</a></li>
                <li><a href="#" className="tags-choice">Development</a></li>
                <li><a href="#" className="tags-choice">Native Apps</a></li>
              </ul>
            </div>
            
            {/* <!-- Tags Section End -->

            <!-- Social Section Start --> */}
            <div className="categories-wrapper mb-5">
              <h3 className="sidebar-title mb-4">Follow Us</h3>
              <ul className="footer-social social-collection">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            {/* <!-- Social Section End --> */}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Pagination Section Start --> */}
  <div className="pagination-section">
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item d-none"><a className="page-link" href="#"><span><i className="fas fa-arrow-left"></i></span>
              Previous</a></li>
          <li className="page-item"><a className="page-link active" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next <span><i className="fas fa-arrow-right"></i></span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default BlogBody