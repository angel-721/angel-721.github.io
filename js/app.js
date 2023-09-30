getDarkMode = () => { 
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
        return true
    else 
        return false
};

setStyleSheet = () => {
    if(getDarkMode()) 
        document.getElementById("document-style-sheet").setAttribute("href", "./style/dark-style.css")
    else 
        document.getElementById("document-style-sheet").setAttribute("href", "./style/light-style.css")
};

setStyleSheet();