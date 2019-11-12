window.onload = function() {
    var httpRequest;
    var button = document.getElementById("btnSearch");

    button.onclick = makeRequest;

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = getResults;
        httpRequest.open('GET', superheroes);
        httpRequest.send();
    }

    function getResults() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert("Something went wrong with the request! Request Status = " + httpRequest.status);
            }
        }
    }
};