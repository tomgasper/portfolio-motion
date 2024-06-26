
import React from "react";

const projects = [
    {
    id:'animdu',
    title:'Animdu Brand Film',
    desc:'Exploring a new approach to animation',
    thumbnail:'./img/animdu/thumbnail2.jpg',
    template: 0,
    text:'Together with BluBlu Studios & Explainer.se we created an animated video explaining how Woshapp works.',
    text2:'Illustrations/Creative Direction/Concept/Sound design- BluBlu Studios & Explainer.se',
    vidThumbnail:"./img/animdu/animdu_3.mp4",
    vid:[],
    img:['./img/woshapp/gif1.gif', './img/woshapp/gif2.gif', './img/woshapp/gif3.gif'],
    },
    {
    id:'reel',
    title:'Reel',
    desc:'Collection of work from previous years',
    thumbnail:'./img/reel/thumbnail2.gif',
    vidThumbnail:"./img/reel/thumbnail.mp4",
    template: 1,
    text:'Quick overview of my work from previous years',
    text2:'',
    vid:['https://player.vimeo.com/video/944442197'],
    img:[]
    },
    // {
    // id:'talentnetwork',
    // title:'Talent Network Explainer',
    // thumbnail:'./img/tn/thumbnail.png',
    // text:'Animation created for a company that provides freelancers with opportunities to work for leading management consulting firms.',
    // text2:'Production/Design/Animation: Tom Gasper',
    // vid:['https://player.vimeo.com/video/380451230'],
    // img:['./img/tn/img3.jpg', './img/tn/img2.jpg', './img/tn/img1.jpg',]
    // },
    {
    id:'catastrophizing',
    title:'Truist - Catastrophizing',
    desc:'Helping employees navigate workplace stress',
    thumbnail:'./img/cat/thumbnail.png',
    template: 0,
    text:(<span>Client: Archetype UK<br/>Art Direction/Animation: Tom Gasper</span>),
    text2:(<span>Tailored for Truist bank, this motion design film serves as a supportive resource for employees grappling with workplace stress. Despite facing tight deadlines, the video effectively communicates its intended message, earning client satisfaction.<br/><br/>Leading the project from inception to completion,<br/>I was responsible for every stage, from storyboarding, through artwork design to animation.</span>),
    vid:['https://player.vimeo.com/video/915089940'],
    img:['./img/cat/img3.png', './img/cat/img6.png', './img/cat/img4.png', './img/cat/img1.png','./img/cat/img2.png']
    },
    {
    id:'spring',
    title:'Spring',
    desc:'Experimental motion design work',
    thumbnail:'./img/spring/thumbnail2.jpg',
    template: 1,
    text:'Experimental motion design work',
    text2:'',
    vid:['https://player.vimeo.com/video/340640923'],
    img:["./img/spring/img1.jpg","./img/spring/img2.png","./img/spring/img3.jpg","./img/spring/img4.jpg"]
    },
    {
    id:'mixedparts',
    title:'Mixed Parts entry',
    thumbnail:'./img/bizzare/thumbnail2.jpg',
    template:1,
    desc:'Short but playful piece',
    text:(<span>Short and playful gif created for a mixed.parts(motion design board)<br/>animation contest.</span>),
    text2:'',
    vid:['https://player.vimeo.com/video/316840574', 'https://player.vimeo.com/video/382451381'],
    img:[],
    isSquare: true
    },
    {
    id:'pwcsmart',
    title:'PwC - SmartCredentials',
    desc:'A walkthrough of the PwC blockchain platform',
    thumbnail:'./img/pwc/thumbnail4.jpg',
    template:1,
    text:(<span>Production/Script: Casual Films<br/> Animation/Design/Storyboard: Tom Gasper</span>),
    text2:(<span> I directed the creation of an animation explaining the workings of PwC's distributed ledger platform, leading the project from initial design development to the delivery of the final product.</span>),
    vid:['https://player.vimeo.com/video/333590364'],
    img:['./img/pwc/img1.png','./img/pwc/img2.png', './img/pwc/img3.png']
    },  
    {
    id:'mtvrewind',
    title:'MTV - Rewind',
    thumbnail:'./img/mtv/thumbnail2.jpg',
    template: 1,
    desc:'Promotional TV spot',
    text:'Production: MTV Europe in-house team',
    text2:'Illustration - MaryLou Faure Animation - Keeley Sheppard, Tom Gasper, Amy Shields, Lydia Haworth, Kelly Peters',
    vid:['https://player.vimeo.com/video/333590706'],
    img:[]
    },  
    {
    id:'illustrations',
    title:'Illustrations',
    desc:'Collection of personal illustrations and short animations',
    vidThumbnail:"./img/ill/thumbnail.mp4",
    thumbnail:'./img/ill/thumbnail2.gif',
    template:1,
    text:'Collection of personal illustrations',
    text2:'',
    vid:[],
    img:['./img/ill/gif1.gif', './img/ill/img2.jpg', './img/ill/img3.jpg', './img/ill/gif4.gif', './img/ill/gif5.gif', './img/ill/img6.jpg', './img/ill/gif7.gif', ]
    },
    {
    title:'Akamai - Image Manager',
    id:'akamai',
    thumbnail:'./img/akamai/thumbnail2.jpg',
    desc: 'Showcase of an image management tool created by Akamai',
    template:1,
    text:"Animated video for one of the world's largest distributed computing platforms services",
    text2:'',
    vid:'https://player.vimeo.com/video/316832028',
    img:[]
    }
]

export default projects;