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



//imports and puts all photos from folder into an array 

let weddingPicsArr = [];
// wedding-pics wedding1.jpg

function importPictures(totalNumOfPhotos, arrName, folderName, photoType){
    for(let i = 1; i < totalNumOfPhotos; i++){
        arrName[i] = `<img src="${folderName}/${photoType}${i}.jpg">`;
        console.log(weddingPicsArr);
    }
}

importPictures(17, weddingPicsArr, wedding-pics, wedding);








