'use strict';



$(document).ready(function () {
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.fixed-action-btn').floatingActionButton();
  $('.collapsible').collapsible();
});
$('body').click(function (e) {
  page('/', 'other.html');
  e.preventDefault();
});
renderPost();

function renderPost() {
  $.get("https://jsonplaceholder.typicode.com/posts", function (data, status) {
    console.log(data);
    var template = '';
    $.each(data,function(i,element){
      template += " <div class=\"row\">\n       <div class=\"col s12 m7\">\n         <div class=\"card\">\n           <div class=\"card-image\">\n             <img src=\"https://via.placeholder.com/600/92c952\" class=\"responsive-img\" style=\"height:200px;\">\n            \n           </div>\n           <div class=\"card-content\">\n             <p>" + element.body.substr(0,50) + " ...</p>\n           </div>\n           <div class=\"row card-action\">\n          \n           <div class=\"col s4 center-align\"><i class=\"material-icons\">thumb_up</i></div>\n           <div class=\"col s4 center-align\"><i class=\"material-icons\">comment</i></div>\n           <div class=\"col s4 center-align\"><i class=\"material-icons\">screen_share</i></div>\n     \n       </div>\n           \n         </div>\n       </div>\n     </div>";
    });
    $('#posts').html(template);
  });
} //   <div class="card-action">
//   <a href="#">Like</a>
//   <a href="#">Comment</a>
//   <a href="#">Share</a>
// </div>
// https://jsonplaceholder.typicode.com/photos
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18


