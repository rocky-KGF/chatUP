document.querySelector(".top").addEventListener("click",function(){
    document.querySelector(".friends").style.width="25%";
    document.querySelector(".chat-box").style.width="45%";
    document.querySelector(".topro").style.display="unset";
    document.querySelector(".topro").style.width="30%";
})
document.querySelector(".phead svg").addEventListener("click",function(){
    document.querySelector(".topro").style.display="none";
    document.querySelector(".friends").style.width="30%";
    document.querySelector(".chat-box").style.width="70%";
})
document.querySelector(".sa").addEventListener("click",function(){
    console.log("clicked")
    const uname = document.querySelector(".uname").value
    console.log(uname)
    document.querySelector(".sa").setAttribute("href","/"+ uname)
})
document.querySelector(".new a").addEventListener("click",function(){
    
    const cont = document.querySelector(".new a").innerHTML
    if(cont == 'New Chat'){
        console.log("if")
    document.querySelector(".new a").innerHTML='Back'
    document.querySelector(".new a").setAttribute("href","/newchat")
    } else{
    console.log("else")
    document.querySelector(".new a").innerHTML='New Chat'
    document.querySelector(".new a").setAttribute("href","/")
    }
})