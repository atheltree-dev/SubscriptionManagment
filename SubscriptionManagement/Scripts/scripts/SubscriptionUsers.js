$(document).ready(function () {
    debugger;
    CompanyID = getParameterByName('CompanyID');

    if ($("html").attr("dir") == "rtl") {
        lang = 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json';
    } else {
        lang = "";
    }
    table = $('#usersTable').DataTable({
        "language": {
            "url": lang,
        },

    });
    GetCompanySubscriptonUsers();


});
var CompanyID;
var tr, row, table, lang;

function GetCompanySubscriptonUsers() {

    debugger;
    var result;
    var DTO = { 'CompanyID': CompanyID };
    $.ajax({
        type: "POST",
        url: "/SubscriptionUsers/GetCompanySubscriptonUsers",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger;
            if (data != null) {
                debugger;
                table.destroy();
                FillUsersDataTable(data);
                table = $('#usersTable').DataTable({
                    "language": {
                        "url": lang,
                    },
                });
                debugger;
            }
        },
    });
}


function FillUsersDataTable(objList) {
    debugger;
    $('#usersTable tbody').find('tr').remove();

    if (objList != null && objList.length > 0) {

        for (var i = 0; i < objList.length; i++) {
            var StatusClass;
            var ActiveStatus;
            if (objList[i].Subsc_Status == 0) {
                debugger;
                StatusClass = 'style="color: #2dcd7a;"';
                ActiveStatus = "فعال";
            }
            else if (objList[i].Subsc_Status == 1) {
                debugger;
                StatusClass = 'style="color: #ed5f5f;"';
                ActiveStatus = " غير فعال";

            }

            $('#usersTable  tbody').append(
                '<tr class="odd">' +
                //'<td class="details-control"></td>' +
                '<td class="UserID" UserIDProp="' + objList[i].UserId + '" style="display:none;">' + objList[i].UserId + '</td>' +
                '<td class="UserRecID" UserRecIDProp="' + objList[i].Rec_Id + '" style="display:none;">' + objList[i].Rec_Id + '</td>' +
                '<td class="Status" StatusProp="' + objList[i].Subsc_Status + '" style="display:none;">' + objList[i].Subsc_Status + '</td>' +

                '<td class="sorting_1">' + objList[i].Full_Name + '</td>' +
                '<td class="sorting_1">' + objList[i].Commerical_Name + '</td>' +
                '<td>' + objList[i].UserName + '</td>' +
                '<td class="sorting_1">' + objList[i].Email + '</td>' +
                '<td class="pop_up_opener" data-toggle="modal" data-target="#usersTableModal" ' + StatusClass + ' onclick="UpdateStatus(this)"><span>' + ActiveStatus + '</span>  <i class="fas fa-highlighter"></i></td>' +
                '</tr>'
            );
        }
    }
}



function UpdateStatus(e) {
    debugger;

    $('#UserRecID').val('');
    $('#UserRecID').text('');
    $('#UserID').val('');
    $('#UserID').text('');
    $('#Subscriptionstatus').val('-1').trigger('change');

    $("#UserRecID").val($(e).parents('tr').find('.UserRecID').text());
    $("#UserID").val($(e).parents('tr').find('.UserID').text());
    $("#Subscriptionstatus").val($(e).parents('tr').find('.Status').text()).trigger('change');

}


function SaveUserSubscripton() {
    debugger;
    if ($("#Subscriptionstatus").val() != null && $("#Subscriptionstatus").val() != "-1" && $("#Subscriptionstatus").val() != undefined) {

        var UserID = $("#UserID").val();
        var UserRecID = $('#UserRecID').val();
        var Subscriptionstatus = $("#Subscriptionstatus").val();
        var DTO = { 'UserID': UserID, 'UserRecID': UserRecID, 'Subscriptionstatus': Subscriptionstatus };
        var result;
        $.ajax({
            type: "POST",
            url: "/SubscriptionUsers/SaveUserSubscripton",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {
                $('#CloseModal').click();
                GetCompanySubscriptonUsers();
            }
        });
    }

}
