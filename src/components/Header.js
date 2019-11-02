import React, {Component} from 'react'
import '../css/Header.css'
import Mobarok from '../images/mobarok.jpg'

class Header extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Mobarok} alt="Developer" className="rounded ppControl"></img>
                        </div> {/* col-md-8 */}
                        <div className="col-md-9"> 
                            <h2 className="">
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Hello">Hello</span>
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Ohe">ওহে</span>
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Marhabaan">مرحبا</span>
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Privet">Привет</span>
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Namaste">नमस्ते</span>
                                <span className="badge badge-warning mr-1" data-toggle="tooltip" data-placement="bottom" title="Bonjour">Bonjour</span>!
                            </h2>
                            <hr className="my-4"></hr>
                            <h3 className="display-4">Mobarok Hossain Rubel</h3>
                            <span className="lead">-Full Stack Developer / Engineer </span>
                        </div> {/* col-md-4 */}
                    </div> {/* row */}
                </div>{/* jumbotron */}
            </div>
        )
    }
}
export default Header