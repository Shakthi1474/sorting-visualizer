function QSortd(){
    c_delay=0;

    bestt.innerText=" O(nlogn)";
    avgt.innerHTML=" O(nlogn)";
    worstt.innerHTML=" O(n^2)";
    
    bests.innerHTML=" O(logn)";
    avgs.innerHTML=" O(logn)";
    worsts.innerHTML=" O(n)";
    
    quickd(0, a_size-1);
    enable_buttons();
}

function quickd(lb, ub) {
    if (lb <= ub) {
        var loc1 = partition2(lb, ub);
        quickd(lb, loc1 - 1);
        quickd(loc1 + 1, ub);
    }
}

function partition2(lb,ub){
    var pivot=lb;
    var i=lb,j=ub;
    div_update(divs[pivot],div_sizes[pivot]*2,"#BCB57B"); //sage-brown yellow

    while(i<j){
        while(div_sizes[pivot] <= div_sizes[i] && i<=ub){
            if(i==lb){
                i++;
                continue;
            }
            div_update(divs[i],div_sizes[i]*2,"#EE964B");       //Sandy brown
            div_update(divs[i],div_sizes[i]*2,"#FFC60B");       //og yellow         
            i++;
        }
        
        if(i<=ub){
            div_update(divs[i],div_sizes[i]*2,"#EE964B");     //Sandy brown
            div_update(divs[i],div_sizes[i]*2,"#49697F");     //gray-blue
        }
        
        while(div_sizes[pivot]>div_sizes[j] && j>lb){
            div_update(divs[j],div_sizes[j]*2,"#EE964B");   //Sandy brown
            div_update(divs[j],div_sizes[j]*2,"#FFC60B");     //og yellow
            j--;
        }

        div_update(divs[j],div_sizes[j]*2,"#EE964B");       //Sandy brown
        div_update(divs[j],div_sizes[j]*2,"#49697F");       //gray-blue

        if(i<j){
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            div_update(divs[i],div_sizes[i]*2,"#49697F");     //gray-blue 
            div_update(divs[j],div_sizes[j]*2,"#49697F");     //gray-blue
           
            div_update(divs[j],div_sizes[j]*2,"#FFC60B");     //og yellow
            div_update(divs[i],div_sizes[i]*2,"#FFC60B");     //og yellow
        }

    }

    div_update(divs[j],div_sizes[j]*2,"#49697F");     //gray-blue
    div_update(divs[lb],div_sizes[lb]*2,"#49697F");     //gray-blue    
    
    var temp=div_sizes[j];
    div_sizes[j]=div_sizes[lb];
    div_sizes[lb]=temp;

    div_update(divs[lb],div_sizes[lb]*2,"#FFC60B");     //og yellow    
    div_update(divs[j],div_sizes[j]*2,"#F95738");     //tomato

    return j;
}
