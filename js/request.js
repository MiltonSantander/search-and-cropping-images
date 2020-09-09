//realiza la peticion de busqueda del producto

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        var formForSubmit = document.getElementById('formSearh');
        console.log(formForSubmit);
        console.log(formForSubmit.inputText.value);
        sessionStorage.setItem("inputText", formForSubmit.inputText.value);
        formForSubmit.reset();
        formForSubmit.submit();
        // processText();
    }
}

function processText() {
    formSearch = document.getElementById("formSearh");
    inputText = formSearch.elements["inputText"];
    text = inputText.value;
    console.log(text);
    createRequest(text);
}

function createRequest(productDescription) {

    let productDescriptionEncode = encodeURI(productDescription)
    let xhr = new XMLHttpRequest;

    // API key 1 = AIzaSyDl4DnX9zf-QVaYfOyk3Im7GVnuMnaIlPA
    // API key 2 = AIzaSyBLZA-Jra0_qYg7bGq_JXDH2pE2Iid5xiE
    // API key 3 = AIzaSyCMmNlSUQ1F9k43GaGkliBeFBTVxJO2Tiw
    xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDl4DnX9zf-QVaYfOyk3Im7GVnuMnaIlPA&cx=018342974445388584067:p09wcxjsirw&q=' + productDescriptionEncode, 'true');



    xhr.onload = function () {
        if (this.status === 200) {
            requestHandler(JSON.parse(this.responseText));
        }
        if (this.status === 429) {
            let response = JSON.parse(this.responseText);
            let code = response.error.code;
            let status = response.error.status;
            let reason = response.error.errors[0].reason;
            let message = response.error.message;
            alert("Error: " + code + "\nEstado: " + status + "\nRazon: " + reason + "\nMensaje: " + message);
        }
    }

    xhr.send();

}