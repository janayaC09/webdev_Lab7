function init(){
    function eventFuncion(){
        var message = document.getElementById('entryinput').value;
        alert("Janaya: " + message);
        document.getElementById('output').innerHTML = "<h2>" + message + "</h2>";
    }
    var output = document.getElementById('entrybutton');
    output.addEventListener('click', eventFuncion);
}
window.addEventListener('load', init);
