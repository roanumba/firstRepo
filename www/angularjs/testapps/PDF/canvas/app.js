(function () {
    var
        form = $('.form'),
        cache_width = form.width(),
        a4 = [595.28, 841.89];  // for a4 size paper width and height

    $('#create_pdf').on('click', function () {
        $('body').scrollTop(0);
        createPDF();
    });
//create pdf
    function createPDF() {
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        html2canvas(form, {
            onrendered: function (canvas) {
                var img = canvas.toDataURL("image/png");
                //document.body.appendChild(canvas);
                setTimeout(function () {
                    var    doc = new jsPDF({
                            unit: 'px',
                            format: 'a4'
                        });
                        doc.addImage(img, 'JPEG', 20, 20);
                    doc.save();
                },1000)


            }
        });

/*
        getCanvas().then(function (canvas) {
            var img = canvas.toDataURL("image/png");
            var    doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save('techumber-html-to-pdf.pdf');
            form.width(cache_width);
        });
*/
    }

// create canvas object
    function getCanvas() {
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        return html2canvas(form, {
            imageTimeout: 2000,
            removeContainer: true
        });
    }

}());

