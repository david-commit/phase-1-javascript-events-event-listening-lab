function addingEventListener() {
    alert("I was clicked")
    document.getElementById('input').addEventListener("click", addingEventListener)
}