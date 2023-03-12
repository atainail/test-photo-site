$('.navigation-import').load("nav.txt");


//toggles between + and - in the navbar
$('button').click(function() {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});
 
//rotates the toggler when clicked
let current_rotation = 180;
document.querySelector("i").addEventListener('click', function() {
    if(current_rotation < 0){
       current_rotation += 360; 
    }
	else if(current_rotation > 0){
        current_rotation -= 360;
    }
	document.querySelector("#spin").style.transform = 'rotate(' + current_rotation + 'deg)';
});





