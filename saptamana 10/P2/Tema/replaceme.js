  
// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'
const request = new XMLHttpRequest();
request.open('GET', puppies);
request.onload = () => {
    const serverResponse = JSON.parse(request.response);
    console.log(serverResponse);

    const replace = () =>{
        const body = document.getElementsByTagName('body')[0];
        const textDisplay = document.getElementsByClassName('text')[0].style.display="none";
        
        const imgGallery = serverResponse.data.children;
        for (let i =0; i < imgGallery.length; i++){
            const img = document.createElement('img');
            body.appendChild(img).setAttribute('src', imgGallery[i].data.thumbnail);
        }
        
    }
  
    const button = document.getElementsByClassName('button')[0];
button.addEventListener('click', replace);

}
request.send();