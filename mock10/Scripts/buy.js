
let ls=localStorage.getItem("buy-list");
let buy_list=ls ? JSON.parse(ls):[]

 if(buy_list.length!==0){
    buy_list.map((data,index)=>{
      
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
       
        
         </tr>
         `
        }
       
      )
 }