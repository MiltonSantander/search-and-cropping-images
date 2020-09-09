//carga las imagenes en la UI
function requestHandler(response) {

    var divRow = document.createElement('div');
    var divColumn1 = document.createElement('div');
    var divColumn2 = document.createElement('div');
    divRow.className = 'row';
    divColumn1.className = 'column';
    divColumn2.className = 'column';

    var sectionElement = document.createElement('section');
    sectionElement.id = 'photos'; 

    let iterator = 0;
    let x = 0;

    response.items.forEach(item => {

        if ('pagemap' in item) {
            var pageMap = item.pagemap;
            if ('cse_image' in pageMap) {
                var cseImage = pageMap.cse_image[x];
                if ('src' in cseImage) {
                    if (!cseImage.src.includes("x-raw-image:")) {
                        var src = cseImage.src;
                        
                        sectionElement.innerHTML += '<img src='+src+' data-toggle="modal" data-target="#modal"></img>';

                        if (iterator>=5) {
                            divColumn2.innerHTML += '<img src="'+src+'" style="width:100%" data-target=\"#modal\"></img>';
                        } else{
                            divColumn1.innerHTML += '<img src="'+src+'" style="width:100%" data-target=\"#modal\"></img>';
                        }

                        iterator++;
                    }
                }
            }
        }
    });

    divRow.appendChild(divColumn1);
    divRow.appendChild(divColumn2);
    // document.getElementById("contentResponse").appendChild(divRow);
    document.getElementById("contentResponse").appendChild(sectionElement);
    // document.getElementById("contentResponse").innerHTML = carouselInnerContent;
    console.log("se termina de cargar las imagenes");

}