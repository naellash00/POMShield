//console.log("contentscript injected or not");
//function POMEngine(post) {} 

function blurPostText() {
    // Select the post's text element 
    const tweetTextElement = document.querySelector('[data-testid="tweetText"]');
    // Check if the element exists
    if (tweetTextElement) {
        // Apply the blur
        tweetTextElement.style.filter = 'blur(10px)';
    }
}

// Call the blurPostText function
blurPostText();


 