var current = 2;
$("#begin").click(function() {
    document.getElementById('myBtn').style.opacity = 1;
    document.getElementById('myBtn').style.display = 'block';

    document.getElementById('audiop').style.opacity = 1;

    $('html,body').animate({
        scrollTop: $("#step1").offset().top},
        2000);
});

$("#myBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#step" + current).offset().top},
        2000);
        current++;
        if (current == 8){
            document.getElementById('audiop').style.opacity = 0;
            document.getElementById('audiop').style.display = 'none';

            document.getElementById('audiop').pause()
            document.getElementById('audiop').src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';


            document.getElementById('myBtn').style.opacity = 0;
            document.getElementById('myBtn').style.display = 'none';
        }
});


document.getElementById('audiop').addEventListener("ended", function(){
    document.getElementById('audiop').style.opacity = 0;
            document.getElementById('audiop').pause()
            document.getElementById('audiop').src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';

});


function clearColors(){
    document.getElementById('l1').style.backgroundColor = ''
    document.getElementById('l2').style.backgroundColor = ''
    document.getElementById('l3').style.backgroundColor = ''
    document.getElementById('l4').style.backgroundColor = ''
    document.getElementById('l5').style.backgroundColor = ''
    document.getElementById('l6').style.backgroundColor = ''
    document.getElementById('l7').style.backgroundColor = ''
    document.getElementById('l8').style.backgroundColor = ''
    document.getElementById('l9').style.backgroundColor = ''
    document.getElementById('l10').style.backgroundColor = ''
    document.getElementById('l11').style.backgroundColor = ''
    document.getElementById('l12').style.backgroundColor = ''
    document.getElementById('l13').style.backgroundColor = ''
    document.getElementById('l14').style.backgroundColor = ''
    document.getElementById('l15').style.backgroundColor = ''
    document.getElementById('l16').style.backgroundColor = ''
    document.getElementById('l17').style.backgroundColor = ''
    document.getElementById('l18').style.backgroundColor = ''


}

document.getElementById('poemaudio').addEventListener("play", function(){
    setTimeout(function(){ 
        clearColors();
        document.getElementById('l1').style.backgroundColor = 'white'
    }, 1000);
    
    setTimeout(function(){ 
        clearColors();
        document.getElementById('l2').style.backgroundColor = 'white'
    }, 2000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l3').style.backgroundColor = 'white'
    }, 4000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l4').style.backgroundColor = 'white'
    }, 6000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l5').style.backgroundColor = 'white'
    }, 9000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l6').style.backgroundColor = 'white'
    }, 11000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l7').style.backgroundColor = 'white'
    }, 14000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l8').style.backgroundColor = 'white'
    }, 16000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l9').style.backgroundColor = 'white'
    }, 17000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l10').style.backgroundColor = 'white'
    }, 20000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l11').style.backgroundColor = 'white'
    }, 22500);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l12').style.backgroundColor = 'white'
    }, 26500);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l13').style.backgroundColor = 'white'
    }, 30000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l14').style.backgroundColor = 'white'
    }, 32000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l15').style.backgroundColor = 'white'
    }, 34000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l16').style.backgroundColor = 'white'
    }, 36000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l17').style.backgroundColor = 'white'
    }, 38000);

    setTimeout(function(){ 
        clearColors();
        document.getElementById('l18').style.backgroundColor = 'white'
    }, 39750);

    setTimeout(function(){ 
        clearColors();
    }, 42000);
});