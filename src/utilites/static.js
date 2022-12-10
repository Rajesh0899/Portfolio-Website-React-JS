import react from './assests/react.png'
import redux from './assests/redux.png'
import Js from './assests/js.png'
import html from './assests/html.png'
import css from './assests/css-3.png'
import bootstrap from './assests/bootstrap.png'
import GIT from './assests/git.png'
import materialui from './assests/materialui.png'

import YouTube from './assests/youtubeClone.jpg'
import Portfolio from './assests/portfolio.jpg'
import SmartShopping from './assests/smartshopping.jpg'

import Rajesh from './assests/Rajesh.jpg'

export const Profile = Rajesh

export const menu = ['About', 'Projects', 'Skills']




export const projectList = [
    {title:'Smart Shopping', image:SmartShopping, url:'https://smart-shop-ping.web.app/'},
    {title:'YouTube Clone', image:YouTube, url:'https://youtube-p.netlify.app/'},
    {title:'Portfolio', image:Portfolio, url:'/'},
   
    
]




export const skillList = [
    {name:'React JS', icon:react},
    {name:'Redux', icon:redux},
   {name:'JavaScript', icon:Js},
   {name:'HTML', icon:html},
   {name:'CSS', icon:css},
   {name:'BootStrap', icon:bootstrap},
   {name:'git', icon:GIT},
   {name:'Material UI', icon:materialui}


]