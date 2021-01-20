import React from 'react';
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';

export const Team =()=> {
    return(
        <div className="team bg-light">
            <div className="container text-center">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="row teamrow">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={team1} alt="" className="figure-img img-fluid rounded-circle" height="200px"width="200px"/>
                            <figcaption>
                                <h4>Kay Garland</h4>
                                <p className="figure-caption">Lead Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={team2} alt="" className="figure-img img-fluid rounded-circle" height="250px"width="250px"/>
                            <figcaption>
                                <h4>John Doe</h4>
                                <p className="figure-caption">CEO</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
                        <figure className="figure">
                            <img src={team3} alt="" className="figure-img img-fluid rounded-circle" height="250px"width="250px"/>
                            <figcaption>
                                <h4>Smith </h4>
                                <p className="figure-caption">Share Holder</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}