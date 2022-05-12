$(document).ready(function () {
    "use strict"
    let amount = 10;
    let interval = 250;
    let growing = setInterval(sizeUp, interval);
    let randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    $(".circle").css({
        'background-color': randomColor
    });
    $(document).on('click', ".circle", function () {
        $(this).hide();
        randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
        $(this).css({
            'background-color': randomColor
        });
    });

    $(document).on('mouseover', ".circle", function () {
        $(this).css({
            opacity: 0.7
        });
    });

    $(document).on('mouseleave', ".circle", function () {
        $(this).css({
            opacity: 1
        });
    });

    $("#start").click(function () {
        clearInterval(growing);
        $(".circle").not(':first').remove();
        randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
        $(".circle").css({
            'background-color': randomColor
        });
        let width = $("#width").val();
        amount = $("#amount").val();
        interval = $("#interval").val();
        for (let i = 1; i < parseInt($("#circleQty").val()); i++) {
            randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
            $(".circle:first").clone().css({
                'background-color': randomColor
            }).appendTo('article');
        }
        $(".circle").show();
        $(".circle").css({
            'width': width,
            'height': width,
        });
        growing = setInterval(sizeUp, parseInt(interval));
    });

    function sizeUp() {
        let newWidth = parseInt($(".circle").width()) + parseInt(amount) + "px";
        $(".circle").css({
            'width': newWidth,
            'height': newWidth,
        });
    }
});