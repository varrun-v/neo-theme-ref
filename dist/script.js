import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@600;700;800;900&display=swap");

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
}
:root {
  --blue: #0077b6;
  --white: #f8f9fa;
  --grey: #adb5bd;
  --black1:#343a40;
  --black2:#212529;
  --coquelicot: #D9BEFF;
  --purple: rgb(179,125,255);
  --yellow: rgb(255,242,155);
  --pink: #ffe2f3;
  --green: #76f7ae;
  --lightblue: #d6faff;
  --background-color: #fffbee;
  /* -------- Spacing -------- */
    --section-padding: 10px;
/* -------- Typography -------- */
--fs-1: 4rem;
--fs-2: 3rem;
--fs-3: 2.5rem;
--fs-4: 2rem;
--fs-5: 1.8rem;
--fs-6: 0.9rem;

--fw-900: 900;
--fw-800: 800;
--fw-700: 700;
--fw-500: 500;
 /* -------- Shadow -------- */

--shadow-1: 0 0 20px var(--black_10);
--shadow-2: 0px 10px 24px var(--coquelicot_20);

 /* -------- Border Radius -------- */

--radius-25: 25px;
--radius-13: 13px;
--radius-10: 10px;
--radius-15: 15px;

 /* -------- Transition -------- */

--transition-1: 0.25s ease;
--transition-2: 0.5s ease;
}
html {
  scroll-behavior: smooth;
}
.has-bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body {
/*  min-height: 100vh;
  overflow-x: hidden; */
}
.container{
  position: relative;
  width: 100%;
}

.section {
    padding-block: var(--section-padding);
    margin: 1%;
    border-radius: var(--radius-25); 
}
.bg-dark {
    background-image: linear-gradient(to right,rgb(179,125,255),rgb(255,242,155));
}


.div-container {
   padding-inline: 15px 20px;
}
.navigation{
  position: fixed;
  width: 300px;
  height: 100%;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  transition: 0.5s;
  overflow: hidden;
}
.navigation.active {
  width: 80px;
}
.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.navigation ul li:hover,
.navigation ul li.hovered {
  background: var(--white);
}
.navigation ul li:nth-child(1)
{
  margin-bottom: 40px;
  pointer-events: none;
}
.navigation ul li a {
  position: relative;
/*  display: block; */
  width: 100%;
  display: flex;
  text-decoration: none;
  color: var(--white);
}
.navigation ul li:hover a ,
.navigation ul li.hovered a
{
  color: var(--blue);
}
.navigation ul li a .icon{
  position: relative;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
   padding-left: 10px;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.55em;
}
.navigation ul li a .title{
  position: relative;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}
/* curve outside */

.navigation ul li:hover a::before,
.navigation ul li.hovered a::before 
{
  content: '';
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px var(--white);
  pointer-events: none; 
}
.navigation ul li:hover a::after,
.navigation ul li.hovered a::after 
{
  content: '';
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px -35px 0 10px var(--white);
  pointer-events: none; 
}
/* sidebar */
.sidebar {
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: var(--white);
  transition: 0.5s;
}
.sidebar.active {
  width: calc(100% - 80px);
  left: 80px;
}
.topbar{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  cursor: pointer;
}
.search {
  position: relative;
  width: 400px;
  margin: 0 10px;
}
.search label {
  position: relative;
  width: 100%;
}
.search label input 
{
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  font-size: 18px;
  outline: none;
  border: 1px solid var(--black2);
}
.search label ion-icon {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 1.2em;
}
.user {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


}
/* HERO */

.hero-content {
  position: relative;
}
.hero-subtitle {
    margin-inline: auto;
    padding: 10px;
    padding-inline-end: 15px;
    border-radius: var(--radius-10);
}
.hero-subtitle  .strong {
    display: inline-block;
    background-color: var(--coquelicot);
    padding: 2px 15px;
    margin-inline-end: 15px;
    border-radius: var(--radius-10);
}
.hero-title {
    font-size: var(--fs-1);
    margin-block: 10px 10px;
    font-weight: var(--fw-900);
}
.hero .section-text {
    margin-block-end: 40px;
    font-size: var(--fs-6);
    font-weight: var(--fw-700);
    overflow-wrap:break-word;
    position: relative;
}


/* ------------ABOUT------------- */
.personal-bests-container {
    display: grid;
    height: 300px;
    align-content: center;
    grid-template-columns: auto auto auto;
    gap: 10px;
    background-color: #8AF1FF;
    padding: 5px;
    margin-left:  1%;
    margin-right: 1%;
    border-radius: var(--radius-25);
}

.personal-bests-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 20px; 
}
.box img {
    max-width: 70px;
    display: flex;
    justify-content: flex-end;
}
.box-one {
    background-color:#FFE959;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    border-radius: var(--radius-10);
} 
.box-two {
    background-color: #76F7AE;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    border-radius: var(--radius-10);
}
.box-three {
    background-color: #FFE2F3;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-6);
    border-radius: var(--radius-10);
}
.nb-button {
  margin: 3%;
}
/* CLASSES */
.class {
    margin: 1% 1%;
    border-radius: var(--radius-25);
}

.class .section-subtitle {
    margin-inline: auto;
    text-align: center;
    font-size: var(--fs-5);
}
.class .section-title {
    color: var(--white);
    font-size: var(--fs-4);
    text-align: center;
    margin-block: 10px 10px;
    font-weight: var(--fw-900);
}
ul.class-list {
    display: flex;
}
.has-scrollbar {
    display: flex;
    gap: 25px;
    overflow-x: auto;
    padding-block-end: 30px;
    scroll-snap-type: inline mendatory;
}
.scrollbar-item {
    min-height: 50vh;
    scroll-snap-align: start;
}
.has-scrollbar::-webkit-scrollbar {
    height: 10px;
}
.has-scrollbar::-webkit-scrollbar-track,
.has-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 50px;
}
.has-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: var(--black2);
}
.has-scrollbar::-webkit-scrollbar-button {
    width: calc(25% - 25px);

}
  /* Activity */
  
  .activityBox {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 10px;
  margin-left: 1%;
  margin-right: 1%;
}
.activityBox .challenges {
  position: relative;
  display: grid;
  min-height: 100px;
  padding: 20px;
  background: var(--pink);
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: var(--radius-25); 
}
.challenges ul li {
  padding: 12px 10px;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}
.challenges ul li:hover {
  background: var(--green);
  color: var(--white);
}
.activity-feed {
  position: relative;
  display: grid;
  min-height: 100px;
  padding: 10px;
  background: var(--lightblue);
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: var(--radius-25); 
}
.activity-feed .imgBx {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.activity-feed .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  
}
.activity-feed table tr:hover {
  background: var(--green);
  color: var(--white);
}
.activity-feed table tr td {
  padding: 12px 10px;
}
.activity-feed table tr td h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}

/* responsive design */
@media (max-width: 991px){

  .navigation
  {
    left: -300px;
  }
  .navigation.active
  {
    width: 300px;
    left: 0;
  }
  .sidebar {
    width: 100%;
    left: 0;
  }
  .sidebar.active
  {
    left: 300px;
  }
}
@media (max-width: 768px) {
  
  .hero-title  {
    font-size: var(--fs-6);
    text-align:center;
  }
  .section-text {
    font-size:  var(--fs-6);
  }
  .box p{
    font-size:  var(--fs-6);
  }
  
  .activityBox {
      grid-template-columns: 1fr;
  }
  
  .challenges .activity-feed {
    overflow-x: auto;
    white-space: nowrap;
  }
}
@media (max-width: 480px) {
  .hero-title  {
    font-size: var(--fs-6);
    text-align:center;
  }
  .section-text {
    font-size: var(--fs-6);
  }
  .nb-button  {
    padding: 0;
  }
  .user {
    min-width: 40px;
  }
  .navigation
  {
    width: 100%;
    left: -100%;
    z-index: 1000;    
  }
  .navigation.active 
  {
    width: 100%;
    left: 0;
  }
  .toggle
  {
    z-index: 10001;
  }
  .sidebar.active .toggle {
    position: fixed;
    right: 0;
    left: initial;
    color: var(--white);
  }
}