user_name = localStorage.getItem("Username");
 
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "! " +"     "  +  "    THIS APP IS BASED ON CASE STUDY BETWEEN GOOGLE LENS AND MOBILENET        " + "           (also click to go back)";


function d(){
    window.location = "hi.html";
}1

function one(){
    window.alert("I have tested 10 samples out of which 4 were tie and 6 google lens predicted more correct, therefore google lens is more accurate than mobilenet");
}