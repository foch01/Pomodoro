/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

$("#play").click(play);
$("#pause").click(enPause);
$("#stop").click(stop);


var seconde = 0;
var minute = 0;
var heure = 0;



function play(){
    if (minute < 25){
        seconde +=1;
        document.getElementById("seconde").innerHTML = seconde;
        }
    //Actualisation des minutes
        if ( seconde == 59 ){
            minute +=1;
        }
        document.getElementById("minute").innerHTML = minute;
    //Actualisation des secondes à 59
        if ( seconde == 59){
                seconde = 0;
        document.getElementById("seconde").innerHTML = seconde;
            }
    
        var premiereTache = $("#task").val();
    
    if ( seconde == 10){
        
        document.getElementById("fini").innerHTML = premiereTache;
        document.getElementById("fini").className = "list-group-item done";

    }
       else {
           document.getElementById("tache").innerHTML = premiereTache;
       }
        pause = setTimeout(play,1000);
    }

function enPause (){
    
    clearTimeout(pause);
}

function stop () {
    seconde = 0;
    document.getElementById("seconde").innerHTML = seconde;
    minute = 0;
    document.getElementById("minute").innerHTML = minute;
    clearTimeout(pause);
}



