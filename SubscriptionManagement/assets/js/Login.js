$(document).ready(function () {

    if (getCookie("UserNameCookie") != null) {

        $('#txtUserName').val(getCookie("UserNameCookie"));
    }
    if (getCookie("PasswordCookie") != null) {
        $('#txtPassword').val(getCookie("PasswordCookie"));
    }
    if (getCookie("LangCookie") != null) {

        $("#chkLangEn").prop("checked", getCookie("LangCookie") == "en");
        $("#chkLangAr").prop("checked", getCookie("LangCookie") == "ar");

    }
    $("#Submit-btn").click(function () { forgetPassword() });

});

var varGLang;

function ckeckUserNameAndPassword() {
    debugger;
    var txtusername = $('#txtUserName').val();
    var txtPassword = $('#txtPassword').val();
    var strLang;
    if ($("#chkLangEn").prop("checked")) {
        strLang = "en";
    } else {
        strLang = "ar";
    }
    debugger;
    var DTO = { 'varusername': txtusername, 'varPassword': txtPassword, 'strLang': strLang};
    debugger;
    var result;
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/ckeckUserNameAndPassword",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        //beforeSend: function () { disableScreen(); },
        async: true,
        success: function (data) {
            debugger;
            if (data.d != null) {
                var varstrLang;
                debugger;
                if ($("#chkLangEn").prop("checked")) {
                    varstrLang = "en";
                } else {
                    varstrLang = "ar";
                }

                varGLang = varstrLang;
                SetUserData(data.d);
                gotoApp();

            }

            else {
                debugger;
                $('#txtPassword').addClass('rong_input');
                $('#txtUserName').addClass('rong_input');
                $('.rong_passrwoed').removeAttr('style');
            }

        },

        //error: function (xhr, status, error) {
        //    debugger;
        //    if (xhr.status === 401)
        //        location.reload();
        //}

    });



}


function SetBranchAndCompanyName(Company_Id, Branch_Id) {
    var strCompanyNameEN = "";
    var strBranchNameEN = "";
    var strCompanyName = "";
    var strBranchName = "";
    debugger;
    var DTO = { 'Company_Id': Company_Id, 'Branch_Id': Branch_Id };
    debugger;
    var result;
    var res;
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/GetBranchAndCompanyName",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
            $.each(result, function (i, l) {
                debugger;
                strCompanyNameEN = result[i].Company_NameEn;
                strBranchNameEN = result[i].Branch_NameEn;
                strCompanyName = result[i].Company_Name;
                strBranchName = result[i].Branch_Name
            });


            var varstrLang;
            debugger;
            if ($("#chkLangEn").prop("checked")) {
                varstrLang = "en";
            } else {
                varstrLang = "ar";
            }

            varGLang = varstrLang;

            debugger;
            var DTO1 = { 'strCompanyName': strCompanyName, 'strBranchName': strBranchName, 'strCompanyNameEN': strCompanyNameEN, 'strBranchNameEN': strBranchNameEN, 'strLang': varstrLang };
            debugger;
            var result;
            $.ajax({
                type: "POST",
                url: $(location).attr('href') + "/SetBranchAndCompanyName",
                data: JSON.stringify(DTO1),
                contentType: "application/json",
                dataType: "json",
                async: false,
                success: function (data) {
                    res = data.d;

                }


            });
            return res;

        },
        //complete: function () {
        //    enableScreen();
        //}
    });
    return res;
    //  return result;
}



function gotoApp() {
    debugger;
    setCookie("LangCookie", varGLang, 1);

    window.location.replace("/Index.aspx");

}
