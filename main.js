const boxes = document.querySelectorAll(".box")
const fill = document.querySelector(".fill")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragStop)

for(const box of boxes) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
}


// fill start leave
function dragStart() {
    this.className += " hold";
    setTimeout(() => this.className = " invisible", 0)
}
function dragStop() {
    this.className = "fill"
}

// boxes drop
function dragOver() {
    
}
function dragEnter(e) {
    e.preventDefault()
}
function dragLeave(e) {
    e.preventDefault()
}
function dragDrop() {
    console.log("drag drop")
}