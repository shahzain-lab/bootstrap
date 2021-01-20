import React from 'react';


export const Team =()=> {
    return(
        <div className="team bg-light">
            <div className="container text-center">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={} alt="" className="figure-img img-fluid rounded-circle" height="250px"width="250px"/>
                            <figcaption>
                                <h4>Kay Garland</h4>
                                <p className="figure-caption">Lead Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={} alt="" className="figure-img img-fluid rounded-circle" height="250px"width="250px"/>
                            <figcaption>
                                <h4>Kay Garland</h4>
                                <p className="figure-caption">Lead Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={} alt="" className="figure-img img-fluid rounded-circle" height="250px"width="250px"/>
                            <figcaption>
                                <h4>Kay Garland</h4>
                                <p className="figure-caption">Lead Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}