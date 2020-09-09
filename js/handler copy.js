//carga las imagenes en la UI
function requestHandler(response) {

    let carouselIndicatorsContent = '';
    let carouselInnerContent = '';
    let iterator = 0;
    let x = 0;

    carouselInnerContent += `<div class="row">`;
    response.items.forEach(item => {

        if ('pagemap' in item) {
            var pageMap = item.pagemap;
            if ('cse_image' in pageMap) {
                var cseImage = pageMap.cse_image[x];
                if ('src' in cseImage) {

                    if (!cseImage.src.includes("x-raw-image:")) {
                        var src = cseImage.src;
                        // console.log(src);

                        carouselInnerContent += `
                                <div class="col-lg-4 col-md-12 mb-4" id="backdropModalParent`+iterator+`">

                                    <!-- Modal -->
                                    <div class="modal fade" id="modal`+iterator+`" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="modalLabel`+iterator+`">Cropper</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="img-container">
                                                        <img id="image`+iterator+`" src="`+src+`" alt="Picture">
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        											<button type="button" class="btn btn-primary" id="crop`+iterator+`" onclick="document.getElementsByClassName('logo')[0].click();">Crop</button>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                        
                                    <a><img id="`+iterator+`" class="img-fluid z-depth-1" src="`+ src + `" alt="image" data-toggle="modal" data-target="#modal` + iterator + `" style="width:100%;max-width:300px" onclick="imageClicked(this.id)"></a>

                                </div>
                            `

                        iterator++;

                    }
                }
            }
        }
    });

    carouselInnerContent += `</div>`;

    // document.getElementById("contentIndicators").innerHTML = carouselIndicatorsContent;
    document.getElementById("contentResponse").innerHTML = carouselInnerContent;
    console.log("se termina de cargar las imagenes");

}