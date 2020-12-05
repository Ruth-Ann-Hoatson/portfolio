

var button = document.querySelector("#btn");


function changeBackground(color) {
    document.body.style.background = color;
 }


button.addEventListener("click", function ()  {
if ( document.body.style.background === 'rgb(207, 174, 174)'){
    changeBackground('#50B9AD')
}else {
   changeBackground('rgb(207, 174, 174)') 
}

});




