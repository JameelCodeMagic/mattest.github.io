'use strict'



$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.collapsible').collapsible();
  });

  $('body').click(function(e){
    page('/', 'other.html')
    e.preventDefault();
  });

  
  renderPost();
  function renderPost(){
    $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
     console.log(data);
     var template = '';
     data.forEach(element => {
       template += ` <div class="row">
       <div class="col s12 m7">
         <div class="card">
           <div class="card-image">
             <img src="https://via.placeholder.com/600/92c952" class="responsive-img" style="height:200px;">
            
           </div>
           <div class="card-content">
             <p>${element.body.substr(0,50)} ...</p>
           </div>
           <div class="row card-action">
          
           <div class="col s4 center-align"><i class="material-icons">thumb_up</i></div>
           <div class="col s4 center-align"><i class="material-icons">comment</i></div>
           <div class="col s4 center-align"><i class="material-icons">screen_share</i></div>
     
       </div>
           
         </div>
       </div>
     </div>`;
     });
     $('#posts').html(template);
    });
  }

//   <div class="card-action">
//   <a href="#">Like</a>
//   <a href="#">Comment</a>
//   <a href="#">Share</a>
// </div>

  // https://jsonplaceholder.typicode.com/photos