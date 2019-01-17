import React, { Component } from 'react';
import '../App.css';

import { Spring } from 'react-spring';
import ichongclub from '../images/ichongclub.png';
import wisepepper from '../images/wisepepper.png';

import { Divider,Card, Icon, } from 'antd';
import ScrollAnim from 'rc-scroll-anim';


const ScrollParallax = ScrollAnim.Parallax;
const { Meta } = Card;
const INTRO_PROJECTS = "Here list projects I've been through.";

const project_intro = {
	ichongclub: {
		name:'ichongclub',
		duration: 'Sep 2015 - March 2016',
		intro:' An e-shop website which sold pet products... ',
		src:ichongclub,
	},
	wp: {
		name:'wisepepper',
		duration: 'July 2017 - Present',
		intro:' An information management system designed for growing peppers.',
		src:wisepepper,
	},
	inforest: {
		name:'inforest',
		duration: 'Dec 2018 - Present',
		intro:' A system which is designed for helping planting trees.',
		src:ichongclub,
	}

}


export default class Projects extends Component{
	
	render(){
		return(
			// This is going to be display window with several dots as menu
			<div id="products" style={{
				position:'relative',
				width:'100%',
				paddingTop:150,
				marginBottom:250,
				paddingLeft:'15%',
				paddingRight:'15%',

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
						width:'70%',
					}}>PRODUCTS</Divider>
				</ScrollParallax>

				<div style={{
					textAlign:'center',
					height:300,
					width:960,
					margin:'0 auto',
				}}>

					<ScrollParallax
			          animation={{ opacity: 1,right:0 }}
			          always={true}
			          style={{ 
			          	position:'relative',
			          	width:'100%',
						paddingTop:0,
						opacity: 0,
						right:200,
					}}>
						<Item item={project_intro.ichongclub}/>
					</ScrollParallax>
					<ScrollParallax
			          animation={{ opacity: 1 }}
			          always={true}
			          style={{ 
			          	width:'100%',
						paddingTop:0,
						opacity: 0,
					}}>
						<Item item={project_intro.wp}/>
					</ScrollParallax>
					<ScrollParallax
			          animation={{ opacity: 1, left:0 }}
			          always={true}
			          style={{ 
			          	position:'relative',
			          	width:'100%',
						paddingTop:0,
						opacity: 0,
						left:200,
					}}>
						<Item item={project_intro.inforest}/>
					</ScrollParallax>
					
				 </div>
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
					margin:10,float:'left', width: 300,cursor:'pointer',
					borderColor: '#ccc',
				}}
			    to={{
			    	boxShadow: toggle ?'0px 0px 5px #333':'0px 0px 5px #fff',
			    }}
			>
			  {props => (
			    <Card
				    style={props}
				    cover={<img alt="example" src={this.props.item.src} />}
	    			actions={[<Icon type="meh" />, <Icon type="link" />, <Icon type="ellipsis" />]}
	    			onMouseOver={this.toggle.bind(this)}
  					onMouseOut={this.toggle.bind(this)}
				  >
				    <Meta
				      title={this.props.item.name}
				      description={this.props.item.duration}

				    />
				    <Divider/>
				    <p style={{color:'#666'}}>{this.props.item.intro}</p>
				 </Card>
			  )}
			</Spring>
		);
	}
}