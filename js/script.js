$("#play").click(play);
$("#pause").click(enPause);
$("#stop").click(stop);


var seconde = 0;
var minute = 0;
var heure = 0;


function play(){
    
    //Bloquage du compteur à 25 minutes
    if (minute < 2){
        seconde +=1;
        $("#seconde").html("0" +seconde);
        }
    
    //Suppression 010 au dessus de 10 
    if (seconde > 9){
        $("#seconde").html(seconde);
    }
    //Actualisation des minutes
    if ( seconde == 59 ){
            minute +=1;
        }
        $("#minute").html("0" + minute);
    
    if (minute > 9){
        $("#seconde").html(minute);
    }
    //Actualisation des secondes à 59
        if ( seconde == 59){
                seconde = 0;
        $("#seconde").html(seconde);
            }
    
        var premiereTache = $("#task").val();
    
    //Tache Terminé
    
    if ( seconde == 10){
         razVal();
    }
       else {
           $("#tache").html(premiereTache);
       }
        pause = setTimeout(play,1000);
    if (minute < 25){
        $("#task").mouseover(function(){
            $("#task").addClass("cursor")
            });
    }
       if(seconde == 10){
    $("#done").append("<li class='list-group-item done'>" + premiereTache + "</li>");
        }
   
}

function enPause (){
    
    clearTimeout(pause);
}

function razVal () {
        $("#task").val("");
}


function stop () {
    seconde = 0;
    $("#seconde").html("0" + seconde);
    minute = 0;
    $("#minute").html("0" + minute);
    clearTimeout(pause);
}





