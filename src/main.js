// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover; 
// new Cover(userCover.value, userTitle.value, descriptorOne.value, descriptorTwo.value) 
 // make new object instance every created poster (for savin')

var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoverButton = document.querySelector('.view-saved-button');
var yourOwnCoverButton = document.querySelector('.make-new-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');

var newRandomCover = document.querySelector('.cover-image');
var newRandomTitle = document.querySelector('.cover-title');
var newRandomTagOne = document.querySelector('.tagline-1');
var newRandomTagTwo = document.querySelector('.tagline-2');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var descriptorOne = document.querySelector('.user-desc1');
var descriptorTwo = document.querySelector('.user-desc2');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var savedCoversSection = document.querySelector('.saved-covers-section')


// Add your event listeners here 👇
window.addEventListener('load', getRandomCover);
homeButton.addEventListener('click', viewHome);
randomCoverButton.addEventListener('click', getRandomCover);
yourOwnCoverButton.addEventListener('click', changeViewToForm);
viewSavedCoverButton.addEventListener('click', viewSavedCovers);
makeMyBookButton.addEventListener('click', function(){
  makeMyBook(),
  event.preventDefault()
});
saveCoverButton.addEventListener('click', saveCover)


// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function saveCover(){
  if(!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover)
} 

savedCoversSection.innerHTML = 
`<section>
  <img class="cover-image" src="${currentCover.cover}">
  <h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
</section>`

}

function makeMyBook() {
  currentCover = new Cover(userCover.value, userTitle.value, descriptorOne.value, descriptorTwo.value)
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(descriptorOne.value)
  descriptors.push(descriptorTwo.value)
  viewHome()
  newRandomCover.src = currentCover.cover
  newRandomTitle.innerText = currentCover.title
  newRandomTagOne.innerText = currentCover.tagline1
  newRandomTagTwo.innerText = currentCover.tagline2
  };


function viewSavedCovers() {
  savedView.classList.remove('hidden')
  formView.classList.add('hidden')
  homeView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
};


function viewHome() {
  homeButton.classList.add('hidden')
  formView.classList.add('hidden')
  homeView.classList.remove('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
};

function getRandomCover() {
newRandomCover.src = covers[getRandomIndex(covers)]
newRandomTitle.innerText = titles[getRandomIndex(titles)]
newRandomTagOne.innerText = descriptors[getRandomIndex(descriptors)]
newRandomTagTwo.innerText = descriptors[getRandomIndex(descriptors)]
};

function changeViewToForm() {
  homeButton.classList.remove('hidden')
  formView.classList.remove('hidden')
  homeView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  savedView.classList.add('hidden')
};


