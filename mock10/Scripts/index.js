let form=document.querySelector("form");

let ls=localStorage.getItem("movie-list");
let movie_list=ls ? JSON.parse(ls):[]

form.addEventListener("submit",(e)=>{
 e.preventDefault();
   let moviename=document.getElementById("name").value;
   let mainactor=document.getElementById("mainActor").value;
   let movie_descripation=document.getElementById("desc").value;
   let date=document.getElementById("release").value;
   let movie_select=document.querySelector("#category").value
   let price=document.getElementById("price").value;
   let object={moviename,mainactor,movie_descripation,date,movie_select,price}
//   console.log(book_list)
  console.log(object)
  movie_list.push(object);

   localStorage.setItem("movie-list",JSON.stringify((movie_list)));
   location.reload();

 


})