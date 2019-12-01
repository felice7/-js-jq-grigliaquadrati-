
// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi


$(document).ready(function(){  
    var indiciBombe = []; 
    do { 
        var numero = generaRandom(0,63); 
        if (!indiciBombe.includes(numero)) { 
            indiciBombe.push(numero); 

        } 
            } while (indiciBombe.length < 15); 
            
            for (var i = 0; i < indiciBombe.length; i++) { 
                
                $('.quadrato').eq(indiciBombe[i]).addClass('bomba');
             }
               
             $('.quadrato').click(function(){
                  
                 $(this).addClass('active');
                 
              });
               
              function generaRandom(min, max) { 
                  var random = Math.floor(Math.random() * (max - min + 1) ) + min; 
                  return random;
              
               } 
                  
                  
    });
