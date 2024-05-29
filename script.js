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

    // Get the modal
var modal = document.getElementById("infoModal1");

// Get the button that opens the modal
var btn = document.getElementById("A1").querySelector("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});