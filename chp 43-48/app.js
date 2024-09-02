//------01
function showAlert() {
    alert("You clicked the link!");
}
//------02
function imageClicked(mobileName) {
    alert("You clicked on " + mobileName);
}
//------03
    function deleteRow(button) {
        var row = button.parentNode.parentNode;
      
        row.parentNode.removeChild(row);
    }

    function changeImage() {
        document.getElementById("image").src = "https://via.placeholder.com/300x200?text=New+Image";
    }

    function revertImage() {
        document.getElementById("image").src = "https://via.placeholder.com/300x200?text=Original+Image";
    }