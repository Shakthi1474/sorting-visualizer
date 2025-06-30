function SSort(){
    c_delay=0;

    bestt.innerText=" O(n^2)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    selectionSort(a_size);
    enable_buttons();
}

function selectionSort(n) {
    for(var i=0;i<n;i++){
        var min=i;
        div_update(divs[min],div_sizes[min]*2,"#BCB57B"); //sage- brown yellow

        for(var j=i+1;j<n;j++){
            div_update(divs[j],div_sizes[j]*2, "#EE964B"); //Sandy brown
            if(div_sizes[min]>div_sizes[j]){
                min=j;
            }
            div_update(divs[j],div_sizes[j]*2, "#EFC11A"); //original yellow
   
        }
        div_update(divs[i],div_sizes[i]*2, "#49697F");
        div_update(divs[min],div_sizes[min]*2, "#49697F");//Color updat - gray blue

        var temp=div_sizes[min];
        div_sizes[min]=div_sizes[i];
        div_sizes[i]=temp;
        
        div_update(divs[i],div_sizes[i]*2, "#49697F");
        div_update(divs[min],div_sizes[min]*2, "#49697F");//Color updat - gray blue
        
        if(min!=i){
            div_update(divs[min],div_sizes[min]*2, "#EFC11A"); //original yellow
        }
        
        div_update(divs[i],div_sizes[i]*2, "#F95738");//Color update - tomato
    }
}

/*
Elements before sage-brown/yellow are sorted i.e. it is the border between sorted and unsorted array.
The elements that are being traversed to find the minimum are highlighted in orange/sandy-brown as they are traversed.
The found minimum element is then swapped with the border element, and this is shown in gray blue.
When the element has reached its final state it turns red, we can also say that the elements before border element are red.
*/
