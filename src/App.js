import React from 'react';

// Bootstrap and jQuery
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/popper.js/dist/popper.min.js'

// Component
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Skill from './components/Skill'


class App extends React.Component {
   render() {
     return (
     		<div> 
				<Header />
				<Intro />
				<Skill />
				<Footer />
     		</div>
     	);
   }
 }
export default App;