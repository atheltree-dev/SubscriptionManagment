$(document).ready(function () {
    debugger;
    GetAllCustomerCompany();
});

function GetAllCustomerCompany() {
    debugger;
    var result;
    $.ajax({
        type: "POST",
        url:"Home/GetAllCustomerCompany",
        data: '',
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger;
            if (data != null) {
                FillDataTable(data)
            }
        },
    });
}


//function refreshUsers() {
//    $('#UsersList').load('/CPanel/GetUsers', () => { });
//}

function FillDataTable(objList) {
    $('#CustomerCompany').html("");
    debugger;
    if (objList != null && objList.length > 0) {
        debugger;

        for (var i = 0; i < objList.length; i++) {
            $('#CustomerCompany').append(
                ' <div class="col-lg-4 col-md-6">' +
                ' <div class="subscriptions_box">' +
                '<div class="subscriptions_box_content">' +
                '<img src="'+objList[i].LogoPath+'" alt="" class="img-fluid logo_img" />' +
                '<h4 class="title_text"><span class="text">' + objList[i].Commerical_Name_En +'</span></h4>' +
                ' <h4 class="title_text"><span class="text">' + objList[i].Commerical_Name +'</span></h4>' +
                '<div class="number_box">' +
                ' <h4 class="date_title"><i class="fas fa-calendar-week"></i><span class="text">' + WriteDateToPageNum(objList[i].Renewal_Date) +'</span></h4>' +
                '</div>' +
                '</div>' +
                '<div class="button_box">' +
                '<a href="/CompanySubscription/Index?CompanyID=' + objList[i].Id+'" class="box_link">' +
                ' <span class="text_title">الاشتراكـات</span>' +
              /*  ' <span class="number_text">20</span>' +*/
                '</a>' +
                '<a href="javascript:;" class="box_link">' +
                '<span class="text_title">الفواتـير</span>' +
                //'<span class="number_text">3579</span>' +
                '</a>' +
                '</div>' +
                '<a href="/SubscriptionUsers/Index?CompanyID=' + objList[i].Id +'" class="box_link">' +
                '<span class="text_title">المستخدميــن</span>' +
                //'<span class="number_text">47</span>' +
                '</a>' +
                '</div>' +
                '</div>'
            );
        }
    }

}
