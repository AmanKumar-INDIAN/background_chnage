let inn=document.querySelectorAll('input');
let opt=document.getElementById('der')
let texta=document.getElementById('textaria')
let container=document.querySelector('.color_container')
let refr=document.getElementById('Refresh')
let bo=document.getElementById('bo')
function leng(randoom){
    if(randoom){
       inn[0].value=rencol()
       inn[1].value=rencol()
    let gen=` linear-gradient(${opt.value}, ${inn[0].value}, ${inn[1].value})`
        console.log(rencol())
        container.style.background=gen


    }
    else{
        let gen=` linear-gradient(${opt.value}, ${inn[0].value}, ${inn[1].value})`
        container.style.background=gen
        texta.value=`background:${gen}`
    }
    //let gen=` linear-gradient(${opt.value}, ${inn[0].value}, ${inn[1].value})`
    //container.style.background=gen
   // texta.value=`background:${gen}`
}
inn.forEach(inp=>{
    inp.addEventListener('input',leng)
})
function rencol(){
    let renc=Math.floor(Math.random()*0xffffff).toString(16)
    return `#${renc}`
}

opt.addEventListener("change",leng) 
refr.addEventListener('click',()=>{leng(true)})