var popupDisplayed = false; // Flag to track if the popup has been displayed

// Function to display the popup when scrolling down
window.onscroll = function() {
    if (!popupDisplayed && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
        displayPopup();
        popupDisplayed = true; // Set the flag to true to indicate that the popup has been displayed
    }
};

// Function to display the popup
function displayPopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "none";
}

function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('close');
    // Add your menu toggle functionality here
}



      

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  

 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})