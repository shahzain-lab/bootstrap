import React from 'react';

export const Services =()=> {
    return(
        <div className="container service text-center">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
            <div className="container serviceTag text-center  col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                 <div className="imgSet bg-warning m-auto d-block">
                 
                     <i className="fa fa-shopping-cart fa-3x"></i>
                 </div>
                     <h3>E-commerece</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                 
            </div>
            <div className="container serviceTag col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                 <div className="imgSet bg-warning m-auto d-block">
                 
                     <i className="fa fa-desktop fa-3x"></i>
                 </div>
                     <h3>Responsive Design</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                 
            </div>
            <div className="container serviceTag col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                 <div className="imgSet bg-warning m-auto d-block">
                 
                     <i className="fa fa-lock fa-3x"></i>
                 </div>
                     <h3>Web Security</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                 
            </div>
        </div>
        </div>
    )
}