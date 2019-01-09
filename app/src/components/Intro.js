import React, { Component } from 'react';
import '../App.css';

import { Divider,Card, Avatar,Timeline } from 'antd';
import { Spring, } from 'react-spring';

import ScrollAnim from 'rc-scroll-anim';
import avatar from '../images/avatar.png';


const ScrollParallax = ScrollAnim.Parallax;

const INTRO = "Welcome to Yuhao's personal website, a platform to display Yuhao's projects.";
const { Meta } = Card;

const timeline = {
	a:'[2013-09-01] Become a undergraduate student majored in Internet of Things Engineering in UESTC',
	b:'[2014-09-13] Join the Syslab Studio as a front-end web developer',
	c:'[2015-2-17] Be appointed as the leader of Syslab Studio',
	d:'[2015-5-12] Co-found Key Frame Technology Co., Ltd.',
	e:'[2015-9-5] Start to develope ichongclub.com',
	f:'[2017-6-29] Join the Internet Security and Application Lab',
	g:'[2018-9-17] Become a graduate student majored in Project Management in Northeastern University',
	h:'[2018-12-26] Be invited into the Inforest project',

}

export default class Intro extends Component{
	render(){


		return(
			<div style={{
				position:'relative',
				paddingTop:150,
				marginBottom:150,
				paddingLeft:'10%',
				paddingRight:'10%',
				height:700,
			}}>
				<ScrollParallax
		          animation={{ opacity: 1 }}
		          always={true}
		          style={{ 
		          	width:'100%',
					paddingTop:0,
					opacity: 0,
				}}>
					<Divider style={{
						fontSize:35,
						fontWeight:'normal',
						marginBottom:50,
					}}>INTRODUCTION</Divider>
				</ScrollParallax>
				<ScrollParallax
		          animation={{ opacity: 1 }}
		          always={true}
		          style={{ 
		          	width:'100%',
					paddingTop:0,
					opacity: 0,
				}}>
		          <p style={{ 
		          	width:'100%',
					paddingTop:0,
					color:'#666',
					marginBottom:100,
					textAlign:'center',
					fontFamily:'Times New Roman',
					fontSize:16,
					}}>{INTRO}</p>
		        </ScrollParallax>

		        <ScrollParallax
		          animation={{ opacity: 1 }}
		          always={true}
		          style={{ 
		          	width:'100%',
					paddingTop:0,
					opacity: 0,
				}}>
					<Window />
				</ScrollParallax>

				<ScrollParallax
		          animation={{ opacity: 1 }}
		          always={true}
		          style={{ 
		          	width:'100%',
					paddingTop:0,
					opacity: 0,
				}}>

					<Timeline pending="Continuing..." style={{ marginRight:150, width: 450,float:'right' }} mode="left">
					    <h3 style={{textAlign:'left',color:'#666',marginBottom:20,}}>My Timeline</h3>
					    <Item text={timeline.a}/>
					    <Item text={timeline.b}/>
					    <Item text={timeline.c}/>
					    <Item text={timeline.d}/>
					    <Item text={timeline.e}/>
					    <Item text={timeline.f}/>
					    <Item text={timeline.g}/>
					    <Item text={timeline.h}/>
					</Timeline>
				</ScrollParallax>

			</div>
		);
	}

}

class Item extends Component {
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
			<Spring
				from={{
					textAlign:'left',
					cursor:'pointer',
					color:'#999'
				}}
			    to={{
			    	color: toggle ?'#333':'#999',
			    }}
			>
			  {props => (
				<Timeline.Item 
					style={props} 
					onMouseOver={this.toggle.bind(this)}
  					onMouseOut={this.toggle.bind(this)}
  					color='green'> 
  					{this.props.text}
				</Timeline.Item>

			  )}
			</Spring>
		);
	}
}

class Window extends Component {
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
			<Spring
				from={{
					marginLeft:150, width: 300, cursor:'pointer', float:'left',
					borderColor: '#ccc',
				}}
			    to={{
			    	boxShadow: toggle ?'0px 0px 5px #333':'0px 0px 5px #fff',
			    }}
			>
			  {props => (
			    <Card
				    style={props}
				    onMouseOver={this.toggle.bind(this)}
  					onMouseOut={this.toggle.bind(this)}
				  >
				    <Meta
				      avatar={<Avatar size={64} src={avatar}/>}
				      title="Yuhao Cai"
				      description="Hungry & Humble"
				    />
				    <Divider />
					    <div>
					    	<p style={{color:'#aaa'}}>Age: <span style={{color:'#333'}}>23</span></p>
					    	<p style={{color:'#aaa'}}>Email: <span style={{color:'#333'}}>isyuhao.cai@gmail.com</span></p>
					    	<p style={{color:'#aaa'}}>Location: <span style={{color:'#333'}}>Seattle, Washington</span></p>
					    	<p style={{color:'#aaa'}}>Hometown: <span style={{color:'#333'}}>Mianyang, Sichuan</span></p>
					    	<p style={{color:'#aaa'}}>Status: <span style={{color:'#333'}}>Graduate Student</span></p>
					    	<p style={{color:'#aaa'}}>Major: <span style={{color:'#333'}}>Project Management</span></p>
					    	<p style={{color:'#aaa'}}>Skill: <span style={{color:'#333'}}>Website Development</span></p>
					    	<p style={{color:'#aaa'}}>Expertise: <span style={{color:'#333'}}>Solving Problems</span></p>
					    </div>
				 </Card>
			  )}
			</Spring>
		);
	}
}
