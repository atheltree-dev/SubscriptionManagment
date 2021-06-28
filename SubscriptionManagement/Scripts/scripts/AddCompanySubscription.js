$(document).ready(function () {
    debugger;
    CompanyID = getParameterByName('CompanyID');
});
var CompanyID;

function AddUserSubscripton() {
    debugger;
    var ObjCmpSubscriptions = {};

    ObjCmpSubscriptions.Subscription_Code = $("#Subscription_Code").val();
    ObjCmpSubscriptions.IsGroup = 0;
    ObjCmpSubscriptions.Comapny_Id = CompanyID;
    ObjCmpSubscriptions.Subscription_Count = $('#Subscription_Count').val();
    ObjCmpSubscriptions.Start_Date = ReadDateFromPageNum($('#Start_Date').val());
    ObjCmpSubscriptions.End_Date = ReadDateFromPageNum($('#End_Date').val());
    ObjCmpSubscriptions.Status = $('#Status').val();

    debugger;
    var DTO = { 'ObjCmpSubscriptions': ObjCmpSubscriptions};
    var result;
    $.ajax({
        type: "POST",
        url: "/CompanySubscription/AddCompanySubscription",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger;
            if (data == true) {
                window.location.href = '/CompanySubscription?CompanyID=' + CompanyID;

            }
        }
    });
}


