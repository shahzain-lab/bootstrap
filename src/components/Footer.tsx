import React from 'react';


export const Footer =()=> {
    return(
        <footer className="footersection "id="footerid">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 footerdiv text-uppercase text-white">
              <h3>about our team</h3>
              <li>Our Company have 5 year expereince</li>
              <li> in digital marketing and also</li>
              <li> everyday deal with high Qualifier people.</li>
              <li>We support our team with bonus packages.</li>
              
            </div>
            <div className="col-lg-4 col-md-6 col-12 footerdiv text-center text-uppercase">
              <h3>navigation links</h3>
              <li><a href="">Home</a></li>
              <li><a href="">services</a></li>
              <li><a href="">about</a></li>
              <li><a href="">prices</a></li>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footerdiv text-uppercase">
              <h3>news letter</h3>
              <p>If you have any doubt please email us and also subscribe our newsletter for daily updates

              </p>
              <div className="container mainsub">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control news" placeholder="Your Email" />
                      <div className="input-group-append">
                        <span className="input-group-text">Subscribe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="text-center mt-5 text-uppercase">
            <p>copyright &copy; all right reserved.Created by Shahzain</p>
          </div>
           </div>
      </footer>
      

    )
}
