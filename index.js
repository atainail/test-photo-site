



//toggles between + and - in the navbar
$('button').click(function() {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});
 




//imports and puts all photos from folder into an array 

let weddingPicsArr = [];

function importPictures(totalNumOfPhotos, arrName, folderName, photoType){
    for(let i = 1; i < totalNumOfPhotos + 1; i++){
        arrName[i] = `<img src="${folderName}/${photoType}${i}.jpg">`;
        document.querySelector(".wedding-photos").innerHTML +=  `<img src="${folderName}/${photoType}${i}.jpg">`;   
         
    }
}

function drawWeddingPics(){
    document.querySelector(".wedding-photos").innerHTML += importPictures(17, weddingPicsArr, 'wedding-pics', 'wedding');
}

importPictures(17, weddingPicsArr, 'wedding-pics', 'wedding');

drawWeddingPics();





$('.navigation-import').load("nav.txt");

