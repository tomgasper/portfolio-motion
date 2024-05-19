import React from "react";

const projectsDetails = [
    {
        id:'animdu',
        title:'Brand Film',
        client: 'Animdu',
        desc:'Animdu is a new animation app that bring a different way to create animations - using nodes instead of keyframes. This method makes it easy to reuse already created animations and is very intuitive and simple to use.',
        role: 'Creative Direction/Design/Animation',
        text:["With this video, we wanted to introduce Animdu and demonstrate potential user interactions with the app, as it's still in development and hasn't launched yet. Our objective was to create a video that clearly communicates what Animdu is to both investors and early users.",
        'In terms of style, we settled on abstract shapes, subtle gradients and dark background to give the video a slick, modern feel. By blending abstract, smooth animations with product demos, viewers can seamlessly get a good idea of exciting new capabilities that Animdu brings to the table.'
        ],
        media: ["./img/animdu/proj/img1.png", "./img/animdu/proj/img2.png", "./img/animdu/proj/img3.png","./img/animdu/proj/img4.png","./img/animdu/proj/img5.png","./img/animdu/proj/img6.png" ],
        vidUrl: "https://player.vimeo.com/video/944442197",
    },
    {
        id:'reel',
        title:'Reel',
        client: 'Various clients',
        role: 'Various roles',
        desc:'Collection of some of my work from previous years all put in one short video.',
        text:[],
        media: ["./img/animdu/proj/img1.png", "./img/animdu/proj/img2.png", "./img/animdu/proj/img3.png","./img/animdu/proj/img4.png","./img/animdu/proj/img5.png","./img/animdu/proj/img6.png" ],
        vidUrl: "https://player.vimeo.com/video/486008220",
        templateOptions: {
            showGrid: false,
            gridThreeImgs: false,
            showText0: false,
            showText1: false,
            showVid: true,
            showEndImg: false,
            isEndOneImg: false,
            isEndMoreImg: false
        }
    },
    {
        id:'catastrophizing',
        title:'Catastrophizing',
        client:'Truist',
        agency: 'Agency: Archetype UK',
        role: 'Creative Direction/Design/Animation',
        desc:"Tailored for Truist bank, this animation acts as a valuable resource for employees navigating workplace stress. It explores the concept of 'catastrophizing' attitude and offers practical strategies for managing it.",
        text:(["Through the use of an animated character, the film outlines the primary triggers of catastrophizing, followed by practical strategies for handling them. This approach allows viewers to easily connect with the scenarios presented and apply the advice to their own lives.", 'The animation maintains a calm pace, prioritizing the narration. By breaking the animation into several logical sections, viewers can easily follow the guidance offered in the film.']),
        media:[
            './img/cat/img10.jpg',
            './img/cat/img1.jpg',
            './img/cat/img8.jpg',
            './img/cat/img4.jpg',
            './img/cat/img7.jpg',
            './img/cat/img6.jpg'],
        vidUrl:'https://player.vimeo.com/video/915089940',
    },
    {
        id:'mixedparts',
        title:'Mixed Parts entry',
        client: 'Personal',
        role: 'Design/Animation',
        desc:'Short and playful snippet created for a mixed.parts (motion design board) animation contest. The goal was to just have fun and play around with animation paths.',
        text:['Together with BluBlu Studios & Explainer.se we created an animated video explaining how Woshapp works.',
        'A lot of smooth animation paths went into making this short piece. Check the process video below.'
        ],
        media: ["", "", "", "", "./img/bizzare/gif1.gif", ],
        vidUrl: "https://player.vimeo.com/video/316840574",
        templateOptions: {
            showGrid: false,
            gridThreeImgs: false,
            showText0: false,
            showText1: true,
            showVid: true,
            showEndImg: true,
            isEndOneImg: true,
            isEndMoreImg: false
        }
    },
    {
        id:'spring',
        title:'Spring',
        client: 'Personal',
        role: 'Design/Animation',
        desc:'Short passion project created to experiment with basic flat shapes and fluid animation',
        text:['Together with BluBlu Studios & Explainer.se we created an animated video explaining how Woshapp works.',
        'A lot of smooth animation paths went into making this short piece. Check the process video below.'
        ],
        media: [
        "./img/spring/img1.jpg",
        "./img/spring/img4.jpg",
        "./img/spring/img3.jpg",
        "./img/spring/img5.jpg"
    ],
        vidUrl: "https://player.vimeo.com/video/340640923",
        templateOptions: {
            showGrid: true,
            gridThreeImgs: false,
            showText0: false,
            showText1: false,
            showVid: true,
            showEndImg: false,
            isEndOneImg: true,
            isEndMoreImg: false
        }
    },
    {
        id:'pwcsmart',
        title:'SmartCredentials',
        client: 'PwC',
        agency: 'Casual UK',
        role: 'Storyboard/Design/Animation',
        desc:'Smart Credential is a blockain platform created by PwC, which allows credentials to be issued, carried, and shared globally in real-time. The animation walks the viewer through the Smart Credential platform.',
        text:['In this video, we follow Kyle on his journey to take control of his data. Using a variety of animated characters and minimalist yet vibrant illustrations, the video seamlessly showcases the new Smart Credentials platform.'
        ],
        media: [
        "./img/pwc/img5.jpg",
        "./img/pwc/img3.jpg",
        "./img/pwc/img2.jpg",
        "",
        "./img/pwc/img1.jpg",
    ],
        vidUrl: "https://player.vimeo.com/video/333590364",
        templateOptions: {
            showGrid: true,
            gridThreeImgs: true,
            showText0: true,
            showText1: false,
            showVid: true,
            showEndImg: true,
            isEndOneImg: true,
            isEndMoreImg: false
        }
    },
    {
        id:'mtvrewind',
        title:'Rewind',
        client: 'MTV',
        role: (<span>Illustration: MaryLou Faure <br /> Animation: Keeley Sheppard, Tom Gasper, Amy Shields, Lydia Haworth, Kelly Peters</span>),
        agency: '',
        desc:'A promotional spot for the MTV Rewind series that aired nationwide in the UK.',
        text:['In this video, we follow Kyle on his journey to take control of his data. Using a variety of animated characters and minimalist yet vibrant illustrations, the video seamlessly showcases the new Smart Credentials platform.'
        ],
        media: [
        "./img/mtv/img1.jpg",
        "./img/mtv/img5.jpg",
        "./img/mtv/img3.jpg",
        "./img/mtv/img2.jpg",
    ],
        vidUrl: "https://player.vimeo.com/video/333590706",
        templateOptions: {
            showGrid: true,
            gridThreeImgs: false,
            showText0: false,
            showText1: false,
            showVid: true,
            showEndImg: true,
            isEndOneImg: false,
            isEndMoreImg: false
        }
    },

    {
        id:'illustrations',
        title:'Illustrations',
        client: 'Personal',
        role: 'Design/Animation',
        desc:'Collection of personal illustrations and short animations',
        text:['In this video, we follow Kyle on his journey to take control of his data. Using a variety of animated characters and minimalist yet vibrant illustrations, the video seamlessly showcases the new Smart Credentials platform.'
        ],
        media: [
        "./img/ill/img6.jpg",
        "./img/ill/gif7.gif",
        "./img/ill/gif5.gif",
        "./img/ill/img3.jpg",
        "./img/ill/gif1.gif",
        "./img/ill/img2.jpg",
        "./img/ill/gif4.gif",
    ],
        templateOptions: {
            showGrid: true,
            gridThreeImgs: false,
            showText0: false,
            showText1: false,
            showVid: false,
            showEndImg: true,
            isEndOneImg: false,
            isEndMoreImg: true
        }
    },
    {
        id:'akamai',
        title:'Image Manager',
        client: 'Akamai',
        role: 'Animation',
        desc:'The video combines colorful abstract shapes with subtle textures to give the whole video energetic and playful appearance, keeping the viewer engaged for the whole time.',
        text:[],
        media: [
        "./img/akamai/img2.jpg",
        "./img/akamai/img4.jpg",
        "./img/akamai/img1.jpg",
    ],
    vidUrl: "https://player.vimeo.com/video/812368418",
        templateOptions: {
            showGrid: true,
            gridThreeImgs: true,
            showText0: false,
            showText1: true,
            showVid: true,
            showEndImg: false,
            isEndOneImg: false,
            isEndMoreImg: false
        }
    },
    

];

export default projectsDetails;