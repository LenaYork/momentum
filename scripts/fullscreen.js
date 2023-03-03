const fullScreenIcon = document.querySelector(".fullscreen-icon");
fullScreenIcon.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullScreenIcon.classList.add("fullscreen-active");
        fullScreenIcon.setAttribute("title", "leave fullscreen mode");
        
    } else {
        document.exitFullscreen();
        fullScreenIcon.setAttribute("title", "enter fullscreen mode");
        fullScreenIcon.classList.remove("fullscreen-active");
        
    }
})