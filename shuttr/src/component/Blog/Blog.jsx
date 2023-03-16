import React from 'react'

function Blog() {
  return (
      <div>
           <section id="blog">
    <div className="section-top mx-auto">
      <h3 className="section-top-title">Latest Fashion Blog</h3>
      <p className="section-top-desc">It is a long established fact that a reader will be distracted by the readable
        content
        of a page when looking at its layout.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="blog-single text-center">
            <div className="blog-img">
              <img src="assets/img/blog/blog-1.jpg" alt=""/>
            </div>
            <div className="blog-content mt-3">
              <div className="bc-comment">
                <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                <p className="text-custom tc-broder">|</p>
                <a href="#" className="text-custom"><span><i className="far fa-comments"></i></span>comment</a>
              </div>

              <div className="blog-title mt-3">
                <a href="blog-details.html">Top 10 January Best-Sellers
                  Products</a>
                <p>by : Alexz John </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="blog-single text-center">
            <div className="blog-img">
              <img src="assets/img/blog/blog-2.jpg" alt=""/>
            </div>
            <div className="blog-content mt-3">
              <div className="bc-comment">
                <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                <p className="text-custom tc-broder">|</p>
                <a href="#" className="text-custom"><span><i className="far fa-comments"></i></span>comment</a>
              </div>

              <div className="blog-title mt-3">
                <a href="blog-details.html">Top 10 January Best-Sellers
                  Products</a>
                <p>by : Alexz John </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="blog-single text-center">
            <div className="blog-img">
              <img src="assets/img/blog/blog-3.jpg" alt=""/>
            </div>
            <div className="blog-content mt-3">
              <div className="bc-comment">
                <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                <p className="text-custom tc-broder">|</p>
                <a href="#" className="text-custom"><span><i className="far fa-comments"></i></span>comment</a>
              </div>

              <div className="blog-title mt-3">
                <a href="blog-details.html">Top 10 January Best-Sellers
                  Products</a>
                <p>by : Alexz John </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Blog