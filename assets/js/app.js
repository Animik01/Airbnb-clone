"use strict";

//main-container data rendering functionality
const main_container=document.querySelector("#main-content");

let all_data="";

//fetch data from data.json file
fetch('./assets/js/data.json')
.then(response=>response.json())
.then(datas=>{
    // console.log(data);
    //data are all array of objects that returns
    //now for each array of object one parent div created
    datas.forEach(data=>{
        // console.log(data);
        all_data+=`<div class="parent">
        <div
          class="child1"
          style="
            background-image: url(${data.child1_bg_image});
          "
        >
          <i class="fa-regular fa-heart love" style="color: #ffffff"></i>
        </div>
        <div class="child2">
          <p><b>${data.child2_location}</b></p>
          <p>${data.child2_place}</p>
          <p>${data.child2_date}</p>
          <p><b>₹${data.child2_price}</b> per night</p>
        </div>
      </div>`;
    });
    
    //inserting all fetched data to main container
    main_container.innerHTML=all_data;
   
});

