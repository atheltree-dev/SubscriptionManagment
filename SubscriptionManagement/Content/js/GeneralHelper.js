
//var GLang= "EN";
var GLang;

var GetContactWithGrade;
var accessToken = '';
var baseURI = '';


$(document).ready(function ()
{
  
		 $('.page-quick-sidebar-toggler').click(function () {
        $('.fast_select_tree').hide();
    });												
    //if ((($('#SpnBranch').attr("tag") == "" || $('#SpnBranch').attr("tag") == undefined)) || (($('#SpnCompany').attr("tag") == "" || $('#SpnCompany').attr("tag") == undefined)))
    //{
    //    window.location.replace(document.location.host + "/login.aspx");
    //}

   // GetSessionLang();
    //alert(GLang);
		// GetLogo();
    
}); 
function CustomAlertConfirmLogout(Message,PageNextName)
{
    //var customdialog = bootbox.dialog({
    //    title: 'User',
    //    message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'

    //});
    bootbox.confirm({
        title: 'User Authntication And Authorization',
        size: "large",
        message: Message,
        callback: function (result)
        {
         
            window.location.replace($(location).attr('origin') + '/' + PageNextName + ".aspx");

          //  window.location.replace($(location).attr('origin') + '/' + "Login.aspx");
            
            /* result is a boolean; true = OK, false = Cancel*/
        }
    });

}

function GetRolesByUser(strCompanyNo, strBranchNo, EmpHdrId, pageName)
{
    ////debugger;
    var berardata
        //= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiI1NDFmY2M2ZS03ZDhmLTQ5NmYtOTIzYi00MzEyNDdmZDE5NDYiLCJ1bmlxdWVfbmFtZSI6IkFobWVkcjIzMDQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiIxZjc1YWIzYy1mYWIwLTRjZDQtOTUwZS02NTIyMjg5MWFlNTQiLCJyb2xlIjpbIkFkbWluIiwiU3VwZXJBZG1pbiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjEwMjQiLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTQ5Mjk0OTEwNywibmJmIjoxNDkyODYyNzA3fQ.VGAL448_eR2nb3yLLt_q0RypU0Nlc6tqWFeJQGi3z2k'
    if (accessToken == '')
    {
       
        ////debugger;
       berardata=GetDataFromLocalStorge();
    
       
    } else {
        berardata = accessToken;
    }
    ////debugger;
    var DTO = { 'Company_Id': strCompanyNo, 'Branch_Id': strBranchNo, 'User_Id': EmpHdrId, 'PageName': pageName };
    var Result = 0;
    $.ajax({
        type: "POST",
        //url: $(location).attr('href') + "/GetEmployeeForNotifyDoc",
        url: GeneralHelperAjaxUrl + "GetRolePageByUser",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) 
        {

            if (data.d != null) {
                ////debugger;
                Result = data.d;


                // alert(newId);
            } 

        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
            xhr.setRequestHeader('Authorization', 'Bearer ' + berardata)
        },
        Accept: "application/json"
    });
    return Result;

}

function CheckUserAuthontication()
{
    ////debugger;
    var berardata
    //= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiI1NDFmY2M2ZS03ZDhmLTQ5NmYtOTIzYi00MzEyNDdmZDE5NDYiLCJ1bmlxdWVfbmFtZSI6IkFobWVkcjIzMDQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiIxZjc1YWIzYy1mYWIwLTRjZDQtOTUwZS02NTIyMjg5MWFlNTQiLCJyb2xlIjpbIkFkbWluIiwiU3VwZXJBZG1pbiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjEwMjQiLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTQ5Mjk0OTEwNywibmJmIjoxNDkyODYyNzA3fQ.VGAL448_eR2nb3yLLt_q0RypU0Nlc6tqWFeJQGi3z2k'
    if (accessToken == '')
    {

        ////debugger;
       berardata = GetDataFromLocalStorge();


    } else {
        berardata = accessToken;
    }
    ////debugger;
   
    var Result = 0;
    $.ajax({
        type: "POST",
        //url: $(location).attr('href') + "/GetEmployeeForNotifyDoc",
        url: GeneralHelperAjaxUrl + "CheckUserAuthontication",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {

            if (data.d != null) {
                ////debugger;
                Result = data.d;


                // alert(newId);
            }

        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
            xhr.setRequestHeader('Authorization', 'Bearer ' + berardata)
        },
        Accept: "application/json"
    });
    return Result;

}


function FunGetRolesByUser(roles)
{
    var result = false
    ////debugger;
    var berardata
    //= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiI1NDFmY2M2ZS03ZDhmLTQ5NmYtOTIzYi00MzEyNDdmZDE5NDYiLCJ1bmlxdWVfbmFtZSI6IkFobWVkcjIzMDQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiIxZjc1YWIzYy1mYWIwLTRjZDQtOTUwZS02NTIyMjg5MWFlNTQiLCJyb2xlIjpbIkFkbWluIiwiU3VwZXJBZG1pbiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjEwMjQiLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTQ5Mjk0OTEwNywibmJmIjoxNDkyODYyNzA3fQ.VGAL448_eR2nb3yLLt_q0RypU0Nlc6tqWFeJQGi3z2k'
    if (accessToken == '') {

        ////debugger;
        berardata = GetDataFromLocalStorge();


    } else {
        berardata = accessToken;
    }
    ////debugger;

    var Result = 0;
   
    var DTO = { 'roles': roles }
    $.ajax({
        type: "POST",
        //url: $(location).attr('href') + "/GetEmployeeForNotifyDoc",
        url: GeneralHelperAjaxUrl + "GetRolesByUser",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {

            if (data.d != null) {
                ////debugger;
                Result = data.d;


                // alert(newId);
            }

        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
            xhr.setRequestHeader('Authorization', 'Bearer ' + berardata)
        },
        Accept: "application/json"
    });
    return Result;



}

function GetNewToken(UserName, Password)
{
    debugger;
    var loginData =
    {
        'grant_type': 'password',
        'username': UserName,
        'password': Password
        
    }

    $.ajax({
        type: 'POST',
        url: '/oauth/Token',
        headers: { "Accept": "application/json" },
        contentType: "application/x-www-form-url; charset=urf-8",
        data: loginData,
        async: false,
    }).done(function (data)
    {
        debugger;
        ////debugger;
        accessToken = data.access_token;

        SaveInLocalStorge(accessToken);
        //self.user(data.userName);
        // Cache the access token in session storage.
       // sessionStorage.setItem(tokenKey, data.access_token);
    }).fail();

}

function SaveInLocalStorge(objitem)
{
    debugger;
    localStorage.setItem("ObjAccesstocken", objitem);
}

function GetDataFromLocalStorge()
{
    var objaccesstocken;
    objaccesstocken = localStorage.getItem("ObjAccesstocken");
    return objaccesstocken;

}

function getToken(UserName,Password)
{
    debugger;
    var url_base =
            //'http://localhost:1024/oauth/token';

            'http://86.51.7.26:9090/oauth/token';
    ////debugger;
    // The auth_token is the base64 encoded string for the API 
    // application.
   // var auth_token = 'AppName@VendorName:BusinessUnit';
   // auth_token = window.btoa(auth_token);
    var requestPayload = {
        // Enter your inContact credentials for the 'username' and 
        // 'password' fields.
        'grant_type': 'password',
        'username': UserName,
        'password': Password,
        'scope': ''
    }
    $.ajax({
        'url': url_base,
        'type': 'POST',
        'content-Type': 'application/x-www-form-url; charset=urf-8',
        'dataType': 'json'
        ,
        'headers':
          {
    "Accept": "application/json"

            //// Use access_token previously retrieved from inContact token 
            //// service.
            //'Authorization': make_base_auth(UserName, Password) //'basic ' + auth_token
        }
        ,'data': requestPayload,
        'success': function (result)
        {
            //Process success actions
            accessToken = result.access_token;
            ////debugger;
            baseURI = result.resource_server_base_uri;
            bootbox.alert('Success!\r\nAccess Token:\r' + accessToken +
                '\r\nBase URI:\r' + baseURI)
            //document.getElementById('pageDiv').innerHTML = result.access_token;
            return result;
        },
        'error': function (XMLHttpRequest, textStatus, errorThrown) {
            ////debugger;
            //Process error actions
            bootbox.alert('Error: ' + errorThrown);
            console.log(XMLHttpRequest.status + ' ' +
                XMLHttpRequest.statusText);
            return false;
        }
    });

}

function make_base_auth(user, password)
{
    ////debugger;
    var tok = user + ':' + password;
    var hash = window.btoa(tok);
    ////debugger;
    return "Basic " + hash;

}

function FunGetCalcWithGrade()
{
    GetContactWithGrade = FunctionCalcWithGrade();
    GetSessionLang();
    
    //alert(GetContactWithGrade);
}
function FunctionCalcWithGrade()
{
    var strcomapny = $('#SpnCompany').attr("tag");
    var strbranch = $('#SpnBranch').attr("tag");
    
   
    var DTO = { 'strCompany': strcomapny, 'strBranch': strbranch };
    var Result = 0;
    $.ajax({
        type: "POST",
        //url: $(location).attr('href') + "/GetEmployeeForNotifyDoc",
        url: GeneralHelperAjaxUrl + "GetCalcWithGrade",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {

            if (data.d != null)
            {
               
                Result = data.d;

                // alert(newId);
            }

        }

    });
    return Result;
}




function getParameterByName(name)
{
    ////debugger;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function GetSessionLang()
{
    
        var result;
        $.ajax({
            type: "POST",
            url: GeneralHelperAjaxUrl + "GetSessionLang",
            data: '',
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {
                result = data.d;
                GLang = data.d;
            }

        });

      //  refresh();

        //var pagename;
        // pagename ="~/index"+ e +".aspx";


        // window.location.replace(pagename);

}

function SetSessionLang(e)
{
    
    if (e != "") {
        GLang = e;
     
        var DTO = { 'strlang': e };
        var result;
        $.ajax({
            type: "POST",
            url: GeneralHelperAjaxUrl + "SetSessionLang",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {
                result = data.d;
            }

        });
        
        refresh();

        //var pagename;
        // pagename ="~/index"+ e +".aspx";
       
         
        // window.location.replace(pagename);
        
    }
    
}
function gotoLoginScren(vldprvIslogin)
{
     
    var DTO = { 'prvIslogin': vldprvIslogin };
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GotoLoginScreen",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            //if (data.d != null) {
            //    result = data.d;
            //}
        }


    });

    

}

function GetImageUser()
{
    var imagname = 'User.png';
   // var my_path = $(location).attr('origin') + '/' + "AttachFilesApp/EmployeeImages/" + imagname;


    var strempSerialNo = $('#imguser').attr("tag");
    var strCompany = $('#SpnCompany').attr("tag");
    var strBranch =$('#SpnBranch').attr("tag");
    
    var DTO = { 'empSerialNo': strempSerialNo,'strCompany':strCompany , 'strBranch':strBranch };
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GetImageUser",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) 
        {
            if (data.d != null) {
    
                imagname = data.d;
            }
        }


    });

    //var my_path = $(location).attr('origin') + '/' + "AttachFilesApp/EmployeeImages/" + imagname;
    var my_path = $(location).attr('origin') + '/' + "AttachFilesApp/EmployeeImages/" + imagname;
    
    
    $('#imguser').attr("src", my_path);
}






function GetNextNumber(OldNum) {
    if (OldNum === null) {
        return 1;
    }
    else {
        return OldNum.toString().replace(Number(OldNum), Number(OldNum) + 1);
    }
}

function checkTabTag(control) {
    var result = true;
    if ($(control).attr('disabled') == "disabled") {
        result = false;
    }
    if ($(control).css('display') == "none" && $("#" + $(control).attr('id') + "_chosen").length == 0) {
        result = false;
    }
    else if ($("#" + $(control).attr('id')).is('select') && $("#" + $(control).attr('id') + " option").length == 0) {
        result = false;
    }
    else if ($(control).attr('id') === undefined && $(control).parent('.chosen-search').length > 0) {
        result = false;
    }
    else if ($(control).attr('id') == "__VIEWSTATE") {
        result = false;
    }
    else if ($(control).hasClass('chosen-single')) {
        result = false;
    }
    return result;
}

function tabOnEnter() {
    $('input,select,a').on("keypress", function (e) {

        if (e.keyCode == 13) {
            var inputs = $(this).parents("form").eq(0).find("input,a,select,a");
            var idx = inputs.index(this);
            for (var i = idx; i < inputs.length; i++) {

                if (idx == inputs.length - 1) {
                    if (checkTabTag(inputs[0])) {
                        inputs[0].select();
                        break;
                    }
                    else {
                        idx = 0;
                        i = -1;
                    }
                }
                else if (checkTabTag(inputs[i + 1])) {
                    if ($("#" + $(inputs[i + 1]).attr('id') + "_chosen").length > 0) {
                        $(inputs[i + 1]).trigger('chosen:activate');
                        break;
                    }
                    else {
                        inputs[i + 1].focus();
                    }
                    break;
                }
            }
        }
    });
    $('select').on('change', function (evt, params) {
        var event = jQuery.Event("keypress");
        event.which = 13;
        event.keyCode = 13;
        $("#" + $(this).attr('id')).trigger(event);
    });


}

function FillGeneralCobmboSelectAll(selectId, StrId, StrName, StrTblName, StrWhere)
{
    debugger;
    var AllData = GetAllGeneralComboData(StrId, StrName, StrTblName, StrWhere);
    debugger;
    if (AllData != null) {
        $('#' + selectId).find('option').remove();
        $('#' + selectId).append('<option value="-1">Select</option>');
        //$('#' + selectId).append('<option value=""></option>');
        for (var i = 0; i < AllData.length; i++)
        {
            //if (i == 0)
            //{
            //    debugger;
            //    $('#' + selectId).append('<option value="0">Select</option>');
            //} else
            //{
                $('#' + selectId).append('<option value="' + AllData[i].Id + '">' + AllData[i].Name + '</option>');
            //}
            
            
        }
       // $('#' + selectId).trigger("chosen:updated");
    }

}

function GetAllGeneralComboData(StrId, StrName, StrTblName, StrWhere)
{
    debugger;
    var result;
    var DTO = { 'StrFldId': StrId, 'StrFldName': StrName, 'StrTblName': StrTblName, 'StrWhere': StrWhere };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FillGeneralComboAll",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {
            //debugger;
            result = data.d;
        }

    });

    return result;
}


function FillGeneralCobmboSelectAllWithOutCondtion(selectId, StrId, StrName, StrTblName, StrWhere) {

    var AllData = GetAllGeneralComboDataWithOutCondtion(StrId, StrName, StrTblName, StrWhere);
    // //////debugger;
    if (AllData != null) {
        $('#' + selectId).find('option').remove();
        $('#' + selectId).append('<option value="-1">Select</option>');
        //$('#' + selectId).append('<option value=""></option>');
        for (var i = 0; i < AllData.length; i++)
        {
            $('#' + selectId).append('<option value="' + AllData[i].Id + '">' + AllData[i].Name + '</option>');
        }
        // $('#' + selectId).trigger("chosen:updated");
    }

}


function GetAllGeneralComboDataWithOutCondtion(StrId, StrName, StrTblName, StrWhere)
{
    var result;
    var DTO = { 'StrFldId': StrId, 'StrFldName': StrName, 'StrTblName': StrTblName, 'StrWhere': StrWhere };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FillGeneralComboAllWithOutCondtion",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {
            result = data.d;
        }

    });

    return result;
}



function FillEmployeeBySerialAndRoleWithShow(selectId, Company_Id, Branch_Id, EmpSerialNo) {

    var AllData = GetAllFillEmployeeBySerialAndRoleWithShow(Company_Id, Branch_Id, EmpSerialNo);
    // //////debugger;
    if (AllData != null) {
        $('#' + selectId).find('option').remove();
        $('#' + selectId).append('<option value="-1">Select</option>');
        //$('#' + selectId).append('<option value=""></option>');
        for (var i = 0; i < AllData.length; i++)
        {
            $('#' + selectId).append('<option value="' + AllData[i].Id + '">' + ((getCookie("LangCookie") == "ar") ? AllData[i].FullNameArabic : AllData[i].Name) + '</option>');
        }
        // $('#' + selectId).trigger("chosen:updated");
    }

}


function GetAllFillEmployeeBySerialAndRoleWithShow(Company_Id, Branch_Id, EmpSerialNo)
{
    var result;
    var DTO = { 'Company_Id': Company_Id, 'Branch_Id': Branch_Id, 'EmpSerialNo': EmpSerialNo};

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FillEmployeeBySerialAndRoleWithShow",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}

function FillEmployeeBySerialAndRoleWithPara(selectId, Company_Id, Branch_Id, EmpSerialNo,StrWhere) {

    var AllData = GetAllFillEmployeeBySerialAndRoleWithPara(Company_Id, Branch_Id, EmpSerialNo,StrWhere);
    // //////debugger;
    if (AllData != null) {
        $('#' + selectId).find('option').remove();
        $('#' + selectId).append('<option value="-1">Select</option>');
        //$('#' + selectId).append('<option value=""></option>');
        for (var i = 0; i < AllData.length; i++) {
            $('#' + selectId).append('<option value="' + AllData[i].Id + '">' + ((getCookie("LangCookie") == "ar") ? AllData[i].FullNameArabic : AllData[i].Name) + '</option>');
        }
        // $('#' + selectId).trigger("chosen:updated");
    }

}


function GetAllFillEmployeeBySerialAndRoleWithPara(Company_Id, Branch_Id, EmpSerialNo,StrWhere) {
    var result;
    var DTO = { 'Company_Id': Company_Id, 'Branch_Id': Branch_Id, 'EmpSerialNo': EmpSerialNo, 'StrWhere': StrWhere };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FillEmployeeBySerialAndRoleWithPara",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}



function FillEmployeeBySerialAndRole(selectId, Company_Id, Branch_Id, EmpSerialNo) {

    var AllData = GetAllFillEmployeeBySerialAndRole(Company_Id, Branch_Id, EmpSerialNo);
    // //////debugger;
    if (AllData != null) {
        $('#' + selectId).find('option').remove();
        $('#' + selectId).append('<option value="-1">Select</option>');
        //$('#' + selectId).append('<option value=""></option>');
        for (var i = 0; i < AllData.length; i++) {
            $('#' + selectId).append('<option value="' + AllData[i].Id + '">' + ((getCookie("LangCookie") == "ar") ? AllData[i].FullNameArabic : AllData[i].Name) + '</option>');
        }
        // $('#' + selectId).trigger("chosen:updated");
    }

}


function GetAllFillEmployeeBySerialAndRole(Company_Id, Branch_Id, EmpSerialNo)
{
    var result;
    var DTO = { 'Company_Id': Company_Id, 'Branch_Id': Branch_Id, 'EmpSerialNo': EmpSerialNo};

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FillEmployeeBySerialAndRole",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}







function ChkAnyPendingRequest(StrId, StrTblName, StrWhere)
{
    var result;
    var DTO = { 'FldId1': StrId,'TblName': StrTblName, 'Strwhere': StrWhere };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkAnyPendingRequest",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}




function FunChkJobIdIsIdentity(jobId, Company_Id, Branch_Id)
{
    var result;
    var DTO = { 'jobId': jobId, 'Company_Id': Company_Id, 'Branch_Id': Branch_Id};

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkJobIdIsIdentity",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}


function FunChkEmailIsIdentity(StrEmail, Company_Id, Branch_Id)
{
    ////debugger;
    var result;
    var DTO = { 'StrEmail': StrEmail, 'Company_Id': Company_Id, 'Branch_Id': Branch_Id };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkEmailIsIdentity",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}



function FunChkEmployeeWithUserIsIdentity(StrEmpSerialNo, Company_Id, Branch_Id) {
    ////debugger;
    var result;
    var DTO = { 'StrSerialNo': StrEmpSerialNo, 'Company_Id': Company_Id, 'Branch_Id': Branch_Id };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkEmployeeWithUserIsIdentity",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {
            result = data.d;
        }

    });

    return result;
}

function FunChkUserNameIsIdentity(StrUserName, Company_Id, Branch_Id) {
    ////debugger;
    var result;
    var DTO = { 'StrUserName': StrUserName, 'Company_Id': Company_Id, 'Branch_Id': Branch_Id };

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkUserNameIsIdentity",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}




function refresh() {
    
    setTimeout("location.reload(true);", 100);
}


function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) + "; path=/";
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


//function setCookie(c_name, value, exdays) {
//    var exdate = new Date();
//    exdate.setDate(exdate.getDate() + exdays);
//    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
//    document.cookie = c_name + "=" + c_value;
//}

//function getCookie(c_name) {
//    var i, x, y, ARRcookies = document.cookie.split(";");
//    for (i = 0; i < ARRcookies.length; i++) {
//        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
//        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
//        x = x.replace(/^\s+|\s+$/g, "");
//        if (x == c_name) {
//            return unescape(y);
//        }
//    }
//}

//function GetPublicUserName() {

//    
//    var result;
//    $.ajax({
//        type: "POST",
//        url: GeneralHelperAjaxUrl + "GetPublicUserName",
//        data: '',
//        contentType: "application/json",
//        dataType: "json",
//        async: false,
//        success: function (data) {
//            result = data.d;

//            $('#SpnUserName').text(result);
//        }

//    });
//    return result;


//}

//function GetBranchId() {

//    
//    var result;
//    $.ajax({
//        type: "POST",
//        url: GeneralHelperAjaxUrl + "GetBranchId",
//        data: '',
//        contentType: "application/json",
//        dataType: "json",
//        async: false,
//        success: function (data) {
//            result = data.d;
//            $('#SpnBranch').text(result);

//        }

//    });
//    return result;


//}

//function GetUserNameData() {

//    
//    var result;
//    $.ajax({
//        type: "POST",
//        url: GeneralHelperAjaxUrl + "GetUserNameData",
//        data: '',
//        contentType: "application/json",
//        dataType: "json",
//        async: false,
//        success: function (data) {
//            result = data.d;

//            $('#SpnBranch').text(data.d.BranchNameProp);

//        }

//    });
//    return result;


//}

function ReadDateFromPageNum(PageFormateDate) {
   debugger;
    //PageFormateDate = getFormat(PageFormateDate);
   // PageFormateDate = getFormat(PageFormateDate);
    var dbFormateDate;
    var dateparts = PageFormateDate.split('/');
  
    dateparts[0] = dateparts[0].length == 1 ? "0" + dateparts[0] : dateparts[0];
    dateparts[1] = dateparts[1].length == 1 ? "0" + dateparts[1] : dateparts[1];
    dbFormateDate = dateparts[2] + dateparts[1] + dateparts[0];
   // dbFormateDate = dateparts[2] + dateparts[0] + dateparts[1];
    return dbFormateDate;
}

function WriteDateToPageNum(dbFormateDate) {

    var PageFormateDate;
    if (dbFormateDate.length == 8) {
        var day = dbFormateDate.substr(6, 2);
        var month = dbFormateDate.substr(4, 2);
        var year = dbFormateDate.substr(0, 4);
        PageFormateDate = (day) + '/' + month + '/' + year;

       // PageFormateDate = month + '/' + (day) + '/' + year;
    }
    return PageFormateDate;
}

function ReadDateFromPageNumStartYear(PageFormateDate)
{
    //debugger;
    //PageFormateDate = getFormat(PageFormateDate);
    // PageFormateDate = getFormat(PageFormateDate);
    var dbFormateDate;
    var dateparts = PageFormateDate.split('/');
    //debugger;
    dateparts[0] = dateparts[0].length == 1 ? "0" + dateparts[0] : dateparts[0];
    dateparts[1] = dateparts[1].length == 1 ? "0" + dateparts[1] : dateparts[1];
    dbFormateDate = dateparts[2] + dateparts[1] + dateparts[0];

    // dbFormateDate = dateparts[2] + dateparts[0] + dateparts[1];
    return dbFormateDate;
}

function ReadTimeFromPageNum(PageFormateDate) {
    
    //PageFormateDate = getFormat(PageFormateDate);
    // PageFormateDate = getFormat(PageFormateDate);
    var dbFormateTime;
    var Timeparts = PageFormateDate.split(':');

    Timeparts[0] = Timeparts[0].length == 1 ? "0" + Timeparts[0] : Timeparts[0];
    Timeparts[1] = Timeparts[1].length == 1 ? "0" + Timeparts[1] : Timeparts[1];
    //dbFormateDate = dateparts[2] + dateparts[1] + dateparts[0];
    dbFormateTime = Timeparts[0] + Timeparts[1];
    return dbFormateTime;
}

function WriteTimeToPageNum(dbFormateTime) {
    
    var PageFormateTime;
    if (dbFormateTime.length == 4)
    {
        var hour = dbFormateTime.substr(0, 2);
        var minute = dbFormateTime.substr(2, 2);
        
        
        PageFormateTime = hour + ':' + minute;
    }
    return PageFormateTime;
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getActualDate()
{
    var d = new Date();
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth() + 1);
    var year = addZero(d.getFullYear());
    return day + "/"+ month + "/" + year;

   // return month + "/" + day + "/" + year;
}

function AddDaysToDate(sDate, iAddDays, sSeperator) {
    //Purpose: Add the specified number of dates to a given date.

    var newsDatesplit = sDate.split("/");
    var newsDate = newsDatesplit[1] + "/" + newsDatesplit[0] + "/" + newsDatesplit[2]
    var date = new Date(newsDate);
   
    ////debugger;
    date.setDate(date.getDate() + parseInt(iAddDays));
    var sEndDate = LPad(date.getDate(), 2) + sSeperator + LPad(date.getMonth() + 1, 2) + sSeperator + date.getFullYear();

   // var sEndDate = LPad(date.getMonth() + 1, 2) + sSeperator + LPad(date.getDate(), 2) + sSeperator + date.getFullYear();
    return sEndDate;
}

function AddMonthToDate(sDate,iAddMonth)
{
    
    var Result, ResultDateTime,strAddMonth;
    //var currentdate = new Date(Date.parse(jQuery("#" + sDate).val()));

    var newsDatesplit = sDate.split("/");

    var newsDate = newsDatesplit[1] + "/" + newsDatesplit[0] + "/" + newsDatesplit[2]

    var currentdate = new Date(newsDate);

    // currentdate.setMonth(currentdate.getMonth() + parseInt(iAddMonth));

    strAddMonth = iAddMonth > 1 ? parseInt(iAddMonth) - 1 : iAddMonth;

    ResultDateTime = addMonths(currentdate, strAddMonth);

    Result = LPad(ResultDateTime.getDate(), 2) + '/' + LPad(ResultDateTime.getMonth()+1, 2) + '/' + ResultDateTime.getFullYear();

    //Next month
    //Result = LPad(ResultDateTime.getDate(), 2) + '/' + LPad(ResultDateTime.getMonth() + 1, 2) + '/' + ResultDateTime.getFullYear();

   // Result = LPad(currentdate.getMonth() + 1, 2) + '/' + LPad(currentdate.getDate(), 2) + '/' + currentdate.getFullYear();
    return Result;
}

function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function addMonths(date, value)
{
    debugger;
    var d = new Date(date),
        n = date.getDate();
    d.setDate(1);
    //alert(d.getMonth())
  //  alert(d.getMonth() + parseInt(value));
    d.setMonth(d.getMonth() + parseInt(value));
    d.setDate(Math.min(n, getDaysInMonth(d.getFullYear(), d.getMonth())));
    return d;
}


function MinusMonthToDate(sDate, iAddMonth) {

    var Result, ResultDateTime, strAddMonth;
    //var currentdate = new Date(Date.parse(jQuery("#" + sDate).val()));

    var newsDatesplit = sDate.split("/");

    var newsDate = newsDatesplit[1] + "/" + newsDatesplit[0] + "/" + newsDatesplit[2]
    var currentdate = new Date(newsDate);

    // currentdate.setMonth(currentdate.getMonth() + parseInt(iAddMonth));

    

    ResultDateTime = addMonths(currentdate, iAddMonth);

    Result = LPad(ResultDateTime.getDate(), 2) + '/' + LPad(ResultDateTime.getMonth() + 1, 2) + '/' + ResultDateTime.getFullYear();

    //Next month
    //Result = LPad(ResultDateTime.getDate(), 2) + '/' + LPad(ResultDateTime.getMonth() + 1, 2) + '/' + ResultDateTime.getFullYear();

    // Result = LPad(currentdate.getMonth() + 1, 2) + '/' + LPad(currentdate.getDate(), 2) + '/' + currentdate.getFullYear();
    return Result;
}



function LPad(sValue, iPadBy)
{
    sValue = sValue.toString();
    return sValue.length < iPadBy ? LPad("0" + sValue, iPadBy) : sValue;
}

function DiffDaysBetweenDates(frstDate, objendDate)
{
    //txtFrom_Date, txtEnd_Date, txtVactionPeriod
    //debugger;
    // get dates from input fields
    var startDate = $("#" + frstDate).val();
    var endDate = $("#" + objendDate).val();
    var sdate = startDate.split("/");
    var edate = endDate.split("/");
    var diffd = (edate[0] - sdate[0]) + 1;
   

    var leap = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nonleap = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // [1] month // [0] day // [2] year
    //debugger;
    if (sdate[2] > edate[2])
    {
        //debugger;
       // bootbox.alert("Please enter End Date Year greater than Start Date Year");
       // document.getElementById(objendDate).value = "";
        diffd = "";
    } else if (sdate[1] > edate[1])
    {
        //debugger;
      //  bootbox.alert("Please enter End Date month greater than Start Date month");
       // document.getElementById(objendDate).value = "";
        diffd = "";
    } else if (sdate[0] > edate[0])
    {
        //debugger;
     //   bootbox.alert("Please enter End Date greater than Start Date");
      //  document.getElementById(objendDate).value = "";
        diffd = "";
    } else {
        if (sdate[2] / 4 == 0)
        {
            while (sdate[1] < edate[1])
            {
                
                diffd = diffd + leap[sdate[1]++];
            }
        } else
        {
            while (sdate[1] < edate[1])
            {
                
                diffd = diffd + nonleap[sdate[1]++];
            }
        }
        return diffd;
        //document.getElementById("txtVactionPeriod").value = diffd;
    }
}

function DiffDaysBetweenDatesOLd(frstDate, endDate) {
    //txtFrom_Date, txtEnd_Date, txtVactionPeriod

    // get dates from input fields
    var startDate = $("#" + frstDate).val();
    var endDate = $("#" + endDate).val();
    var sdate = startDate.split("/");
    var edate = endDate.split("/");
    var diffd = (edate[1] - sdate[1]) + 1;
    var leap = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nonleap = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // [0] month // [1] day // [2] year
    if (sdate[2] > edate[2]) {
       // bootbox.alert("Please enter End Date Year greater than Start Date Year");
      //  document.getElementById("'"+ endDate +"'").value = "";
        diffd = "";
    } else if (sdate[0] > edate[0]) {
       // bootbox.alert("Please enter End Date month greater than Start Date month");
     //   document.getElementById("'" + endDate + "'").value = "";
        diffd = "";
    } else if (sdate[1] > edate[1]) {
     //   bootbox.alert("Please enter End Date greater than Start Date");
       // document.getElementById("'" + endDate + "'").value = "";
        diffd = "";
    } else {
        if (sdate[2] / 4 == 0) {
            while (sdate[0] < edate[0]) {
                diffd = diffd + leap[sdate[0]++];
            }
        } else {
            while (sdate[0] < edate[0]) {
                diffd = diffd + nonleap[sdate[0]++];
            }
        }
        return diffd;
        //document.getElementById("txtVactionPeriod").value = diffd;
    }
}


function GetUserData() {
    // $.getScript('/Login.js', function () {
    //   debugger;
    //   CheckValidedInputData();
    //  SetBranchAndCompanyName(data.d.CompanyIdProp, data.d.BranchIdProp);
    // });  
    debugger;
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GetUserData",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            //$.getScript('/Login.js', function () {
            //   SetBranchAndCompanyName(data.d.CompanyIdProp, data.d.BranchIdProp);
            //     });  
            debugger;
            if (data.d != null) {
                result = data.d;
                //debugger;

                $('#SpnBranch').text(((getCookie("LangCookie") == "ar") ? 'الفرع' + ':' + data.d.BranchNameProp : 'Branch Name' + ':' + data.d.BranchNameENProp));
                $('#SpnBranch').attr('tag', data.d.BranchIdProp);

                $('#SpnCompany').text(((getCookie("LangCookie") == "ar") ? 'الشركة' + ':' + data.d.CompanyNameProp : 'Company Name' + ':' + data.d.CompanyNameENProp)); /*+ ':' + data.d.CompanyNameProp)*/
                $('#SpnCompany').attr('tag', data.d.CompanyIdProp);

                $('#SpnUserName').text(data.d.UserNameProp);
                $('#SpnUserName').attr('tag', data.d.BranchNameProp);

                $('#imguser').attr('tag', data.d.EmpSerialNoProp);
                $('#imguser').attr('UserId', data.d.UserIdProp);


            } else {

                window.location.replace(location.origin + "/login.aspx");
            }


        }


    });

    return result;


}


//function GetUserData() {

    
//    var result;
//    $.ajax({
//        type: "POST",
//        url: GeneralHelperAjaxUrl + "GetUserData",
//        data: '',
//        contentType: "application/json",
//        dataType: "json",
//        async: false,
//        success: function (data)
//        {
//            if (data.d !=null){
//            result = data.d;
//            //debugger;
//            $('#SpnBranch').text(((getCookie("LangCookie") == "ar") ? 'الفرع' : 'Branch Name') + ':' + data.d.BranchNameProp);
//            $('#SpnBranch').attr('tag', data.d.BranchIdProp);

//            $('#SpnCompany').text(((getCookie("LangCookie") == "ar") ? 'الشركة' : 'Company Name') + ':' + data.d.CompanyNameProp);
//            $('#SpnCompany').attr('tag', data.d.CompanyIdProp);

//            $('#SpnUserName').text(data.d.UserNameProp);
//            $('#SpnUserName').attr('tag', data.d.BranchNameProp);

//            $('#imguser').attr('tag', data.d.EmpSerialNoProp);
//            $('#imguser').attr('UserId', data.d.UserIdProp);

            
//            } else
//            {
                
//                window.location.replace(location.origin +"/login.aspx");
//            }


//        }


//    });

//    return result;


//}



//function CheckEmpHasTask()
//{
//    var strcomapny = $('#SpnCompany').attr('tag');
//    var strbranch = $('#SpnBranch').attr('tag');
//    var Empserial_no = $('#imguser').attr('tag');
    

//    
//    var DTO = { 'strcomapny': strcomapny, 'strbranch': strbranch, 'Empserial_no': Empserial_no };
//    
//    var result;
//    $.ajax({
//        type: "POST",
//        url: GeneralHelperAjaxUrl + "SelectAllByCompanyAndBranch",
//        data: JSON.stringify(DTO),
//        contentType: "application/json",
//        dataType: "json",
//        async: false,
//        success: function (data) {
//            if (data.d != null)
//                {
//                result = data.d;
                
               
//                }
//            else {

               
//            }


//        }


//    });

//    return result;


//}
function CheckIsDate(MyDateParamter)
{
    //Result:
    //-3:The format date is wrong 
    //-1:ensure that from the days in month 
    //-2:ensure that from the month
    //1:the Format date is right
    
   // alert(MyDateParamter);

    var Result;
    var day;
    var Month;
    var DaysMonth;
    var year;

    var MyDate = $("#" + MyDateParamter).val();
    if (MyDate.length == 10)
    {
        var sdate = MyDate.split("/");

        day = sdate[0];
        Month = sdate[1];
        year = sdate[2];
        //debugger;
        Result = 1;
        var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
        if (!(dtRegex.test(MyDate))) {
            Result = -3;
           // bootbox.alert('The format date is wrong');
          //  $("#" + MyDateParamter).focus();
          //  event.preventDefault();
        } else {
            //debugger;
            if (Month > 12) {
                Result = -2;
              //  bootbox.alert('please ensure that from the month');
              //  $("#" + MyDateParamter).focus();
                //event.preventDefault();
            } else {
                DaysMonth = (new Date(year, LPad(Month, 2), 0).getDate());
                if (LPad(day, 2) > DaysMonth) {
                    Result = -1
                  //  bootbox.alert('please ensure that from the days in month');
                   // $("#" + MyDateParamter).focus();
                    //event.preventDefault();
                } else {
                    Result = 1
                }
            }

        }
    }

    ////alert(sdate[0]);
    ////alert(sdate[1]);
    ////alert(sdate[2]);
    //alert(Result);
    return Result;


}
function GetEmpHasNotification()
{
    debugger;
    var strcomapny = $('#SpnCompany').attr('tag');
    var strbranch = $('#SpnBranch').attr('tag');
    var Empserial_no = $('#imguser').attr('tag');


    
    var DTO = { 'strcomapny': strcomapny, 'strbranch': strbranch, 'Empserial_no': Empserial_no };
    
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "CheckEmpHasNotification",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.d != null) {
                result = data;
            }
            else {

               
            }


        }


    });

    return result;


}

function EmphasTask()
{
    //var Result = CheckEmpHasTask();
    var Result = GetEmpHasNotification();
    var flag = ((Result != null) && (Result.d.length > 0));
    if (flag == true)
    {
        
        window.location.replace(location.origin + "/EmployeeTasks.aspx");
    }
}

function FnLogout()
{
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "FnLogout",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {
            if (data.d == true)
            {
                result = data.d
                localStorage.removeItem("ObjAccesstocken");
                window.location.replace(location.origin + "/login.aspx");

                // window.location.replace(location.origin + "/EmployeeTasks.aspx");
            }


        }


    });

    return result;
}


function FnChngLang(lang)
{
    debugger;
    setCookie("LangCookie", lang, lang);

    GLang = lang;
    SetSessionLang(lang);
    var currentUrl = window.location;
    window.location.replace(currentUrl);
}




function ConfirmClose(event)
{
    
    if (event.cancelable = false)
    {
        SetDefaultSession();
        
    }
   
}
function SetDefaultSession()
{
    event.returnValue = 'You have closed the browser. Do you want to logout from your application?';
    setTimeout('myclose=false', 10);
    FnLogout();
}
function ChekUserIsCommissioner() {

    var strempSerialNo = $('#imguser').attr("tag");
    var strCompany = $('#SpnCompany').attr("tag");
    var strBranch = $('#SpnBranch').attr("tag");

    var DTO = { 'empSerialNo': strempSerialNo, 'strCompany': strCompany, 'strBranch': strBranch };
    var result;
    result = false;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChekUserIsCommissioner",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.d != null) {

                result = data.d;
            }
        }


    });

    return result;
}


function ChkVaildRequestDate(strCompany_Id, strBranch_Id, strEmp_serial_No, strfromDate, strtoDate)
{

    

    var DTO = { 'Company_Id': strCompany_Id, 'Branch_Id': strBranch_Id, 'Emp_serial_No': strEmp_serial_No,'fromDate':strfromDate,'toDate':strtoDate};
    var result;
    result = false;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkVaildRequestDate",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.d != null) {

                result = data.d;
            }
        }


    });

    return result;
}





function CloseScr() {
    window.location.replace($(location).attr('origin') + '/' + "indexEn.aspx");
}
function toSeconds(time_str) {
    // Extract hours, minutes and seconds
    var parts = time_str.split(':');
    // compute  and return total seconds
    return parts[0] * 3600 + // an hour has 3600 seconds
           parts[1] * 60 +   // a minute has 60 seconds
           +parts[2];        // seconds
}
function ComputeAnyDiffTime(ObjFromTime, ObjToTime)
{

    if ($('#' + ObjFromTime).val() != "" && $('#' + ObjFromTime).val() != null && $('#' + ObjFromTime).val() != undefined && $('#' + ObjToTime).val() != "" && $('#' + ObjToTime).val() != null && $('#' + ObjToTime).val() != undefined) {

        var fromtime = $('#' + ObjFromTime).val() + ":00";
        var totime = $('#' + ObjToTime).val() + ":00";

        if (toSeconds(totime) > toSeconds(fromtime))
        {
            
        var difference = Math.abs(toSeconds(fromtime) - toSeconds(totime));

        // compute hours, minutes and seconds
        var result = [
            // an hour has 3600 seconds so we have to compute how often 3600 fits
            // into the total number of seconds
            Math.floor(difference / 3600), // HOURS
            // similar for minutes, but we have to "remove" the hours first;
            // this is easy with the modulus operator
            Math.floor((difference % 3600) / 60), // MINUTES
            // the remainder is the number of seconds
            difference % 60 // SECONDS
        ];

        // formatting (0 padding and concatenation)
        result = result.map(function (v) {
            return v < 10 ? '0' + v : v;
        }).join(':');

        var resulttime = result.split(":");

        var newresulttime = resulttime[0] + ":" + resulttime[1];
    }
    else
    {
            // alert("Please enter To Time greater than From Time");


        //document.getElementById(ObjToTime).value = "";
        newresulttime = "00:00";
    }
        return newresulttime;
        // alert(newresulttime);
        // $('#txtPermissionPeriod').text(newresulttime);
    }
}


function ChkDiffTime(ObjFromTime, ObjToTime)
{
    //debugger;
    var result = true;
    if ($('#' + ObjFromTime).val() != "" && $('#' + ObjFromTime).val() != null && $('#' + ObjFromTime).val() != undefined && $('#' + ObjToTime).val() != "" && $('#' + ObjToTime).val() != null && $('#' + ObjToTime).val() != undefined) {

        var fromtime = $('#' + ObjFromTime).val() + ":00";
        var totime = $('#' + ObjToTime).val() + ":00";
        //debugger;
        if (toSeconds(totime) > toSeconds(fromtime)) {

            var difference = Math.abs(toSeconds(fromtime) - toSeconds(totime));

            // compute hours, minutes and seconds
            var result = [
                // an hour has 3600 seconds so we have to compute how often 3600 fits
                // into the total number of seconds
                Math.floor(difference / 3600), // HOURS
                // similar for minutes, but we have to "remove" the hours first;
                // this is easy with the modulus operator
                Math.floor((difference % 3600) / 60), // MINUTES
                // the remainder is the number of seconds
                difference % 60 // SECONDS
            ];

            // formatting (0 padding and concatenation)
            result = result.map(function (v) {
                return v < 10 ? '0' + v : v;
            }).join(':');

            var resulttime = result.split(":");

            var newresulttime = resulttime[0] + ":" + resulttime[1];
            result = true;
        }
        else {
            // alert("Please enter To Time greater than From Time");

            result = false;
            //document.getElementById(ObjToTime).value = "";
            newresulttime = "00:00";
        }
        //debugger;
        return result;
        // alert(newresulttime);
        // $('#txtPermissionPeriod').text(newresulttime);
    }
}

function FuncGetNewHeaderId() {
    
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GetNewHeaderId",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            //  
            
            if (data.d != null) {
                
                result = data.d;
            }

        }

    });
    return result;
}


function GlobalRemoveFile(fileName,PathFile){
    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GlobalRemoveFile",
        data: '{fileName: "' + fileName + '",PathFile:"' + PathFile + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response)
        {
            //debugger;
       if (response)
            {
           //debugger;
                result = response.d;
            }
        },
        failure: function (response)
        {
            //debugger;
            result = response.d;
            
        }
        
        
});
    return result;
}


function ChkValidDateFromTo(frstDate, endDate)
{
    //txtFrom_Date, txtEnd_Date, txtVactionPeriod
    var Message = "";
    // get dates from input fields
    var startDate = frstDate;
    var endDate = endDate;
    var sdate = startDate.split("/");
    var edate = endDate.split("/");
    var diffd = (edate[1] - sdate[1]) + 1;
    var leap = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nonleap = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //debugger;
    // [0] month // [1] day // [2] year
    if (sdate[2] > edate[2])
    {
        Message = "Please enter End Date greater than Start Date";

        //debugger;
       
        
        
    } else if (sdate[0] > edate[0])
    {
        //debugger;
        Message = "Please enter End Date Year greater than Start Date Year";
        
        
    } else if (sdate[1] > edate[1])
    {
        //debugger;
        Message = "Please enter End Date month greater than Start Date month";
        
    } else {
        if (sdate[2] / 4 == 0)
        {
            //debugger;
            while (sdate[0] < edate[0]) {
                diffd = diffd + leap[sdate[0]++];
            }
        } else {
            while (sdate[0] < edate[0]) {
                diffd = diffd + nonleap[sdate[0]++];
            }
        }
        
        //document.getElementById("txtVactionPeriod").value = diffd;
    }
    return Message;
}

function chkisnumeric(valuedata)
{

    var result;

    result = $.isNumeric(valuedata);

    return result;
}

function DiffBetwDates(objstartdate, objenddate)
{
    //debugger;
    var startDate = $("#" + objstartdate).val();
    var endDate = $("#" + objenddate).val();
    var sdate = startDate.split("/");
    var edate = endDate.split("/");
    // 1 month 0 day 2 year
    var varstartdate = sdate[1] + "/" + sdate[0] + "/" + sdate[2];
    var varenddate = edate[1] + "/" + edate[0] + "/" + edate[2];

    var date1 = new Date(varstartdate);
    var date2 = new Date(varenddate);

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = (Math.ceil(timeDiff / (1000 * 3600 * 24))+1);

    return diffDays;
}

function DiffMonthBetwDates(objstartdate, objenddate)
{
    //debugger;
    var startDate = $("#" + objstartdate).val();
    var endDate = $("#" + objenddate).val();
    var sdate = startDate.split("/");
    var edate = endDate.split("/");
    // 1 month 0 day 2 year
    var varstartdate = sdate[1] + "/" + sdate[0] + "/" + sdate[2];
    var varenddate = edate[1] + "/" + edate[0] + "/" + edate[2];

    var date1 = new Date(varstartdate);
    var date2 = new Date(varenddate);

    var difference = (date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth()) +1;

  //  var timeDiff = Math.abs(date2.getTime() - date1.getTime());

    //var diffDays = (Math.ceil(timeDiff / (1000 * 3600)) + 1);


    return difference;
}



function getchkisnumeric(e)
{
    debugger;
    if ($('#' + e.id).val() != "" && $('#' + e.id).val() != null) {
        var result = chkisnumeric($('#' + e.id).val());
        if (!result) {
            $('#' + e.id).val('');
            bootbox.alert('Please enter a numeric data');
            $('#' + e.id).focus();
        }
    }

}

function GetEmployeeUserData(strcomapny, strbranch, strEmpSerialNo)
{

    //debugger;
    var DTO = { 'strcomapny': strcomapny, 'strbranch': strbranch, 'strEmpSerialNo': strEmpSerialNo};

    var result;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GetEmployeeUserData",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data)
        {
            if (data.d != null)
            {
                //debugger;
                result = data.d;
            } 

        }


    });

    return result;


}

function FunChkEmpCodeIsIdentity(EmpCode, Company_Id, Branch_Id) {
    var result;
    var DTO = { 'EmpCode': EmpCode, 'Company_Id': Company_Id, 'Branch_Id': Branch_Id };
    //debugger;
    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "ChkEmpCodeIsIdentity",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;
        }

    });

    return result;
}





var pageName;
function getPageName() {
    var a = window.location.href.replace(location.search, ''),

    //var a = window.location.href,
        b = a.lastIndexOf("/");
    return a.substr(b + 1);
}


function ChangeLabelsbitlinguage() {

    //var allDetailInputs = ($('#divScr label'));
    //debugger;
    var allDetailInputs = $("#divScr [class*=dictionary-class]")
    var varKeyProp;
    var resulttext;
    try
    {
        for (var i = 0 ; i < allDetailInputs.length; i++)
        {
            //if (i == 30)
            //{
            //    debugger
            //    var obj = $(allDetailInputs[i]).get(0);

            //    alert($(obj).parent("div").hasClass('md-checkbox'));
            //    //obj = $(allDetailInputs[i]).prev().is("[type=checkbox]");

            //  //  alert($(obj).attr('id'))
            //   // alert($(obj).hasClass('form-md-checkboxes'))
            //}
        
       
            var obj = $(allDetailInputs[i]).get(0);

            var varKeyProp = allDetailInputs[i].attributes['KeyProp'].nodeValue

            //debugger;

            resulttext = GetTitledataLabel(varKeyProp);

            // $(allDetailInputs[i]).text(resulttext);

     
       

            if ($(obj).parent("div").hasClass('md-checkbox') || $(obj).parent("div").hasClass('md-radio'))
            {
               
                $(allDetailInputs[i]).append('<span></span><span class="check"></span><span class="box"></span>'+ resulttext +'')

            } else
            {
              

                $(allDetailInputs[i]).text(resulttext);

            }

            //if ($(allDetailInputs[i]).is('label'))

        

        

        }
    } catch (err) {
       // bootbox.alert(varKeyProp);
      //  bootbox.alert(err.message);

    }
       
}

function ChangeLabelsbitlinguagePop() {

    //var allDetailInputs = ($('#divScr label'));
    
    var allDetailInputs = $("#SearchEmpModal [class*=dictionary-class]")
    var varKeyProp;
    var resulttext;
    try
    {
        for (var i = 0 ; i < allDetailInputs.length; i++) {
            var varKeyProp = allDetailInputs[i].attributes['KeyProp'].nodeValue

            // resulttext = GetTitledataLabel(varKeyProp);
            resulttext = GetTitledataLabelPop(varKeyProp);


            $(allDetailInputs[i]).text(resulttext);
             }
    } catch (err)
    {
            alert(err.message)
    }
    

        

        //if ($(allDetailInputs[i]).find("[class*=check]"))
        //{
        //    //debugger;
        //    $(allDetailInputs[i]).append('<span></span><span class="check"></span><span class="box"></span>'+ resulttext +'')

        //} else
        //{
        //    //debugger;

        //    $(allDetailInputs[i]).text(resulttext);

        //}

        //if ($(allDetailInputs[i]).is('label'))





    

}

    

function GetTitledataLabel(StrKey)
{
   

    pageName = getPageName();
    screenName = "" + pageName.replace('.aspx', '') + "";
    //debugger;
    var Result = "";
   
    $.ajax({
        type: "GET",
        //url: '../../TestXml.xml',
        // url: '../../../DictionaryFilesInfo/Dict-' + GLang + '.xml',
        url: XmlFileUrl+'Dict-' + GLang + '.xml' + '?p=' + document.lastModified + '',
        // url: Page.ResolveClientUrl("~/App_Data/Diction-en.xml"),
        dataType: "xml",
        async: false,
        success: function (xml) {
           
            var datafirst = $(xml).find(screenName).first();
            Result = ($(datafirst).find(StrKey).text());

        },
        error: function (err) {
            
            alert("An error occurred while processing XML file.");
        }

    });


    return Result;


}
function DynamicSortDropList(Selector)
{

    //$('#selSearchEmployee_Id').append('<option value="0">' + ((getCookie("LangCookie") == "ar") ? "الكل" : "All") + '</option>');
   

    //$("#selSearchEmployee_Id").html($('#selSearchEmployee_Id option').sort(function(x, y) {
    //   return $(x).val() < $(y).val() ? -1 : 1;
    //}))
    //$("#selSearchEmployee_Id").get(0).selectedIndex = 0;

    $('#' + Selector).append('<option value="0">' + ((getCookie("LangCookie") == "ar") ? "الكل" : "All") + '</option>');


    $('#' + Selector).html($('#' + Selector + ' option').sort(function (x, y) {
       return $(x).val() < $(y).val() ? -1 : 1;
    }))
    $('#' + Selector).get(0).selectedIndex = 0;


    

   

}


function Changelanguage() {
    checkCookie();
    var allDetailInputs = $("#divScr [class*=dictionary-class]")
    var varKeyProp;
    //var xmlobjs = [];
    var datafirst;
    var keypropobjs = [];

    pageName = getPageName();
    screenName = "" + pageName.replace('.aspx', '') + "";
    debugger;
    var Result = "";

    $.ajax({
        type: "GET",
        url: XmlLocalFileUrl + 'Dict-en.xml'+ '?p=' + document.lastModified + '',
        dataType: "xml",
        async: false,
        success: function (xml) {
            debugger;
            for (var i = 0; i < allDetailInputs.length; i++) {
                var obj = $(allDetailInputs[i]).get(0);
                datafirst = $(xml).find(screenName).first();
                varKeyProp = allDetailInputs[i].attributes['KeyProp'].nodeValue
                Result = ($(datafirst).find(varKeyProp).text());
                if ($(obj).parent("div").hasClass('md-checkbox') || $(obj).parent("div").hasClass('md-radio')) {
                    $(allDetailInputs[i]).append('<span></span><span class="check"></span><span class="box"></span>' + Result + '')

                }
                else {
                    $(allDetailInputs[i]).text(Result);
                }
                console.log(varKeyProp + ":" + Result);

            }
        },

        error: function (err) {
            debugger;
            alert("An error occurred while processing XML file.");
        }

    });
}


function ChangelanguageGlobal() {
    checkCookie();
    var allDetailInputs = $("#divScr [class*=dictionary-class]")
    var varKeyProp;
    //var xmlobjs = [];
    var datafirst;
    var keypropobjs = [];

    pageName = getPageName();
    screenName = "" + pageName.replace('.aspx', '') + "";
    debugger;
    var Result = "";

    $.ajax({
        type: "GET",
        url: XmlFileUrl + 'Dict-en.xml' + '?p=' + document.lastModified + '',
        dataType: "xml",
        async: false,
        success: function (xml) {
            debugger;
            for (var i = 0; i < allDetailInputs.length; i++) {
                var obj = $(allDetailInputs[i]).get(0);
                datafirst = $(xml).find(screenName).first();
                varKeyProp = allDetailInputs[i].attributes['KeyProp'].nodeValue
                Result = ($(datafirst).find(varKeyProp).text());
                if ($(obj).parent("div").hasClass('md-checkbox') || $(obj).parent("div").hasClass('md-radio')) {
                    $(allDetailInputs[i]).append('<span></span><span class="check"></span><span class="box"></span>' + Result + '')

                }
                else {
                    $(allDetailInputs[i]).text(Result);
                }
                console.log(varKeyProp + ":" + Result);

            }
        },

        error: function (err) {
            debugger;
            alert("An error occurred while processing XML file.");
        }

    });
}

function GetTitledataLabelPop(StrKey) {   


    pageName = getPageName();
    screenName = "" + pageName.replace('.aspx', '') + "";
    //debugger;
    var Result = "";

    $.ajax({
        type: "GET",
        //url: '../../TestXml.xml',
        // url: '../../../DictionaryFilesInfo/Dict-' + GLang + '.xml',
        url: XmlLocalFileUrl + 'Dict-' + GLang + '.xml' + '?p=' + document.lastModified + '',
        // url: Page.ResolveClientUrl("~/App_Data/Diction-en.xml"),
        dataType: "xml",
        async: false,
        success: function (xml) {

            var datafirst = $(xml).find(screenName).first();
            Result = ($(datafirst).find(StrKey).text());

        },
        error: function (err) {

            alert("An error occurred while processing XML file.");
        }

    });


    return Result;


}

function checkCookie() {
    debugger;
    GetSessionLang();
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == "LangCookie") {
            delete_cookie("LangCookie");
        }
        else {
            setCookie("LangCookie", GLang, 1);
        }

    }
    setCookie("LangCookie", GLang, 1);
}

function delete_cookie(name) {

    // This function will attempt to remove a cookie from all paths.
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }


    // document.cookie = name + '= ;path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';




}

//var iNum = 15.667;
//iNum.toFixed(2);        // Returns "15.67"
//iNum.toFixed(5);        // Returns "15.66700"
//iNum.toPrecision(2);    // Returns "16"
//iNum.toPrecision(3);    // Returns "15.7"

function FnCreateEmpTree() {
														 
			 
					

    $.ajax({
        type: "POST",
        url: GeneralHelperAjaxUrl + "GetEmpTreeForMenu",
        data: '',
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
								 
					 
															  
													   
															
																			   
																
																												
																																   

            var menuItems = data.d;
					  
													   
				 
            //console.log(menuItems);
            
			 
		  
            
							   
					 
																  
		 

            var htmlTxt = "";
            var cat = [];
            var htmlStrTxt = "";
            var url = "#";
            //console.log(menuItems);
            function recurseMenu(parent, level,type) {
                    var id_for_html = " " ;
                if (level == 0 || level == 1 || level == 2) { id_for_html += " items-expanded to_be_shown "; }
                if (parent == 0) { id_for_html += "treeview"; }
                htmlStrTxt = '<ul class="' + id_for_html + '">';
                for (var x in menuItems) {
                    if (menuItems[x].Parent == parent) {
                        var id_if_emp = "";
                        if (menuItems[x].Type == 'emp' || menuItems[x].Type == 'BigEmp') { id_if_emp = "employee_code_" + menuItems[x].id ; }
                        if (GLang == "ar") {
                            htmlStrTxt += '<li id="' + id_if_emp+'" class="type_name_' + menuItems[x].Type+'">' + menuItems[x].ArName;
                        } else { htmlStrTxt += '<li  id="' + id_if_emp +'"  class="type_name_' + menuItems[x].Type +'">' + menuItems[x].EnName;}
                        

                        if (menuItems[x].childCount > 0) {
                            htmlStrTxt += recurseMenu(menuItems[x].id, level + 1, menuItems[x].Type);
                        }
                        htmlStrTxt += '</li>';
                    }
				  
						 
                   
							 
														 
			 
					

			
					
												   
						
					 
								 
					 
															  
													   
															
																			   
																
																												
																																   

                }
                return htmlStrTxt + '</ul>';
													   
            }


            for (var x2 in menuItems) {
                if (menuItems[x2].Type == 'emp' || menuItems[x2].Type == 'BigEmp') {
                    if (GLang == "ar") {
                        $("#selEmployee_Id").append('<option value="employee_code_' + menuItems[x2].id + '">' + menuItems[x2].ArName + '</option>');
                    } else {
                        $("#selEmployee_Id").append('<option value="employee_code_' + menuItems[x2].id + '">' + menuItems[x2].EnName + '</option>');
                    }
		  

							   
					 
																  
                }

	   
            }

									   

            var htmlTxt = recurseMenu('0', 0,'org');
            $(".treeview-container").html(htmlTxt);

            $('.treeview').treeView();
														 
			   
					
         
            $('.to_be_shown').css('display', 'table-caption');
            $('.to_be_shown').css('white-space', 'pre');
								   
																	  
														
																   
						
					 
								 

            //$('.fast_select_tree').show();
            $('.fast_select_tree').slideToggle('fast');

		  
							   

																  
        }

    });


				  


}

	
function get_and_open_parent() {
									  
 

    var id = $("#selEmployee_Id").val();
    var $obj = $('#' + id).parents('li');
    $obj.addClass(' items-expanded');
    $obj.css('display', 'block');

    var $obj2 = $('#' + id).parents('ul');
    $obj2.addClass(' items-expanded');
    $obj2.css('display', 'block');

    $('#' + id).css('color', 'red');
    setTimeout(function () {
        $('#' + id).css('color', '#000');
    }, 1000);
																				  


}

function GetLogo() {
    debugger;
    var Path = "assets/layouts/layout/img/";
    var Img = "logo1.png";
    $.ajax({
        type: "POST",
        url: "Login.aspx/GetLogo",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            debugger;
            $('#MasterLogo').html("");
            if (data.d != null && data.d != "") {
                Img = data.d;

            }
            debugger;
            var fullPath = Path + Img;
            var image = $('<img src="' + fullPath + '" />');
            $('#MasterLogo').append('<img style="margin-top:15px;" class="login-logo login-6" src="' + fullPath + '"  alt="logo"  />');

            $("img").bind("error", function () {
             
                $(this).attr("src", '' + Path + 'logo1.png');
            });
           


        }

    });
}


function SetUserData(User)
{
    debugger;

    //let idNAme = User.Id;

    //alert(idNAme)

    //$('#Id').val(idNAme);
    //$('#NameEn').val(User.Name);
    //$('#Name').val(User.NameEn);
    //$('#Email').val(User.Email);


    //$("#Name").attr("tag",User.NameEn);


    //$('#Id').text(User.Id);
    //$('#NameEn').text(User.Name);
    //$('#Name').text(User.NameEn);
    //$('#Email').text(User.Email);
    setCookie("EmpId", User.Id, 1);


}