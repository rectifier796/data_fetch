const tb = document.getElementById("tb");
const timer=document.getElementById("timer");
const toggle=document.getElementById("toggle");

let toggleValue=false;
// toggle.onchage((event)=>{
//     console.log(toggle.value);
// })
toggle.addEventListener("click",(e)=>{
    if(toggleValue){
        document.body.style.background='rgb(24,28,40)';
        document.body.style.color='white';
        toggleValue=false;
    }else{
        document.body.style.background='white';
        toggleValue=true;
    }
})

const url = "http://localhost:5000/getData";
let data = [];

let i=01;
setInterval(function(){
if(i==60){
i=00;
}
if(i<10)    
timer.innerText='0'+i;
else
timer.innerText=i;
i++;

},1000);

fun();




async function fun() {
  const response = await fetch(url);
  data = await response.json();
  console.log(data[0]);
  for(var i=0;i<data.length;i++){
  let ele = `<tr class="row">
<td>${i+1}</td>
<td>${data[i].name}</td>
<td>${data[i].last}</td>
<td>&#8377;${data[i].buy} / &#8377;${data[i].sell}</td>
<td>${data[i].volume}</td>
<td>${data[i].base_unit}</td>
</tr>`;

  tb.innerHTML += ele;
  }
}
