$(document).ready(function () {
    // datepicke
    $(".date_picker").datepicker();

    // select2
    $(".select2").select2();


    // dropify
    $(".dropify").dropify();


    // blur form

    const loginClass = '.login_form .form-group input';

    $(loginClass).on("focus", function () {
        $(this).parent().addClass('up');
    });

    $(loginClass).on("blur", function () {
        if ($(this).val()) {
            $(this).parent().addClass('up');
        }
        if (!$(this).val()) {
            $(this).parent().removeClass('up');
        }
    });


    //AJAX CALL 
    function AjaxCall(type, url, data, async, onSuccess, onComplete) {
        $.ajax({
            url: url,
            type: type ? type : 'POST',
            data: JSON.stringify(data),
            async: async ? async : true,
            dataType: 'JSON',
            contentType: 'application/json;charset=utf-8',
            success: function (res) {
                if (onSuccess) { onSuccess(res); }
            },
            complete: function (res) {
                if (onComplete) { onComplete(res); }
            },
            error: function (error) {
                console.log('Ajax Call Error : ' + error);
            }
        });
    }



    // dataTable

    //if ($("html").attr("dir") == "rtl") {
    //  var lang = 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json';
    //} else {
    //var lang = "";
    //}

    //  var table = $('.dataTable').DataTable( {
    //    "language": {
    //        "url": lang,
    //    },

    //      // "ajax": "../ajax/data/objects.txt",
    //      // "columns": [
    //      //     {
    //      //         "className":      'details-control',
    //      //         "orderable":      false,
    //      //         "data":           null,
    //      //         "defaultContent": ''
    //      //     },
    //      //     { "data": "name" },
    //      //     { "data": "position" },
    //      //     { "data": "office" },
    //      //     { "data": "salary" }
    //      // ],
    //      // "order": [[1, 'asc']]
    //  } );














    //// Add event listener for opening and closing details
    //$('.dataTable tbody').on('click', 'td.details-control', function () {
    //    debugger;
    //    var tr = $(this).closest('tr');
    //    var row = table.row( tr );

    //    if (row.child.isShown()) {
    //        debugger;
    //        // This row is already open - close it
    //        row.child.hide();
    //        tr.removeClass('shown');
    //    }
    //    else {
    //        debugger;
    //        // Open this row
    //        row.child(format(row.data()) ).show();
    //        tr.addClass('shown');
    //    }
    //} );



























    // toggle-password

    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".log-in-button").click(function () {

        if (input.attr("type") == "text") {
            input.attr("type", "password");
        } else {
            input.attr("type", "password");
        }
    });













});