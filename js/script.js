/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */
var seconde = 0;
var minute = 0;
var heure = 0;

function play(){
    
        seconde +=1;
        document.getElementById("seconde").innerHTML = seconde;
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

function taches () {

        var premiereTache = document.getElementById("task").innerHTML;
    
        document.getElementById("tache").innerHTML = premiereTache;
    }


$("#play").click(taches)
$("#play").click(play);
$("#pause").click(enPause);
$("#stop").click(stop);

