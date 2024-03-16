
console.log("contentscript injected or not");


document.querySelectorAll('img').forEach(img => {
    img.classList.add('twitter-img-blur');
});

document.querySelectorAll('video').forEach(video => {
    video.classList.add('twitter-video-blur');
});

/*const elementsToBlur = document.querySelectorAll('img, video');
elementsToBlur.forEach(element => {
    element.style.filter = 'blur(20px)';
}); */


//async function fetchPosts(){}
//function blurOffensivePosts(){}
//function POMEngine(post) {} 

 