document.getElementById("filter").onchange=function(){
 localStorage.setItem("select",document.getElementById("filter").value)
 location.reload();
}

let ls=localStorage.getItem("movie-list");
let movie_list=ls ? JSON.parse(ls):[]
let movie_count=document.getElementById("movie-count").innerHTML=movie_list.length
 if(localStorage.getItem("select")){
    
    // document.getElementById("filter").options[localStorage.getItem("select")]
    let a=localStorage.getItem("select")

      document.getElementById("filter").value=a

      
      movie_list.map((data,index)=>{
       if(a===data.movie_select){
        document.querySelector("tbody").innerHTML+=`
        <tr>
        <td>
        ${data.moviename}
        </td>
        <td>
        ${data.mainactor}
        </td>
        <td>
        ${data.movie_descripation}
        </td>
        <td>
        ${data.date}
        </td>
        <td>
        ${data.movie_select}
        </td>
        <td>
        ${data.price}
        </td>
        <td id="last_td">
         buy
        </td>
       
        </tr>
        `
       }
      
     })


    
 }else{
  
    // console.log(book_list)
   
    //  let filter=document.getElementById("filter").value
    
    
       movie_list.map((data,index)=>{
     
        document.querySelector("tbody").innerHTML+=`
        <tr>
        <td>
        ${data.moviename}
        </td>
        <td>
        ${data.mainactor}
        </td>
        <td>
        ${data.movie_descripation}
        </td>
        <td>
        ${data.date}
        </td>
        <td>
        ${data.movie_select}
        </td>
        <td>
        ${data.price}
        </td>
        <td id="last_td" onclick="add_movie(${index})">
         buy
        </td>
       
        </tr>
        `
     })
     
     
     
    
 }

  function add_movie(index){
    let element=movie_list[index]
    console.log("yes")
    
let ls=localStorage.getItem("buy-list");
let buy_list=ls ? JSON.parse(ls):[]
    buy_list.push(element)

   let a=movie_list.filter((r,i)=>{
     return i!==index
   })
   localStorage.setItem("movie-list",JSON.stringify((a)));
   localStorage.setItem("buy-list",JSON.stringify((buy_list)));
   location.reload();
  }