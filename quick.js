function QSort() {
    c_delay=0;

    bestt.innerText=" O(nlogn)";
    avgt.innerHTML=" O(nlogn)";
    worstt.innerHTML=" O(n^2)";
    
    bests.innerHTML=" O(logn)";
    avgs.innerHTML=" O(logn)";
    worsts.innerHTML=" O(n)";
    

    quick(0, a_size-1);
    enable_buttons();
}

function partition(lb,ub){
    var pivot=lb;
    var i=lb,j=ub;
    div_update(divs[pivot],div_sizes[pivot]*2,"#BCB57B"); //sage-brown yellow

    while(i<j){
        while(div_sizes[pivot]>=div_sizes[i] && i<=ub){
            if(i==lb){
                i++;
                continue;
            }
            div_update(divs[i],div_sizes[i]*2,"#EE964B");       //Sandy brown
            div_update(divs[i],div_sizes[i]*2,"#FFC60B");       //og yellow         
            i++;
        }
        
        if(i<=ub){
            div_update(divs[i],div_sizes[i]*2,"#EE964B"); 
            div_update(divs[i],div_sizes[i]*2,"#49697F");     //gray-blue
        }
        
        while(div_sizes[pivot]<div_sizes[j] && j>=lb){
            div_update(divs[j],div_sizes[j]*2,"#EE964B");   //Sandy brown
            div_update(divs[j],div_sizes[j]*2,"#FFC60B");     //og yellow
            j--;
        }
        div_update(divs[j],div_sizes[j]*2,"#EE964B");
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


function quick(lb, ub){
    if(lb<=ub){
        var loc=partition(lb,ub);
        quick(lb,loc-1);
        quick(loc+1,ub);
    }
}

/*
Sage-brown/yellow color is used to show pivot. 
Sandy-brown/orange is used to traverse the elements.
Blue elements are used to compare and swap.
Red/tomato is used to show the final position of an element.
*/
