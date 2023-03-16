import React from 'react'

function BlogBody() {
  return (
      <div>
           <section id="blog" className="section">
    <div className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
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

                <p className="blog-details my-4">Quis risus sed vulputate odio ut enim. Nulla aliquet porttitor lacus
                  luctus
                  accumsan tortor. Risus nullam eget felis eget. Justo nec ultrices dui sapien eget mi proin sed
                  libero. Eu scelerisque felis imperdiet proin fermentum leo vel. Vivamus at augue eget arcu dictum. A
                  arcu cursus vitae congue mauris. Orci ac auctor augue mauris augue neque gravida in fermentum.
                  <br/><br/>
                  Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eget duis at tellus
                  at urna condimentum. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Orci
                  phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus imperdiet nulla malesuada
                  pellentesque elit eget gravida cum. Volutpat odio facilisis mauris sit amet massa. Pellentesque eu
                  tincidunt tortor aliquam nulla facilisi cras fermentum odio.
                </p>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <img className="bd-sm-img" src="assets/img/bd-sm-1.jpg" alt=""/>
                  </div>
                  <div className="col-md-6">
                    <img className="bd-sm-img" src="assets/img/bd-sm-2.jpg" alt=""/>
                  </div>

                  <div className="col-md-12">
                    <p className="blog-details my-4">Quis risus sed vulputate odio ut enim. Nulla aliquet porttitor
                      lacus
                      luctus
                      accumsan tortor. Risus nullam eget felis eget. Justo nec ultrices dui sapien eget mi proin sed
                      libero. Eu scelerisque felis imperdiet proin fermentum leo vel. Vivamus at augue eget arcu
                      dictum.
                      A
                      arcu cursus vitae congue mauris. Orci ac auctor augue mauris augue neque gravida in fermentum.
                    </p>
                  </div>
                </div>

                {/* <!-- Blog Share Section Start --> */}
                <div className="blog-share">
                  <h3>Share on:</h3>
                  {/* <!-- Social Section Start --> */}
                  <div className="categories-wrapper mb-5">
                    <ul className="share-collection">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                  {/* <!-- Social Section End --> */}
                </div>
                {/* <!-- Blog Share Section End -->

                <!-- About-Author Start --> */}
                <div className="about-author">
                  <img className="author-img mr-4" src="assets/img/author.jpg" alt=""/>
                  <div className="author-bio">
                    <h5>Elex Janto </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos corporis non, laborum dolore
                      voluptas.</p>
                  </div>
                </div>
                {/* <!-- About-Author End -->

                <!-- Comment Section Start --> */}
                <section id="comment" className="section">
                  <div className="bd-title mb-4">
                    <h4>Comment</h4>
                  </div>

                  {/* <hr className="mb-4"> */}
                  <div className="comment-wrapper">
                    <div className="single-comment">
                      <div className="comment-content">
                        <div className="writter-img-box mr-4">
                          <img className="writter-img" src="assets/img/author.jpg" alt=""/>
                        </div>
                        <div className="comment-box mb-4">
                          <h6>Elex Janto</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, doloremque? Ullam culpa,
                            doloribus repellat ducimus autem eum, ex sed reiciendis cupiditate error cum accusantium
                            quidem!</p>
                          <a href="#" className="read-more-btn mt-3"><span><i
                                className="fas fa-reply d-inline-block mr-2"></i></span>
                            reply</a>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-md-11 offset-md-1">
                          <div className="single-comment ml-4">
                            <div className="comment-content">
                              <div className="writter-img-box mr-4">
                                <img className="writter-img" src="assets/img/comment-writter.jpg" alt=""/>
                              </div>
                              <div className="comment-box mb-4">
                                <h6>Floyd Long</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className="read-more-btn mt-3"><span><i
                                      className="fas fa-reply d-inline-block mr-2"></i></span>
                                  reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!-- Comment Section End -->

                <!-- Post Section Start --> */}
                <section id="post" className="">
                  <div className="bd-title mb-4">
                    <h4>Post your comment</h4>
                  </div>
                  <div className="post-section">
                    <form id="post-form" className="post-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInput" placeholder="Name"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                              placeholder="Email Address"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea3" rows="7"
                              placeholder="Write your comment..."></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-custom btn-fill">Submit</button>
                    </form>
                  </div>
                </section>
                {/* <!-- Post Section End --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            {/* <!-- Search Start --> */}
            <div className="product-search mb-5">
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

    </div>
  )
}

export default BlogBody