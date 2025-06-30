var speed=1000;

var inp_speed=document.getElementById("arr_speed");
inp_speed.addEventListener("input",animation_speed);

function animation_speed()
{
    var array_speed=inp_speed.value; 
    switch(parseInt(array_speed)) //Convert string to int, as the value is a string
    {
        case 1: speed=15;
                break;
        case 2: speed=100;
                break;
        case 3: speed=1000;
                break;
        case 4: speed=5000;
                break;
        case 5: speed=10000;
                break;
    }
    c_delay=0;
    delay_time=10000/(speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(speed);
var c_delay=0;          //Updated on every div change so that we can see the visualization.

function div_update(cont,height,color)
{
        window.setTimeout(()=>{
                if(a_size>40){
                        cont.style=" margin:0% " + margin_size + "%; width:" + (100/a_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + "; font-size: 0.75rem";
                        cont.innerHTML="<p>"+height/2+"</p>";
                }
                else{
                        cont.style=" margin:0% " + margin_size + "%; width:" + (100/a_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
                        cont.innerHTML="<p>"+height/2+"</p>";
                }

        },c_delay+=delay_time);
}
