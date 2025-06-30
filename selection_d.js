function SSortd(){
    c_delay = 0;

    bestt.innerText=" O(n^2)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    selectionSortd(a_size);
    enable_buttons();
}

function selectionSortd(n) {
    for (var i = 0; i < n; i++) {
        var max = i;
        div_update(divs[max],div_sizes[max]*2,"#BCB57B"); //sage- brown yellow

        for (var j = i + 1; j < n; j++) {
            div_update(divs[j],div_sizes[j]*2, "#EE964B"); //Sandy brown
            if (div_sizes[max] < div_sizes[j]) { 
                max = j; 
            }
            div_update(divs[j],div_sizes[j]*2, "#EFC11A"); //original yellow
        }
        div_update(divs[i],div_sizes[i]*2, "#49697F");
        div_update(divs[max],div_sizes[max]*2, "#49697F");//Color updat - gray blue

        var temp = div_sizes[max];
        div_sizes[max] = div_sizes[i];
        div_sizes[i] = temp;

        div_update(divs[i],div_sizes[i]*2, "#49697F");
        div_update(divs[max],div_sizes[max]*2, "#49697F");//Color updat - gray blue

        if (max != i) {
            div_update(divs[max], div_sizes[max] * 2, "#EFC11A"); // original yellow
        }

        div_update(divs[i],div_sizes[i]*2, "#F95738");//Color update - tomato
    }
}
