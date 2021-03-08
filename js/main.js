$(document).ready(function() {

    /* Rimuovo inizialmente la classe active in modo da far
    scomparire il menu a tendina quando si passa con il mouse 
    su un'altra */
    $(".dropdown").mouseenter(function() {
        $(".dropdown_menu").removeClass("active");
        $(this).find(".dropdown_menu").addClass("active");
    });

    /* Cliccando su una qualsiasi parte del documento il 
    dropdown menu scompare */
    $(document).click(function() {
        $(".dropdown_menu").removeClass("active");
    });
});