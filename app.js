let hours=0;
let minutes=0;
let seconds=0;
let state="A.M.";
let id=null;
let clock_state="off";
const maindiv=document.getElementById('maindiv');
maindiv.innerHTML="0" +hours+ " : " + "0" +minutes+ " : " + "0" +seconds+ " " +state;


function clock()
{
    if(id)
    {
        return;
    }
    seconds+=1
    id = setInterval(() => {
        clock_state="on";
        if(hours>=0 && hours<12)
        {
            state="A.M.";
        }
        else{
            state="P.M.";
        }
        if(seconds==60)
        {
            seconds=0;
            minutes+=1;
        }
        if(minutes==60)
        {
            minutes=0;
            hours+=1;
        }
        if(hours==24)
        {
            hours=0;
        }
        maindiv.innerText=`${hours} : ${minutes} : ${seconds} ${state}`;
        seconds+=1;
        
    }, 1000);
}
function stopclock()
{

    clearInterval(id);
    clock_state="off";
    id=null;
    // hours=0;
    // minutes=0;
    // seconds=0;
    // state="A.M.";
    maindiv.innerHTML=hours+" : "+minutes+" : "+ seconds+" "+state;
}
function reset()
{
    if(hours==0 && minutes==0 && seconds==0 && state=="A.M")
    {
        return;
    }
    clearInterval(id);
    id=null;
    hours=0;
    minutes=0;
    seconds=0;
    state="A.M.";
    maindiv.innerHTML=hours+" : "+minutes+" : "+ seconds+" "+state;
    // clock();
}
function reboot()
{
    if(hours==0 && minutes==0 && seconds==0 && state=="A.M")
    {
        return;
    }
    clearInterval(id);
    id=null;
    hours=0;
    minutes=0;
    seconds=0;
    state="A.M.";
    maindiv.innerHTML=hours+" : "+minutes+" : "+ seconds+" "+state;
    clock();
}