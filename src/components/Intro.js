import React, {Component} from 'react'
import '../css/Intro.css'
import Butterfly from '../images/butterfly.jpg'

class Intro extends Component {

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-6'> 		
						<h3 className='intro'>
							<span className="badge badge-danger">About</span> <span className="border rounded border-secondary p-1">Me</span>
						</h3>
						<p className="intro-des">I'm Mobarok Hossain Rubel. Full Stack developer, i like to code, and this is my porftfolio site,</p>
					 </div>
					<div className='col-md-6'>
						<div className="text-center"> 
						<img src={Butterfly} alt="Developer" className="rounded introPic"></img>
						</div>
					</div>
				</div>
			</div>
			)
		

	}
}

export default Intro;