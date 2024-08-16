let moviesContainer = document.getElementById("movies-displayer")
var MovieName = document.getElementById("movie-name");
var Loader = document.getElementById("status");

 function load(){
    event.preventDefault();
    moviesContainer.innerHTML = ""
    Loader.innerHTML = "<img src='https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?fit=880%2C440&ssl=1'>"
   let xhttp =  new XMLHttpRequest();
   xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
        Loader.innerHTML = ""
        let result = JSON.parse(this.responseText);
        console.log(result);
        if( result.Response == "True" ){
         let movies =  result.Search;
         movies.map( (val,i) => {
            moviesContainer.innerHTML += `<div>
            <img src= ${val.Poster}/>
            <p> <i> <b> Name :  </b> </i> ${val.Title} </p>
            <p> <i> <b> Year : </b> </i> ${val.Year}  </p>
            <p> <i> <b> Type : </b> </i> ${val.Type}  </p>
            </div>`
         } )
        }else{
            Loader.innerText =`No Results for ${MovieName.value}`
        }
    }
   }
   xhttp.open( "GET" , `https://www.omdbapi.com/?apikey=45f0782a&s=${MovieName.value}`  , true );
   xhttp.send();
} 
