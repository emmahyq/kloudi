@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

/* basics */

html,body {
-webkit-font-smoothing:antialiased;
-webkit-text-size-adjust:100%;
background-color:#d48ca1;
color:#fff;
font-size:1rem;
font-family:"Roboto Mono", arial, sans-serif;
font-weight:400;
letter-spacing:.025rem;
line-height:1.618;
padding:1rem 0;
}

*,::before,::after {
box-sizing:border-box;
}

* {
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
-webkit-tap-highlight-color:transparent;
}



.container { position:relative; margin:0 auto; max-width:800px; width:100%; }
.column { width:inherit; }


/* fonts and colors */

p { color:#fff; display:block; font-size:.9rem; font-weight:400; margin:0 0 2px; }

a,a:visited { color:#d48ca1; outline:0; text-decoration:underline; }
a:hover,a:focus { color:#bbdef5; }
p a,p a:visited { line-height:inherit; }


/* margins */

.add-bottom { margin-bottom:2rem !important; }
.left { float:left; }
.right { float:right; }
.center { text-align:center; }
.hidden { display:none; }

.no-support {
margin:2rem auto;
text-align:center;
width:90%;
}


/* audio player styling */

audio {
display:none;
}

#audiowrap,
#plwrap {
margin:0 auto;
}

#tracks {
font-size:0;
position:relative;
text-align:center;
}

#nowPlay {
display:block;
font-size:0;
}

#nowPlay span {
display:inline-block;
font-size:1.05rem;
vertical-align:top;
}

#nowPlay span#npAction {
padding:21px;
width:30%;
}

#nowPlay span#npTitle {
padding:21px;
text-align:right;
width:70%;
}

#plList {
    padding: 0 !important;
}

#plList li {
cursor:pointer;
display:block;
margin:0;
padding:21px 0;
    border-radius: 50px;
}

#plList li:hover {
background-color:rgba(0, 0, 0, .05);
    transition: 200ms all;
}

.plItem {
position:relative;
}

.plTitle {
left:50px;
overflow:hidden;
position:absolute;
right:65px;
text-overflow:ellipsis;
top:0;
white-space:nowrap;
}

.plNum {
padding-left:21px;
width:25px;
}

.plLength {
padding-left:21px;
position:absolute;
right:21px;
top:0;
}

.plSel,
.plSel:hover {
background-color:rgba(0, 0, 0, .08);
color:#fff;
cursor:default !important;
}

#tracks a {
border-radius:3px;
color:#fff;
cursor:pointer;
display:inline-block;
font-size:2.3rem;
height:40px;
line-height:.2;
margin:0 5px 30px;
padding:12px;
text-decoration:none;
transition:background .3s ease;
}

#tracks a:hover,
#tracks a:active {
background-color:rgba(0, 0, 0, .1);
color:#fff;
}

#tracks a::-moz-focus-inner {
border:0;
padding:0;
}


/* plyr variables */

.plyr--audio .plyr__controls {
background-color:transparent;
border:none;
color:#fff;
font-family:"Roboto Mono", arial, sans-serif;
padding:20px 20px 20px 20px;
width:100%;
}

a.plyr__controls__item.plyr__control:hover,
.plyr--audio .plyr__controls button:hover,
.plyr--audio .plyr__controls button.tab-focus:focus,
.plyr__play-large {
background-color:rgba(0, 0, 0, 0.05);
    border-radius: 50px;
}

.plyr__progress--played,
.plyr__volume--display {
color:rgba(150, 81, 102, 0.05);
}

.plyr--audio .plyr__progress--buffer,
.plyr--audio .plyr__volume--display {
background-color:rgba(150, 81, 102, .6);
}

.plyr--audio .plyr__progress--buffer {
color:rgba(150, 81, 102, .2);
}

.plyr--full-ui input[type="range"] {
width:calc(100% - 39px);
    color: #A94C77;
}

.plyr__controls .plyr__controls__item.plyr__time {
font-size:14px;
margin-left:7px;
}

/* custom scrollbar */

/* width */
::-webkit-scrollbar {
  width: 12px;
}


/* track */
::-webkit-scrollbar-track {
  background: #c67189;
  border-radius: 10px;
}
 
/* handle */
::-webkit-scrollbar-thumb {
  background: #A94C77; 
  border-radius: 10px;
}

/* handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #95466b; 
}


/* media for semi-responsiveness */

@media only screen and (max-width:600px) {
    #nowPlay span#npAction { display:none; }
    #nowPlay span#npTitle { display:block; text-align:center; width:100%; }
}