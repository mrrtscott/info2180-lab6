window.onload = function() {
    var httpRequest;
    var button = document.getElementById("btnSearch");

    button.onclick = createRequest;

    function createRequest() {
        httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = loadQueryResults;
        httpRequest.open('GET', superheroes);
        httpRequest.send();
    }

    function loadQueryResults() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert("Something went wrong with the request! Request Status = " + httpRequest.status);
            }
        }
    }
};