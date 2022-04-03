const t = ()=>{
    let timer=document.querySelector(".timer");
    timer.style.display="none";
    const upperDate = new Date('Jan 28, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate-currentDate;
  
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    if(diffDate >=0){
        timer.style.display="block";
        const remain_days = Math.floor(diffDate/days);
        const remain_hours = Math.floor((diffDate%days)/hours);
        const remain_minutes = Math.floor((diffDate%hours)/minutes);
        const remain_seconds = Math.floor((diffDate%minutes)/seconds);
        let d = document.getElementById('days');
        let h = document.getElementById('hours');
        let m = document.getElementById('minutes');
        let s = document.getElementById('seconds');
        
        d.innerHTML = "  الوقت التبقي على العرض    "+remain_days +" يوم ";
        h.innerHTML = " و "+ remain_hours +" ساعه ";
        m.innerHTML = " و "+ remain_minutes +" دقيقه ";
        s.innerHTML =  " و "+ remain_seconds + " ثانيه  ";
    }

}

setInterval(t, 1000);