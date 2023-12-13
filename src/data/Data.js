
import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Projects',
        icon : faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];


import image1 from '../../src/assets/python.png'
import image2 from '../../src/assets/react.png'
import image3 from '../../src/assets/js.png'
import image4 from '../../src/assets/cpp.png'
import image5 from '../../src/assets/unreal.png'
import image6 from '../../src/assets/blender.png'
import image7 from '../../src/assets/figma.png'
import image8 from '../../src/assets/ps.png'
import image9 from '../../src/assets/pr.png'

export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
    {
        id: 7,
        img: image7,
    },
    {
        id: 8,
        img: image8,
    },
    {
        id: 9,
        img: image9,
    },


];




import protfoliImg1 from '../../src/assets/p1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.jpg'
import protfoliImg4 from '../../src/assets/p4.jpg'
import protfoliImg5 from '../../src/assets/p5.jpg'
export const portfolio = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Battery Rush',
        des: 'A 2d platformer which has the player collect batteries.',
        github:'https://github.com/ronald0806/cop-3003-video-game',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'QR Code Creation with Python',
        des: 'Using Python to share YouTube links from a Quick Response (QR) code.',
        github:'https://github.com/ronald0806/qr_code_test',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Personal Portfolio',
        des: 'My interchangeable portfolio to describe myself, education, experience, and projects.',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg4,
        name: 'YouTube-Discord Fetch',
        des: 'A Discord bot that takes YouTube song titles and or URL and converts them to YouTube links and mp3 files.',
        github:'https://github.com/ronald0806/YouTube-Discord-Fetch-',
    },
    {
        id: 1,
        img: protfoliImg5,
        name: 'Quick Type Math',
        des: 'Complete 20 randomized math problems as quick as possible.',
        github:'https://github.com/ronald0806/quick_type_math',
    },
];