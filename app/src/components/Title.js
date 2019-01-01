import React, { Component } from 'react';
import '../App.css';
import { Spring, Transition,  animated, config } from 'react-spring';

import background from '../images/background.png';
import logo from '../images/logo3.png';
import logo_black from '../images/logo3_black.png';
import logo2_black from '../images/logo2_black.svg';
import slogan from '../images/slogan.png';

import { Button,Divider,Card, Icon, Avatar,Timeline } from 'antd';

import ScrollAnim from 'rc-scroll-anim';

const ScrollParallax = ScrollAnim.Parallax;

export default class Title extends Component {
	constructor(props){
		super(props);
		this.state={
			toggle: false
		}
		
	}
	toggle = () => this.setState(state => ({ toggle: !state.toggle }))
	render(){
		const toggle = this.state.toggle;
		return(
			<div style={{
				position:'relative',
				height:750,
				cursor:'pointer'
			}}>
				<img src={background} style={{
					width:'100%',
					height:'100%',
					position:'absolute',
					left:0,
					top:0
				}}/>


				<img name="test1" src={slogan} style={{
						width:500,
						position:'relative',
						marginTop:300,
						cursor:'pointer',
				}}/>

				<Spring
					from={{
						width:50,
						position:'absolute',
						top:25,
						right:25,
						cursor:'pointer',
						zIndex:1,
					}}
				    to={{
				    	transform: toggle ? 'rotate(0deg)':'rotate(360deg)',
				    }}
				>
				  {props => (
				    <img src={logo} 
					onMouseEnter={this.toggle.bind(this)}
		  			onMouseOut={this.toggle.bind(this)}
					style={props}/>
				  )}
				</Spring>

				<p style={{
					width:'100%',
					position:'relative',
					top:250,
					textAlign:'center',
					color:'#fff',
					fontWeight:'normal',
					fontSize:30
				}}>
				</p>
			</div>

		
		);
	}	
}