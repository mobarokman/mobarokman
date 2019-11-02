import React, {Component} from 'react'
import '../css/Skill.css'

class Skill extends Component {
    render(){
        return(
            <div>
                <div className="container mt-5">
                    <h1 className="compo-title text-center"> 
                    <span className="border rounded border-secondary p-2 mr-2">My</span> 
                     <span className="badge badge-danger">Skill</span> 
                    </h1>
                   

                    <div className="row">
                        <div className="col-md-4">
                        <h4>Framework and Liberies</h4>
                        <hr className=" bg-dark"></hr>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">Laravel</span>
                                <div className="laravel-h progress mb-3" >
                                    <div className="laravel-w progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">React</span>
                                <div className="react-h progress mb-3">
                                    <div className="react-w progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">jQuery</span>
                                <div className="jquery-h progress mb-3">
                                    <div className="jquery-w progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div> 
                        </div>{/* col-md-4  */}

                        <div className="col-md-4"> 
                        <h4>Porgramming Language</h4>
                        <hr className=" bg-dark"></hr>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">PHP</span>
                                <div className="php-h progress mb-3">
                                    <div className="php-w progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">Python</span>
                                <div className="python-h progress mb-3">
                                    <div className="python-w progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">C/C++</span>
                                <div className="ccpp-h progress mb-3">
                                    <div className="ccpp-w progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">C#</span>
                                <div className="csharp-h progress mb-3">
                                    <div className="csharp-w progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15%</div>
                                </div>
                            </div>
                        </div> {/* col-md-4  */}

                        <div className="col-md-4"> 
                        <h4>Tools</h4>
                        <hr className=" bg-dark"></hr>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">Android Studio</span>
                                <div className="android-h progress mb-3">
                                    <div className="android-w progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">Photoshop</span>
                                <div className="photoshop-h progress mb-3">
                                    <div className="photoshop-w progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                </div>
                            </div>
                            <div>
                                <span className="skill-name badge badge-danger mb-1">Git</span>
                                <div className="git-h progress mb-3">
                                    <div className="git-w progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                            </div>
                        </div> {/* col-md-4  */}
                    </div> {/* row  */}
                </div>
            </div>
        )
    }
}
export default Skill