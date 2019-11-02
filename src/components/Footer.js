import React, {Component} from 'react'
import '../css/Footer.css'
class Footer extends Component {
    render(){
        return(
            <div>
                <div className="con pt-5">
                    <h1 className="text-center footer-title">
                    <span className="badge badge-danger">Stay</span>
                    <span className="border rounded border-secondary p-1 m-1">With Me</span> 
                    </h1>
                    <div className="row m-2 pt-3">
                        <div className="col-md-4">
                            <h4>Find me on google map:</h4>
                            {/* <!-- map --> */}
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title="google_map" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=dhanmondi%2027%20block%20a&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <a href="https://usave.co.uk">usave</a>
                                </div>
                            </div>
                        </div>  {/* <!-- col-md-6 --> */}

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 ">
                                <h4>Contact:</h4>
                            <p> 
                                <span className="badge badge-danger">Email: </span>
                                <span className="address-data"> mobarokman@gmail.com </span>
                                <br></br>
                                <span className="address-data email-margin">rubelc04@gmail.com</span> 
                            </p>
                            
                            <p>
                                <span className="badge badge-danger">Mobile: </span>
                                <span className="address-data"> +8801635449686</span> 
                            </p>

                            <p>
                                <span className="badge badge-danger">Github:</span>
                                <span className="address-data"> github.com/mobarokman</span>
                            </p>

                            <p>
                                <span className="badge badge-danger">Web:</span>
                                <span className="address-data"> mobarokman.github.io</span>
                            </p>
                                </div>
                            
                                <div className="col-md-6 "> 
                                <h4>Address:</h4>
                                <p> 
                                <span className="badge badge-danger">Address: </span> 
                                <span className="address-data"> Feni, Bangladesh</span>
                            </p>

                            <p> 
                                <span className="badge badge-danger">Address2: </span> 
                                <span className="address-data"> Dhanmondi 27, Dhaka</span>
                             </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-3">
                    <h4 className="text-center text-light bg-dark mt-2 p-4">Thanks</h4>
                </div>

            </div>
        )
    }
}
export default Footer