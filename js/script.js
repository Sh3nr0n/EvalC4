$(document).ready(function () {
    $("#sales").on("click", function (){
        $('#newSale').modal('show');
        $('#sales').attr({
            src: 'img/shopping-cart_on.svg'
        });
    });
    $("#addEntry").on("click", function (){
        $('#newEntry').modal('show');
        $('#addEntry').attr({
            src: 'img/plus-circle_on.svg'
        });
    });
    $("#lostStock").on("click", function (){
        $('#losses').modal('show');
        $('#lostStock').attr({
            src: 'img/minus-circle_on.svg'
        });
    });
    $("#printList").on("click", function (){
        $('#print').modal('show');
        $('#printList').attr({
            src: 'img/print_on.svg'
        });
    });
    $("#marketing").on("click", function (){
        $('#cities').modal('show');
        $('#marketing').attr({
            src: 'img/map-marker-alt_on.svg'
        });
    });
});