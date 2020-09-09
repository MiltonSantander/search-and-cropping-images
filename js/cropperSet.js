function cropperStart(imageElement) {
    let image = document.getElementById("image");
    console.log(image);

    var cropBoxData = {
        height: 800,
        width: 800
    };

    var canvasData;
    cropper = new Cropper(image, {
        autoCropArea: 0.5,
        crop(event) {
            setTimeout(() => {
                /**---------------------------------------------------------------------
                  In order for crossorigin to work we need to add crossorigin attribute 
                  to the dynamically created img element, (See Attachment)
                ---------------------------------------------------------------------*/
                let canvas_img = window.document.querySelector('img.cropper-hide');
                let src = canvas_img.getAttribute('src');
                canvas_img.setAttribute('crossorigin', 'anonymous')
                /*Somehow src needs to be set again in order for crossorigin to work */
                canvas_img.setAttribute('src', src)
            }, 100)
        }
    });

}