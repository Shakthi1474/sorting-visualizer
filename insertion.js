function ISort(){
    c_delay=0;

    bestt.innerText=" O(n)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    insertion();
    enable_buttons();
}

function insertion() {
    var n=a_size;
    for(var i=1; i<n ;i++){

        div_update(divs[i],div_sizes[i]*2,"#BCB57B");       //sage- brown yellow

        j=i-1;
        
        var temp=div_sizes[i];
        while(j>=0 && div_sizes[j]>temp){
            
            div_update(divs[j],div_sizes[j]*2, "#EE964B"); // sandy brown
            div_update(divs[j+1],div_sizes[j+1]*2, "#EE964B"); //sandy brown
            
            div_sizes[j+1]=div_sizes[j];

            div_update(divs[j+1],div_sizes[j+1]*2, "#EE964B"); //sandy brown            
            j--;
        }

        div_sizes[j+1]=temp;
        if(j!=i-1){
            div_update(divs[j+1],div_sizes[j+1]*2, "#49697F");  //gray blue
        }
        else{
            div_update(divs[j],div_sizes[j]*2, "#49697F");  //gray blue
        }
        
        
        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t]*2,"#F95738");      //tomato
        }

    }
    div_update(divs[n-1],div_sizes[n-1]*2, "#F95738"); //tomato

}

/*
Traversing: Sandy-brown/orange
Final update where the number is going to come: blue
The demarcation: sage- brown/ yellow
Final after every round: red
*/
