let input=document.querySelectorAll('input')
let content=document.querySelector('.content')
let bodyy=document.getElementById('bodyy')
function gradinet(){
    let grad=`linear-gradient(to top left,${input[0].value},${input[1].value})`
   bodyy.style.background=grad
   content.innerHTML=`background:linear-gradient(to top left,${input[0].value},${input[1].value})`

}
input.forEach(input=>{
input.addEventListener('input',gradinet)
})
