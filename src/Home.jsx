import React, { useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser,faSearch, faBell} from "@fortawesome/free-solid-svg-icons";
export default function Home(){
    var [data1, settitle] = React.useState([]);
    var [image,setimage]=React.useState();
    var a=["Into-the-Woods.jpg","hello google.jpg","gas onion.jpg","morbius.jpg","matilda.jpg","spykids.jpg","RRR.jpg","double.jpg","crowd.jpg","blackcrab.jpg"];
    useEffect(()=>{
        setimage(Math.floor(Math.random()*a.length));
        getmovie("game");
    },[])
    function getmovie(type){
        setimage(Math.floor(Math.random()*a.length));
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '985794645bmsh83485706ed5228ep1b061ajsn189478f9d199',
                'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
            }
        };
        data1.map((dat)=>{
            console.log(dat);
            if(dat['image']){
                console.log(dat['image']);
                return(<img src={dat['image']} width="20%" height="300vh" id="row3" />)
            }
        })
        const url="https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query="+type;
        fetch(url,options).then((res)=>res.json()).then((data)=>{settitle(data.data)});
    }
    return(<>
        <nav class="flinks">
        <img src="logo.jpg" width="100px" height="50vh" id="icon" />
        <div class="links">
        <button type="button" onClick={()=>getmovie("game")}>Home</button>
        <button type="button" onClick={()=>getmovie("harry")}>Tv shows</button>
        <button type="button" onClick={()=>getmovie("movie")}>Movies</button>
        <button type="button" onClick={()=>getmovie("good")}>Originals</button>
        <button type="button" onClick={()=>getmovie("feature")}>Others</button>
        </div>
        <div class="bars">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBell} />
    </div>
    </nav>
    <div>
    <img id="poster" src={a[image]} width="100%" height="550vh" />
    </div> 
    <div class="tags">
        <h2 id="t1">Trending Now</h2>
        <h2 id="t2">Popular</h2>
        <h2 id="t3">Netflix originals</h2>
        <h2 id="t4">Premiers</h2>
    </div>
    { data1.map((dat)=>{
            console.log(dat);
            if(dat['image']){
                console.log(dat['image']);
                return(<img src={dat['image']} width="20%" height="300vh" id="row3" />)
            }
        })}
   
    <footer>
    <div>
    </div>
        <img src="footer.jpg" width="100%" />
    </footer>
    </>)
}