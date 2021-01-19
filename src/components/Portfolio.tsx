import React from 'react';
import portfolio1 from '../img/portfolio1.jpg'

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
                     <img src={portfolio1} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Thread</h2>
                         <p className="card-text">illustration</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio1} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Thread</h2>
                         <p className="card-text">illustration</p>
                     </div>
                 </div>
             </div>
           </div>
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
                     <img src={portfolio1} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Thread</h2>
                         <p className="card-text">illustration</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-12 d-block m-auto col-10">
                 <div className="card">
                     <img src={portfolio1} alt="" className="img-fluid card-img" />
                     <div className="card-body">
                         <h2 className="card-title">Thread</h2>
                         <p className="card-text">illustration</p>
                     </div>
                 </div>
             </div>
           </div>
        </div>
        </div>
    )
}