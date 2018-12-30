import React, { Component } from 'react';
import '../App.css';



import background from '../images/background.png';
import logo from '../images/logo3.png';
import logo_black from '../images/logo3_black.png';
import slogan from '../images/slogan.png';
import avatar from '../images/avatar.png';

import { Button,Divider,Card, Icon, Avatar,Timeline } from 'antd';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


const { Meta } = Card;

const INTRO = "Welcome to Yuhao's personal website, a platform to display Yuhao's projects.";

const project_intro = {
	ichongclub: {
		name:'ichongclub.com',
		duration: 'Sep,2015 ~ March, 2016',
		intro:' An e-shop website which sold pet products... ',
	},
	wp: {
		name:'wisepepper',
		duration: 'July,2017 ~ Current',
		intro:' An information management system designed for growing peppers.',
	},
	inforest: {
		name:'inforest',
		duration: 'Dec,2018 ~ Current',
		intro:' A system which is designed for helping managers and emplyees of planting companies.',
	}

}


const COPYRIGHT = 'copyright ©2018 cuostudio.com'

const Primary_Color = '#3d5397'

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

const Title = () => {
	return(
		<div style={{
			position:'relative',
			height:750,
		}}>
			<img src={background} style={{
				width:'100%',
				height:'100%',
				position:'absolute',
				left:0,
				top:0
			}}/>
			<img src={slogan} style={{
				width:500,
				position:'relative',
				marginTop:300
			}}/>
			<img src={logo} style={{
				width:50,
				position:'fixed',
				top:25,
				right:25,
				cursor:'pointer',

			}}/>
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

const Intro = () => {
	return(
		<div style={{
			position:'relative',
			paddingTop:150,
			marginBottom:150,
			paddingLeft:'10%',
			paddingRight:'10%',
			height:650,
		}}>
			<Divider style={{
				fontSize:35,
				fontWeight:'normal',
			}}>INTRODUCTION</Divider>

			<p style={{
				width:'100%',
				paddingTop:50,
				color:'#666',
				marginBottom:100,
				textAlign:'center',
				fontFamily:'Times New Roman',
				fontSize:16
			}}>{INTRO}</p>

			<Card
			    style={{ marginLeft:150, width: 300, cursor:'pointer', float:'left' }}
			  >
			    <Meta
			      avatar={<Avatar size={64} src={avatar}/>}
			      title="Yuhao Cai"
			      description="Hungry & Humble"
			    />
			    <Divider />
				    <div>
				    	<p style={{color:'#aaa'}}>Age: <span style={{color:'#333'}}>23</span></p>
				    	<p style={{color:'#aaa'}}>Status: <span style={{color:'#333'}}>Graduate Student</span></p>
				    	<p style={{color:'#aaa'}}>Major: <span style={{color:'#333'}}>Project Management</span></p>
				    	<p style={{color:'#aaa'}}>Skill: <span style={{color:'#333'}}>Website Development</span></p>
				    	<p style={{color:'#aaa'}}>Expertise: <span style={{color:'#333'}}>Solving Problems</span></p>
				    </div>
			 </Card>

			 <Timeline pending="Continuing..." style={{ marginRight:150, width: 450,float:'right' }} mode="left">
			    <Timeline.Item style={{textAlign:'left'}} color='green'> [2013-09-01] A undergraduate student majored in Internet of Things Engineering in UESTC</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} color='green'> [2014-09-13] A member of Syslab Studio as a front-end web developer</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} color='green'> [2015-2-17] The leader of Syslab Studio</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} color='green'> [2015-5-12] One of the co-founders of Keyframes Ltd.</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} color='green'> [2015-9-5] The leader of a three-persons team which developes ichongclub.com</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}> [2017-6-29] The leader and the manager of the development team of the Wisepepper project</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}> [2018-9-17] A graduate student majored in Project Management in Northeastern University</Timeline.Item>
			    <Timeline.Item style={{textAlign:'left'}} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}> [2018-12-26] The leader and the manager of the development team of the Inforest project</Timeline.Item>
			    
			    </Timeline>

		</div>
	);
}



const Projects = () => {
	return(
		// This is going to be display window with several dots as menu
		<div style={{
			position:'relative',
			width:'100%',
			paddingTop:150,
			marginBottom:150,
			paddingLeft:'15%',
			paddingRight:'15%',

		}}>
			<Divider style={{
				fontSize:35,
				fontWeight:'normal',
				marginBottom:50,
				width:'70%',
			}}>PROJECTS</Divider>
			<div style={{
				textAlign:'center',
				height:300,
				width:960,
				margin:'0 auto',
			}}>
				<Card
				    style={{ margin:10,float:'left', width: 300,cursor:'pointer', }}
				    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
	    			actions={[<Icon type="meh" />, <Icon type="link" />, <Icon type="ellipsis" />]}
				  >
				    <Meta
				      title={project_intro.ichongclub.name}
				      description={project_intro.ichongclub.duration}
				    />
				 </Card>
				 <Card
				    style={{ margin:10,float:'left', width: 300, cursor:'pointer', }}
				    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
	    			actions={[<Icon type="smile" />, <Icon type="link" />, <Icon type="ellipsis" />]}
				  >
				    <Meta
				      title={project_intro.wp.name}
				      description={project_intro.wp.duration}
				    />
				 </Card>
				 <Card
				    style={{ margin:10,float:'left', width: 300, cursor:'pointer', }}
				    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
	    			actions={[<Icon type="smile" />, <Icon type="link" />, <Icon type="ellipsis" />]}
				  >
				    <Meta
				      title={project_intro.inforest.name}
				      description={project_intro.inforest.duration}
				    />
				 </Card>
			 </div>
		</div>
	);
}


const Videos = () => {
	return(
		// This is going to be a Album Photos and Links to my Youtube & Bilibili chanel.
		<div style={{
			position:'relative',
			width:'100%',
			background:'rgb(230,230,230)',
		}}>
			<Video autoPlay loop muted
	            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
	            poster="http://sourceposter.jpg"
	            onCanPlayThrough={() => {
	                // Do stuff
	            }}>
	            <source src="http://sourcefile.webm" type="video/webm" />
	            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
	        </Video>
		</div>
	);
}

const Footer = () => {
	return(
		<div style={{
			position:'relative',
			width:'100%',
			background:'#3d5397',
			textAlign:'center',
			height:100,
			paddingTop:30,
		}}>
			<p style={{
				color:"#fff",
				fontSize:14,
			}}>{COPYRIGHT} <Divider type="vertical"/> <Icon type="github" /> <Divider type="vertical"/><Icon type="twitter" /><Divider type="vertical"/><Icon type="weibo" /><Divider type="vertical"/><Icon type="linkedin" /></p>
		</div>
	);
}

