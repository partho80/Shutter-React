import React from 'react'

function ContactBody() {
  return (
      <div>
            <section id="post" className="section">
    <div className="container">
      <div className="section-top mx-auto">
        <h3 className="section-top-title">Stay In Touch</h3>
      </div>
      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-4 single-card">
          <div className="card text-center">
            <div className="card-body">
              <p className="contact-icon"><i className="fas fa-phone-alt"></i></p>
              <h5 className="card-title">Phone</h5>
              <p className="card-text">+00 12345678</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 single-card">
          <div className="card text-center">
            <div className="card-body">
              <p className="contact-icon"><i className="fas fa-envelope"></i></p>
              <h5 className="card-title">Email</h5>
              <p className="card-text">admin@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 single-card">
          <div className="card text-center">
            <div className="card-body">
              <p className="contact-icon"><i className="fas fa-globe"></i></p>
              <h5 className="card-title">Web</h5>
              <p className="card-text">admindomain.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 single-card">
          <div className="card text-center">
            <div className="card-body">
              <p className="contact-icon"><i className="fas fa-map-marker-alt"></i></p>
              <h5 className="card-title">Address</h5>
              <p className="card-text">Mirpur DOHS, Dhaka-1215</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-top mx-auto">
            <h3 className="section-top-title">Leave a Comment</h3>
          </div>
          <div className="post-section">
            <form className="post-form contact-form" method="post" action="php/mail.php" id="cf">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="sub-input" placeholder="Subject"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" id="msg" name="msg" rows="7"
                      placeholder="Write your comment..."></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" id="submit" name="submit" className="cf-btn btn btn-custom btn-fill">Submit</button>
              <div className="cf-msg"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Post Section End -->

  <!-- Google Map Start --> */}
  <section id="googleMap">
    <div className="goggle-map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
        allowfullscreen="" loading="lazy"></iframe>
    </div>
  </section>
  {/* <!-- Google Map End -->

  <!-- FAQ Section Start --> */}
  <section id="faq" className="section no-pad-top">
              <div className="faq-section" style={{ backgroundImage: "url('assets/img/faq-bg.jpg')",padding: "100px 0" }}>
      <div className="container">
        <div className="row">
          <div className="faq-wrapper col-md-8 offset-md-4">
            <div className="faq-top mb-5">
              <h2>Frequently asked questions</h2>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi obcaecati
                commodi quibusdam officiis, corporis nemo debitis nisi ex? Placeat illo reiciendis laborum. Fugiat,
                vel.
              </p>
            </div>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                      Free shipping?
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                    craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                    VHS.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                      href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How long does shipping take?
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                    craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                    VHS.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                      href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      price and payment
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                    craft
                    beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                    VHS.
                  </div>
                </div>
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

export default ContactBody