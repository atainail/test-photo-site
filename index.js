
$('.navigation-import').load("nav.txt");



//toggles between + and - in the navbar
$('button').click(function () {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});





//imports and puts all photos from folder into an array 
let weddingPicsArr = [];
let headShotsArr = [];

function importPictures(totalNumOfPhotos, arrName, folderName, photoType) {
    for (let i = 1; i < totalNumOfPhotos + 1; i++) {

        arrName[i] = `<img class="reveal " src="${folderName}/${photoType}${i}.jpg">`;
        document.querySelector('.wedding-photos').innerHTML += `<img class="reveal " src="${folderName}/${photoType}${i}.jpg">`;
        document.querySelector('.head-shots').innerHTML += `<img class="reveal " src="${folderName}/${photoType}${i}.jpg">`;
    }

}

let title = $(document).find("title").text();

if (title.includes('Weddings')) {
    importPictures(17, weddingPicsArr, 'wedding-pics', 'wedding');
}
else if (title.includes('Headshots')) {
    importPictures(7, headShotsArr, 'headshots', 'head');
}




//will have the photos fade in
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);


//displays the scroll down arrow 
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll + 1 > scroll || scroll - 1 < scroll) {
        document.querySelector(".scroll-down").innerHTML = "";
    }
});


//displays the arrow to skip back to the top of the page
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let pageHeight = document.body.scrollHeight;
    if (scroll < pageHeight/6) {
        document.querySelector(".top-of-page").innerHTML = ""; 
    } else if (scroll > pageHeight/6){
        document.querySelector(".top-of-page").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">'
      +  '<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>'
      + '</svg>'
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

