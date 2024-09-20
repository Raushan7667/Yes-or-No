
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("text").innerText = "I Love You Too ❤️❤️❤️❤️!";

document.getElementsByClassName("imoji")[0].innerHTML = `

<style>
    #videoContainer {
        position: relative;
        width: 600px;
        height: 400px;
         border-radius: 20px; 
        overflow: hidden;
    }
         #videoContainer::before {
        content: '';
        position: absolute;
        top: -5px; 
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(
            45deg,
            red, orange, yellow, green, blue, indigo, violet,
            red, orange, yellow, green, blue, indigo, violet
        );
        background-size: 400% 400%;
        animation: rainbow 10s ease infinite;
        border-radius: inherit;
        z-index: -1;
    }
    @keyframes rainbow {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
    }
    #myVideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #myVideo::-webkit-media-controls-enclosure {
        display: none !important;
    }
  
</style>
<div id="videoContainer">
    <video id="myVideo" loop>
        <source src="My_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    
</div>
`;

{/* <source src="https://go.screenpal.com/watch/cZQF1XVSXGj" type="video/mp4">
Your browser does not support the video tag. */}

const video = document.getElementById("myVideo");
video.play();

});

// Move the "No" button away when hovered or clicked
document.getElementById("noBtn").addEventListener("mouseover", function() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth - button.offsetWidth;
    const y = Math.random() * window.innerHeight - button.offsetHeight;

      if(x<0)x = 0;
    if(y<0)y = 0;
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});


