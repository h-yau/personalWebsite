function checkWindowSize() {
    const backgroundVideo = document.querySelector(".background-video");
    if (window.innerWidth <= 640) {
        if (backgroundVideo != null) {
            backgroundVideo.remove();
        }
        return;
    }
    if (backgroundVideo == null) {
        try {
            const iframeVideo = document.createElement("iframe");
            iframeVideo.classList.add("background-video");
            iframeVideo.src = "https://www.youtube.com/embed/hu5P_wn2egQ?autoplay=1&mute=1&controls=0&loop=1&playlist=hu5P_wn2egQ";
            iframeVideo.frameBorder = "0";
            iframeVideo.allowFullscreen = true;
            iframeVideo.allow ="autoplay";
            document.body.appendChild(iframeVideo);
        } catch (error) {
            console.error("An error occured while adding the iframeVideo: ", error);
        }
        
    }
    return;
}

checkWindowSize();
window.addEventListener("resize", checkWindowSize);
