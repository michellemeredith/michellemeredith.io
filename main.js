document.addEventListener('DOMContentLoaded', function(event) {
    // array of texts, can add more
    var dataText = [ "welcome!"];
    // type one text in the typewriter via recursion
    
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span class="typewriter" aria-hidden="true"</span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
                
    // animate a text in the array with the typewriter function
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 4000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                // once an entire text has been animated, animate the next text
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});
        