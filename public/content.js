
let container = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let summarize_button = document.createElement("button")
summarize_button.innerHTML = "Summarize the problem"
let img = document.createElement("img");
img.src ="data:image/png;base64,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"
container.style.backgroundColor = "black"
td1.appendChild(img)
tr.append(td1)
tr.append(td2)
container.appendChild(tr);
let step_button = document.createElement("button")
let step = 1
step_button.innerText = "Start Interview Practice!"
step_button.onclick = function(){
    switch(step){
        case 1:
            step_button.innerText = "Step 1: summarize the problem"
            step += 1
            break
        case 2:
            step_button.innerText = "Step 2: Clarifying questions"
            step +=1
            break
        case 3:
            step_button.innerText = "Step 3: list examples & edge cases"
            step += 1
            break
        case 4:
            step_button.innerText = "Step 4: begin coding (30 min)"
            step += 1
            break
        case 5: 
            step_button.innerText = "Step 5 : test solution"
            step += 1
            break
        case 6: 
            step_button.innerText = "Step 6: Big O and memory"
            break
        default:
            console.log("default switch "+String(step))
    }
}
td2.appendChild(step_button)
var intervalID = setInterval(function() {
    nav_bar =  document.getElementsByClassName("flex min-h-[44px] flex-shrink-0 flex-wrap items-center pr-5")[0]
    parent = nav_bar.parentNode
    if (nav_bar != null && parent != null) {
        console.log(nav_bar);
        parent.insertBefore(container,nav_bar);
        clearInterval(intervalID);
    }
}, 2000);