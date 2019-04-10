@media screen and (max-width: 1050px){


    .header{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.logo{
    width: 70px;
    margin:5px;
}
.nav{
    color: white;
    width:80%;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    align-items: center;
}

.power{
    width: 50px;
}
.item{
    color: white;
    font-size: 3vw;
/*  font-family: 'Sriracha', cursive;*/
    font-family: Segoe Print;
    text-decoration: none;
}

.questioncontent{
    display: flex;
    justify-content: center;
    margin-top: 10%;
}
.xunbaodiv{
    margin-right: 50px;
    margin-bottom: 10px;
    background: black;
    align-items: center;
    margin-left: 0px;
    opacity: 0.7;
    border: 1px solid #0BD5FF;
    padding: 2px;
    border-radius: 2px;
    transition: all .2s ease-in-out;
    margin-top: 20%;


}
.goto{
        /* position: relative; */
    z-index: 1000;
    /* top: 0%; */
    /* left: 30%; */
    color: white;
    font-size: 20px;
    padding-: 0%;
    margin-top: 2%;
    margin-bottom: -55%;
    font-family: 'Iceberg', cursive;
}
.xunbao{
    position: relative;
    z-index: -10;
    width:150px;
    margin-top: 100px;
}
.xunbaodiv:hover { 
    transform: scale(1.1);
    cursor: pointer; 
}
.rules{
    width: 100%;
    color: white;
    font-size: 25px;
    font-family: 'Iceberg', cursive;
    text-align: center;
    margin-top: -20px;
    margin-bottom: -50px;

}

.quesbox{
    background-color: black;
    align-self: center;
    opacity: 0.7;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 0px;
    height: auto;
    border:1px solid #0BD5FF;
    border-radius: 2px;
    align-self: center;
}

.quesbox2{
    width: 90%;
    align-self: center;
}
.ques{
    color:#0BD5FF;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1.2px;
    font-family: 'Iceberg', cursive;
    text-align: justify;

}


.sticker{
    position: relative;
    z-index: -10;
    width: 150px;
    margin: 10px;
}

.task{
    color: white;
    position: relative;
    text-align: center;
    width: 50%;
    z-index: 10;
    background-color: black;
    margin-top: -70%;
    margin-bottom: 20%;

}
.status{
    color: white;
    text-align: center;
    position: relative;
    margin-bottom: 0%;
    width: 80%;
    z-index: 10;
    background-color: black;
}

.hacked{
    position: relative;
    z-index: 100;
    color: white;
    font-size: 30px;
    margin-top: -40%;
    transform: rotate(-45deg);
}

.leaderboard{
    width:90%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    opacity: 0.8;
    overflow-y: scroll;
    overflow-x: hidden;
}
.leaderheader{
    position: sticky;
    top: 0%;
    left: 0%;
    background: #0F2228;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
    align-items: center;
}

.headeritems{
    color: white;
    font-size: 19px;
    margin-left: 20px;
    margin-right:20px;
    padding: 0px;
    vertical-align: baseline;
    font-family:  Segoe Print;
}

.leader{
    background: #0F2228;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15%;
    align-items: center;
    margin-top: 2px;
    margin-bottom: 2px;

}

.leaderitem{
    color: white;
    font-size: 15px;
    margin-left: 30px;
    margin-right:30px;
    padding: 0px;
    vertical-align: baseline;
    font-family:  Segoe Print;

}

.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    text-align: center;
    margin-left: 5%;
}


.hackon{
     color: white;
     font-size:100px;
     font-family: 'Iceberg', cursive;
     margin-bottom: -10px;
     margin-top: -10px;
     letter-spacing: 30px;

}
.sponsor{
     color: white;
     font-size: 20px;
     margin-bottom: -10px;
     font-family: 'Arvo', serif;


}
.para{
    color:white;
    font-size: 25px;
    text-align: justify;
    font-family: 'Arvo', serif;

}


.tboddy2{
    height: 70vh;
    width: 90%;
    margin-left: 5%;
    overflow-y: scroll;
    display: block; 
    opacity: 0.75;
}
table {
    color: white;
    font-family: 'Arvo', serif;
    border-collapse: separate;
    width: 100%;
}
th{
    position: sticky;
    top: 0%;
    left: 0%;
    height: 9vh;
    font-size: 18px;
  text-align: left;
  padding: 8px;
  background:#0F2228;


}
td {
    height: 5vh;
    font-size: 14px;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
  background-color: #296674;
}
tr:nth-child(odd) {
  background-color: #020411;
}
.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    text-align: center;
    margin-left: 20%;
}


.developers{
    width: 100%;
    text-align: center;
}

.devheading{
    font-size: 40px;
    color: white;
    font-family: 'Iceberg', cursive;
}

.photos{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin-left: 10%;

}

.profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:10px;
}
.dp{
    width: 130px;
    height: 100px;
    border:5px solid #ffffff;
    border-radius: 100px;

}
.myname{
    color: white;
    text-align: center;
    font-size: 20px;
    margin-bottom: -10px;
    font-family: Segoe Print;

}

.myskill{
    color: white;
    text-align: center;
    font-size: 16px;
    font-family: Segoe Print;

}

    

}









<div class="home">
            <p class="hackon">HACKON</p>
            <p class="sponsor">Sponsered by</p>
            <p class="para">Hack On is a prefest hacking and penetration testing event for Elements Culmyca' 18, the annual cultural and technical fest of YMCA University of Science and Technology, Faridabad.<br></br>
                Unveil the hacker in you.
            </p>
        </div>