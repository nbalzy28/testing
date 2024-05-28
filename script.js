$(document).ready(function () {
    // Drag and drop from Employee Pad to Map Table
    $('.card').on("dragstart", function (event) {
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });

    $('.cube').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text');
            $("#" + data).appendTo($(this));
        }
    });

    $('.pad').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text');
            $("#" + data).appendTo($(this));
        }
    });

    // Add new employee functionality
    $('#addEmployeeButton').click(function() {
        var newEmployeeName = $('#newEmployeeName').val();
        if (newEmployeeName !== '') {
            var newEmployeeButton = $('<button class="card" draggable="true">' + newEmployeeName + '</button>');
            newEmployeeButton.appendTo('.pad');
            $('#newEmployeeName').val('');
        }
    });

    // Hover effect for about cards
    $('.card').mouseenter(function () {
        $('.aboutTable').css('display', 'table');
    });
    $('.card').mouseleave(function () {
        $('.aboutTable').css('display', 'none');
    });

    // Drag the Map Table in the container jQueryUI
    $(".map").draggable();
    containment: "parent";

    // About modal
    $(".card").dblclick(function () {
        $("#aboutPopup").css('display', 'block');
    });

    $(".close").click(function () {
        $("#aboutPopup").css('display', 'none');
    });
});