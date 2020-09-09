$("button[id^='crop']").on("click", function () {
    console.log("boton crop presionado");
    // console.log(cropper.getData());
    // var croppedCanvas = cropper.getCroppedCanvas();
    // console.log(croppedCanvas);

    var canvas = cropper.getCroppedCanvas()
    image.src = canvas.toDataURL();
    console.log(image.src);

    canvas.toBlob(function (blob) {
        const formData = new FormData();
        console.log(blob);
        // Pass the image file name as the third parameter if necessary.
        formData.append('croppedImage', blob /*, productId , 'example.png' */);
        console.log(formData);
        // formData.append('productId', productId)
        // console.log(formData.get('productId'));

        let options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': '' 
            // }
            body: formData
        };
        
        fetch('http://192.168.0.3/search-api-project/php/upload.php', options);

        // $.ajax('http://localhost/search-api-project/php/upload.php', {
        //     method: 'POST',
        //     data: formData,
        //     processData: false,
        //     contentType: false,
        //     success() {
        //         console.log('Upload success')
        //     },
        //     error() {
        //         console.log('Upload error');
        //     },
        // });
    } /*, 'image/png' */);

});