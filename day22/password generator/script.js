function generate(){
    let dictionary = ''
    if (document.getElementById("lowercase").checked){
        dictionary += 'qwertyuiopzxcvbnmasdfghjkl'
    }
    if (document.getElementById("uppercase").checked){
        dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if (document.getElementById("digits").checked){
        dictionary += '123456789'
    }
    if (document.getElementById("special").checked){
        dictionary += '!@#$%^&*()_+{}[]<>;'
    }
    const length = document.querySelector("input[type= 'range']").value
    if(length <1 || dictionary.length == 0){
        return;
    }
    let password = ''
    for (let i = 0; i<length; i++){
        const pos = Math.floor(Math.random() * dictionary.length)
        password += dictionary[pos]
    }
    document.querySelector('input[type = "text"]').value = password
}
document.querySelectorAll("button.generate","input[type='checkbox']").forEach((elem)=>{
    elem.addEventListener("click",generate)
})
document.querySelector("input[type='range']").addEventListener("input",(e)=>{
    generate()
    document.querySelector("div.range span").textContent = e.target.value
})
document.querySelector("#copy").addEventListener("click",(e)=>{
    const pass = document.querySelector("input[type = 'text']").value
    navigator.clipboard.writeText(pass).then((res)=>{
        document.querySelector("#copy").textContent = "Copied"
        setTimeout(()=>{
            document.querySelector("#copy").textContent = "Copy"
            
        },1500)
    })
})
generate()