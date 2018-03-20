$(document).ready(function () {
    $("#sales").on("click", function (){
        $('#newSale').modal('show');
        $('#sales').attr({
            src: 'img/shopping-cart.svg'
        });
    });
    $("#addEntry").on("click", function (){
        $('#newEntry').modal('show');
    });
    $("#lostStock").on("click", function (){
        $('#losses').modal('show');
    });
    $("#printList").on("click", function (){
        $('#print').modal('show');
    });
    $("#marketing").on("click", function (){
        $('#cities').modal('show');
    });
});