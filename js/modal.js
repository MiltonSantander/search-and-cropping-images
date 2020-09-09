// var cropper;

$("#modal").on("shown.bs.modal", function (event) {
    var cropper;
    let triggerElement = $(event.relatedTarget); //se obtiene el elemento que ejecuto el modal
    let srcImageSelected = triggerElement[0].src; //se obtiene la url de la imagen seleccionada
    document.getElementById("image").setAttribute("src", srcImageSelected); //se asigna la url para visualizarse la imagen en el modal
    console.log(triggerElement);
    cropperStart();
}).on("hidden.bs.modal", function () {
    document.getElementById("image").setAttribute("src", ""); //se limpia la imagen del modal
    cropBoxData = cropper.getCropBoxData();
    canvasData = cropper.getCanvasData();
    cropper.destroy();
});