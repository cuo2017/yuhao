import React, { Component } from 'react';
import '../App.css';



import { Divider, Icon } from 'antd';

import Title from './Title';
import Intro from './Intro';
import Projects from './Projects';

import Parallax from 'react-springy-parallax';

const COPYRIGHT = 'copyright ©2018 cuostudio.com'

// const Primary_Color = '#3d5397'


export default class Application extends Component {
  render() {
    return (
      <div className="App">
      	<Title />
    	<Intro />
    	<Projects />
    	<Footer />
      </div>
    );
  }
}

export class Applications extends Component {
  render() {
    return (
      <div className="App">
      <Parallax ref="parallax" pages={3} style={{backgroundColor:'#3d5397'}}>
      	<Title />
      	<Parallax.Layer offset={0} speed={.5} style={{ backgroundColor: '#fff' }}>
        	<Intro />
        </Parallax.Layer>
        <Parallax.Layer offset={1} speed={.5} style={{ backgroundColor: '#fff' }}>
        	<Projects />
        </Parallax.Layer>
        <Parallax.Layer offset={2} speed={.5} style={{ backgroundColor: '#fff' }}>
        	<Footer />
        </Parallax.Layer>
       </Parallax>
      </div>
    );
  }
}



const Footer = () => {
	return(
		<div 
		style={{
			position:'relative',
			width:'100%',
			background:'#3d5397',
			textAlign:'center',
			height:100,
			paddingTop:35,
		}}>
			<p style={{
				color:"#fff",
				fontSize:14,
			}}>{COPYRIGHT} <Divider type="vertical"/> <Icon type="github" /> <Divider type="vertical"/><Icon type="twitter" /><Divider type="vertical"/><Icon type="weibo" /><Divider type="vertical"/><Icon type="linkedin" /></p>
		</div>
	);
}

