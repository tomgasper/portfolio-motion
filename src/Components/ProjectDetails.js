import React from "react";

const projectsDetails = [
    {
        id:'animdu',
        title:'Brand Film',
        client: 'Animdu',
        desc:'Animdu is a new animation app that allows users to create animation in a new way - using nodes. This approach allows for better reuse of already created animations and is very intuitive and easy to use.',
        role: 'Creative Direction/Design/Animation',
        text:['Together with BluBlu Studios & Explainer.se we created an animated video explaining how Woshapp works.',
        'The video mixes abstract smooth animation with product demo. This way the viewer seamlessly can get a good idea of what Animdu brings to the table.'
        ],
        media: ["./img/animdu/proj/img1.png", "./img/animdu/proj/img2.png", "./img/animdu/proj/img3.png","./img/animdu/proj/img4.png","./img/animdu/proj/img5.png","./img/animdu/proj/img6.png" ],
        vidUrl: "https://player.vimeo.com/video/486008220",
    },
    {
        id:'reel',
        title:'Reel',
        client: 'Various clients',
        desc:'Animdu is a new animation app that allows users to create animation in a new way - using nodes. This approach allows for better reuse of already created animations and is very intuitive and easy to use.',
        role: 'Creative Direction/Design/Animation',
        text:['Together with BluBlu Studios & Explainer.se we created an animated video explaining how Woshapp works.',
        'The video mixes abstract smooth animation with product demo. This way the viewer seamlessly can get a good idea of what Animdu brings to the table.'
        ],
        media: ["./img/animdu/proj/img1.png", "./img/animdu/proj/img2.png", "./img/animdu/proj/img3.png","./img/animdu/proj/img4.png","./img/animdu/proj/img5.png","./img/animdu/proj/img6.png" ],
        vidUrl: "https://player.vimeo.com/video/486008220",
        templateOptions: {
            showGrid: false,
            showText0: false,
            showText1: false,
            showEndImg: false
        }
    },
    {
        id:'catastrophizing',
        title:'Catastrophizing',
        client:'Truist',
        agency: 'Agency: Archetype UK',
        role: 'Creative Direction/Design/Animation',
        desc:'Some description. Some text saying why this project was so great etc. More description and more and more. Description once again. You see I’m describing my process.',
        text:(['Some description. Some text saying why this project was so great etc. More description and more and more. Description once again. You see I’m describing my process.']),
        media:['./img/cat/img3.png', './img/cat/img6.png', './img/cat/img4.png', './img/cat/img1.png','./img/cat/img2.png'],
        vidUrl:'https://player.vimeo.com/video/915089940',
    },

];

export default projectsDetails;