var arr_gen=document.querySelector("#arr_generate");
var arr_size=document.querySelector('#arr_size');
var a_size=arr_size.value;

var butts_algos=document.querySelectorAll(".asce button");
var butts_d_algos=document.querySelectorAll(".desc button");
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.querySelector("#visualizer");

var complexity=document.querySelectorAll(".complexity");

var bestt=document.querySelector("#bestt");
var worstt=document.querySelector("#worstt");
var avgt=document.querySelector("#avgt");

var bests=document.querySelector("#bests");        //best space
var avgs=document.querySelector("#avgs");          //avg space
var worsts=document.querySelector("#worsts");        //worst space

generate_array();

arr_gen.addEventListener("click", generate_array);
arr_size.addEventListener("input",generate_array);

function generate_array()
{
    complexity[0].classList.add("unseen");
    complexity[1].classList.add("unseen");
    a_size=arr_size.value;

    cont.innerHTML="";
    for(var i=0;i<a_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() *0.5*(arr_size.max - arr_size.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        if(a_size>40){
            divs[i].style=" margin:0% " + margin_size + "%; background-color:#EFC11A; width:" + (100/a_size-(2*margin_size)) + "%; height:" + (div_sizes[i])*2 + "%; font-size: 0.65rem";
        }
        else{
            divs[i].style=" margin:0% " + margin_size + "%; background-color:#EFC11A; width:" + (100/a_size-(2*margin_size)) + "%; height:" + (div_sizes[i])*2 + "%;";
        }
        divs[i].innerHTML="<p>"+div_sizes[i]+"</p>";
    }

    
    
    
}

butts_algos[0].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    BSort();
});

butts_algos[1].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    MSort();
});

butts_algos[2].addEventListener('click',function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    QSort();
});

butts_algos[3].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    SSort();
});

butts_algos[4].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    ISort();
});

butts_d_algos[0].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    BSortd();
});

butts_d_algos[1].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    MSortd();
});

butts_d_algos[2].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    QSortd();
});

butts_d_algos[3].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    SSortd();
});

butts_d_algos[4].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    disable_buttons();
    ISortd();
});

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].disabled=true;
        butts_d_algos[i].disabled=true;
        arr_size.disabled=true;
        inp_speed.disabled=true;
        arr_gen.disabled=true;
    }
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].disabled=false;
            butts_d_algos[i].disabled=false;
            arr_size.disabled=false;
            inp_speed.disabled=false;
            arr_gen.disabled=false;
        }
    },c_delay+=delay_time);
}
