import React from 'react';
import portfolio1 from '../img/portfolio1.jpg';
import portfolio2 from '../img/portfolio2.jpg';
import portfolio3 from '../img/portfolio3.jpg';
import portfolio4 from '../img/portfolio4.jpg';
import portfolio5 from '../img/portfolio5.jpg';
import portfolio6 from '../img/portfolio6.jpg';

export const Portfolio =()=> {
    return(
        <div className="portfolio bg-light">
        <div className="container text-center">
           <h2>Portfolio</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <div className="row">
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio1} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Thread</h2>
                         <p className="card-text">illustration</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio2} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Explore</h2>
                         <p className="card-text">Graphic Design</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio3} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Finish</h2>
                         <p className="card-text">Identity</p>
                     </div>
                 </div>
             </div>
           </div>
           <div className="row">
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio6} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Brand</h2>
                         <p className="card-text">Simplicity</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio5} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Develop</h2>
                         <p className="card-text">Web Developing</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio4} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Photography</h2>
                         <p className="card-text">Photographer and Designer</p>
                     </div>
                 </div>
             </div>
           </div>
        </div>
        </div>
    )
}