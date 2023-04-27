const endDate = "28 April 2023  10:00 PM"
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll('input')

function clock(){
    const end = new Date(endDate);
    const now = new Date();
//  console.log(end);
//  console.log(now);
  
    const diff = (end - now) / 1000; // Miliseconds convert into seconds
    if(diff < 0) return;

    // console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 24  );  // seconds convert into days 
    inputs[1].value = Math.floor(diff / 3600) % 24 ;   // calculate hours
    inputs[2].value = Math.floor(diff / 60) % 60 ;     // calculate minutes
    inputs[3].value = Math.floor(diff % 60 ); 
    
   
}

// initial call
clock();


setInterval(
    () => {
        clock()
    },
    1000
)
/**
 *  1 day = 24 hrs
 *  1 hrs = 60 mins
 *  60 min = 3600 sec  
 * 
 */