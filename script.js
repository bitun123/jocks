let jock = document.querySelector(".printJocks")
let btn = document.querySelector(".btn")



let response  = async ()=>{
    let getting = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            accept : "application/json"
        }
    })
    let data = await getting.json()
jock.innerText = data.joke
}
btn.addEventListener("click",response)

