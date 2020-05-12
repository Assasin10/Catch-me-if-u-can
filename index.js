var ball=document.getElementById("ball");

ball.style.top=ball.offsetTop + 'px';
ball.style.left=ball.offsetLeft + 'px';

var h=ball.offsetHeight;
var l= ball.offsetWidth;





ball.addEventListener('mouseover',function(event){

    
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    if(top>100 && left>100)
    {
        ball.style.top=top-100+'px';
        ball.style.left=left-100+'px';

    }
    else if(top>100 && left<(window.innerWidth-l)- 100)
    {
        ball.style.top=top-100+'px';
        ball.style.left=left+100+'px';
    }
    else if(top<(window.innerWidth-l)- 100 && left>100)
    {
        ball.style.top=top+100+'px';
        ball.style.left=left-100+'px';

    }
    else{

        ball.style.top=top+100+'px';
        ball.style.left=left+100+'px';
    }

})