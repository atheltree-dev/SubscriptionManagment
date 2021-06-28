$(document).ready(function () {
    debugger;
    CompanyID = getParameterByName('CompanyID');

    if ($("html").attr("dir") == "rtl") {
        lang = 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json';
    } else {
        lang = "";
    }
    table = $('#statustTable').DataTable({
        "language": {
            "url": lang,
        },

    });


    // Add event listener for opening and closing details
    $('#statustTable tbody').on('click', 'td.details-control', function () {
        debugger;
        tr = $(this).closest('tr');
        row = table.row(tr);

        if (row.child.isShown()) {
            debugger;
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            debugger;
            // Open this row
            //row.child(format(row.data())).show();
            //tr.addClass('shown');
            var td = $(this).parent('tr').find('.Subscription_Id').text();
            GetChildCompanySubscripton(td);
        }
    });
    GetParentCompanySubscripton();

    $('#btnAddSubscription').attr('href', '/CompanySubscription/AddCompanySubscription?CompanyID=' + CompanyID + '')







});
var CompanyID;
function GetParentCompanySubscripton() {
    debugger;
    var result;
    var DTO = { 'CompanyID': CompanyID };
    $.ajax({
        type: "POST",
        url: "/CompanySubscription/GetParentCompanySubscripton",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger;
            if (data != null) {
                debugger;
                table.destroy();
                FillDataTable(data);
                table = $('#statustTable').DataTable({
                    "language": {
                        "url": lang,
                    },
                });
                debugger;
            }
        }
    });
}


var tr, row, table, lang;
function FillDataTable(objList) {
    debugger;
    $('#statustTable tbody').find('tr').remove();

    if (objList != null && objList.length > 0) {

        for (var i = 0; i < objList.length; i++) {

            var StatusClass;
            var ActiveStatus;
            if (objList[i].Status == 0) {
                debugger;
                StatusClass = 'style="color: #2dcd7a;"';
                ActiveStatus = "فعال";
            }
            else if (objList[i].Status == 1) {
                debugger;
                StatusClass = 'style="color: #000;"';
                ActiveStatus = "انتهت الصلاحية";

            }
            else if (objList[i].Status == 2) {
                debugger;
                StatusClass = 'style="color: #ed5f5f;"';
                ActiveStatus = "لم يتم الدفع";

            }
            else if (objList[i].Status == 3) {
                debugger;
                StatusClass = 'style="color: #FF0000;"';
                ActiveStatus = "انتهى الاشتراك";

            }

            $('#statustTable  tbody').append(
                '<tr class="odd">' +
                '<td class="details-control"></td>' +
                '<td class="Subscription_Id" subProp="' + objList[i].Subscription_Id + '" style="display:none;">' + objList[i].Subscription_Id + '</td>' +
                '<td class="RecID" RecIDProp="' + objList[i].Rec_Id + '" style="display:none;">' + objList[i].Rec_Id + '</td>' +
                '<td class="Status" StatusProp="' + objList[i].Status + '" style="display:none;">' + objList[i].Status + '</td>' +


                '<td class="sorting_1">' + objList[i].Commerical_Name + '</td>' +
                '<td>' + objList[i].Subscription_Code + '</td>' +
                '<td>' + WriteDateToPageNum(objList[i].Start_Date) + '</td>' +
                '<td>' + WriteDateToPageNum(objList[i].End_Date) + '</td>' +
                '<td>' + objList[i].Subscription_Count + '</td>' +
                //'<td>مجموعه</td>'+
                '<td class="pop_up_opener" data-toggle="modal" data-target="#usersTableModal" ' + StatusClass + '  onclick="UpdateStatus(this);"><span>' + ActiveStatus + '</span>  <i class="fas fa-highlighter"></i></td>' +
                '<td>مجموعة</td>' +
                '<td><a href="./billsTable.html" class="table_link">الفواتير</a></td>' +
                '</tr>'

            )
        }
    }
}

function UpdateStatus(e) {
    debugger;

    $('#SubscriptionRecID').val('');
    $('#SubscriptionRecID').text('');
    $('#SubscriptionID').val('');
    $('#SubscriptionID').text('');
    $('#Subscriptionstatus').val('-1').trigger('change');
    $("#SubscriptionRecID").val($(e).parents('tr').find('.RecID').text());
    $("#SubscriptionID").val($(e).parents('tr').find('.Subscription_Id').text());
    $("#Subscriptionstatus").val($(e).parents('tr').find('.Status').text()).trigger('change');

}

function SaveCompanySubscripton() {
    debugger;
    if ($("#Subscriptionstatus").val() != null && $("#Subscriptionstatus").val() != "-1" && $("#Subscriptionstatus").val() != undefined) {

        var SubscriptionID = $("#SubscriptionID").val();
        var SubscriptionRecID = $('#SubscriptionRecID').val();
        var Subscriptionstatus = $("#Subscriptionstatus").val();
        var DTO = { 'SubscriptionID': SubscriptionID, 'SubscriptionRecID': SubscriptionRecID, 'Subscriptionstatus': Subscriptionstatus };
        var result;
        $.ajax({
            type: "POST",
            url: "/CompanySubscription/SaveCompanySubscripton",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {
                $('#CloseModal').click();
                GetParentCompanySubscripton();
            }
        });
    }

}


function GetChildCompanySubscripton(SubscriptionID) {

    debugger;
    var result;
    var DTO = { 'SubscriptionID': SubscriptionID };
    $.ajax({
        type: "POST",
        url: "/CompanySubscription/GetChildCompanySubscripton",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger;
            if (data != null && data.length > 0) {
                console.log(data);
                row.child(AddSecondTable()).show();
                AppendSecondTable(data);
                tr.addClass('shown');

            }
        },
    });
}


function AddSecondTable(d) {
    debugger;
    // `d` is the original data object for the row
    return '<table class="sucond_table" cellpadding="5" cellspacing="0" border="0" style="width: 100%;">' +
        '<thead>' +
        '<tr >' +
        ' <th class="sorting sorting_asc" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style=display:none;"width: 20%;" aria-sort="ascending">     الاسم </th>' +
        ' <th class="sorting sorting_asc" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style="display:none;width: 20%;" aria-sort="ascending">     الاسم </th>' +
        ' <th class="sorting sorting_asc" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style="display:none;width: 20%;" aria-sort="ascending">     الاسم </th>' +

        ' <th class="sorting sorting_asc" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style="width: 20%;" aria-sort="ascending">     الاسم </th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 10%;">الكود</th>' +
        ' <th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 20%;">     تاريخ البداية </th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 20%;">تاريخ النهايه</th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 10%;">العدد</th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 50%;">الحاله</th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 30%;">النوع</th>' +
        '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 30%;">اذهب</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'


    '</tbody>' +

        '</table>' +
        '<hr>';

}


function AppendSecondTable(objList) {
    debugger;
    $('.sucond_table tbody').find('tr').remove();

    if (objList != null && objList.length > 0) {

        for (var i = 0; i < objList.length; i++) {


            var StatusClass;
            var ActiveStatus;
            if (objList[i].Status == 0) {
                debugger;
                StatusClass = 'style="color: #2dcd7a;"';
                ActiveStatus = "فعال";
            }
            else if (objList[i].Status == 1) {
                debugger;
                StatusClass = 'style="color: #000;"';
                ActiveStatus = "انتهت الصلاحية";

            }
            else if (objList[i].Status == 2) {
                debugger;
                StatusClass = 'style="color: #ed5f5f;"';
                ActiveStatus = "لم يتم الدفع";

            }
            else if (objList[i].Status == 3) {
                debugger;
                StatusClass = 'style="color: #FF0000;"';
                ActiveStatus = "انتهى الاشتراك";

            }

            $('.sucond_table  tbody').append(
                '<tr>' +

                '<td class="Subscription_Id" subProp="' + objList[i].Subscription_Id + '" style="display:none;">' + objList[i].Subscription_Id + '</td>' +
                '<td class="RecID" RecIDProp="' + objList[i].Rec_Id + '" style="display:none;">' + objList[i].Rec_Id + '</td>' +
                '<td class="Status" StatusProp="' + objList[i].Status + '" style="display:none;">' + objList[i].Status + '</td>' +
                '<td>' + objList[i].Commerical_Name + '</td>' +
                /*    '<td>' + d.name + '</td>' +*/
                '<td>' + objList[i].Subscription_Code + '</td>' +
                '<td>' + WriteDateToPageNum(objList[i].Start_Date) + '</td>' +

                '<td>' + WriteDateToPageNum(objList[i].End_Date) + '</td>' +

                '<td>' + objList[i].Subscription_Count + '</td>' +
                '<td class="pop_up_opener" data-toggle="modal" data-target="#usersTableModal" ' + StatusClass + '  onclick="UpdateStatus(this);"><span>' + ActiveStatus + '</span>  <i class="fas fa-highlighter"></i></td>' +

                '<td>فرد</td>' +

                '<td class="has_link">' + '<a href="#" class="table_link">الفواتير</a>' + '</td>' +

                '</tr>'

            )
        }
    }
}
