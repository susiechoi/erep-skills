// code source: 
https://stackoverflow.com/questions/18351395/hide-and-display-images-for-a-time-in-a-special-time-period
var images = document.getElementsByTagName("img");
(function(){
    var i = 0;
    setInterval(function(){
        images[i].style.display = "none";
        if (i+1 < images.length) {
            i++;
        }
        else {
            i = 0;
        }
        
        images[i].style.display = "inline-block";
    }, 1200);
})();
