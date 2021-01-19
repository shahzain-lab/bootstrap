import React from 'react';


export const Footer =()=> {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10">
                        
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10">
                       <h2>ABOUT</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Github</li>
                            <li>Facebook</li>
                            <li>Linkden</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 text-center footer3">
                        <h3>Subscribe to get latest updates</h3>
                        <input 
                          type="text"
                          placeholder="Enter your Email"
                        />
                        <button className="btn btn-warning">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}