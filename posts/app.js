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








// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}














