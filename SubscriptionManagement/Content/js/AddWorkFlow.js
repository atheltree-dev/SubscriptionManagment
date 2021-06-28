$(document).ready(function () {

    $('#SpnScreenTitle').text('WorkFlow Screen');
    $('#SpnTabelHdr').text('WorkFlow Data');
   // ChangeLabelsbitlinguage();
    Changelanguage();
    //ChangelanguageGlobal();
    var ValidAuth = CheckUserAuthontication();

    if (ValidAuth != null && ValidAuth != -1)
    {

        DiplayAddDialog();

        setMaxLengthFields();

        FillGeneralCobmboSelectAll('selJob_Id', "Job_Id", ((getCookie("LangCookie") == "ar") ? "Job_Name" : "Job_NameEn"), "Hr_Jobs", " ismanager = 1");

    } else if (ValidAuth == -1) {
        var Message = ((getCookie("LangCookie") == "ar") ? "هذا المستخدم ليس له صلاحية" : "This User has not authontication ");
        varpagename = "Login";
        // gotoLoginScren(false);
        CustomAlertConfirmLogout(Message, varpagename)
        //window.location.replace($(location).attr('origin') + '/' + "Login.aspx");


    }

   

});
var newId = 0;
//function funAutoComp()
//{
//    $('#txtSearch_Name').autocomplete(SearchData());

//}

function SaveData()
{
    var ObjWorkFlow_HdrDL = GetWorkFlow_HdrForm();

    var ListWorkFlow_Dtls = new Object();
    ListWorkFlow_Dtls.arr = new Array();
    ListWorkFlow_Dtls = GetWorkFlow_DtlsForm();


    var DTO = { 'ObjWorkFlow_HdrDL': ObjWorkFlow_HdrDL, 'ListWorkFlow_Dtls': ListWorkFlow_Dtls.arr };
    var result;
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/AddNewData",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            result = data.d;

            if (result == true)
            {
                
                bootbox.alert(GetTitledataLabelPop('strMsgScrSave'));
                DiplayAddDialog();
            } else
            {
                bootbox.alert(GetTitledataLabelPop('strMsgScrNotSave'));
            }

            
        }

    });
    return result;


}

var pageName;
//function getPageName() {
//    var a = window.location.href,
//        b = a.lastIndexOf("/");
//    return a.substr(b + 1);
//}


//function ChangeLabelsbitlinguage() {

//    //var allDetailInputs = ($('#divScr label'));

//    var allDetailInputs = $("#divScr [class*=dictionary-class]")
//    var varKeyProp;
//    var resulttext;
//    for (var i = 0 ; i < allDetailInputs.length; i++) {

//        //if ($(allDetailInputs[i]).is('label'))

//        var varKeyProp = allDetailInputs[i].attributes['KeyProp'].nodeValue

//        resulttext = GetTitledataLabelPop(varKeyProp);

//        $(allDetailInputs[i]).text(resulttext);

//    }

//}

//function GetTitledataLabelPop(StrKey) {
//    pageName = getPageName();
//    screenName = "" + pageName.replace('.aspx', '') + "";

//    var Result = "";
//    debugger;
//    $.ajax({
//        type: "GET",
//        //url: '../../TestXml.xml',
//        url: '../../DictionaryFilesInfo/Dict-' + GLang + '.xml',
//        // url: Page.ResolveClientUrl("~/App_Data/Diction-en.xml"),
//        dataType: "xml",
//        async: false,
//        success: function (xml) {
//            debugger;
//            var datafirst = $(xml).find(screenName).first();
//            Result = ($(datafirst).find(StrKey).text());

//        },
//        error: function (err) {
//            debugger;
//            alert("An error occurred while processing XML file.");
//        }

//    });


//    return Result;


//}

function GetWorkFlow_HdrForm()
{
    var result = new Object();
   // txtWorkFlow_Id, txtWorkFlow_Name, txtWorkFlow_NameEn
  //  selJob_Id, txtOrder

    result.WorkFlow_Id = $('#txtWorkFlow_Id').val();
    result.WorkFlow_Name = $('#txtWorkFlow_Name').val();
    result.WorkFlow_NameEn = $('#txtWorkFlow_NameEn').val();
    return result;
}

function NavegateRowsByKey(tableID) {
    $(document).keydown(function (e) {
        e.stopPropagation();
        if (e.keyCode === 40) {
            e.preventDefault();
            console.log(40);
        } else if (e.keyCode === 38) {
            e.preventDefault();
            console.log(38);
        }
    });

    $(document).bind('keydown', function (evt) {
        var selectedRowindex = $('.SelectedRow').index() == -1 ? 0 : $('.SelectedRow').index();
        var rowsCount = $('#' + tableID + ' tbody tr').length;

        if (evt.keyCode == 40) {
            if (selectedRowindex == rowsCount - 1) {
                $('#' + tableID + ' tbody tr').removeClass('SelectedRow');
                $($('#' + tableID + ' tbody tr')[0]).addClass('SelectedRow');

            }
            else {
                $('#' + tableID + ' tbody tr').removeClass('SelectedRow');
                $($('#' + tableID + ' tbody tr')[selectedRowindex + 1]).addClass('SelectedRow');
            }
        }
        else if (evt.keyCode == 38) {
            if (selectedRowindex == 0) {
                $('#' + tableID + ' tbody tr').removeClass('SelectedRow');
                $($('#' + tableID + ' tbody tr')[rowsCount - 1]).addClass('SelectedRow');
            }
            else {
                $('#' + tableID + ' tbody tr').removeClass('SelectedRow');
                $($('#' + tableID + ' tbody tr')[selectedRowindex - 1]).addClass('SelectedRow');
            }
        }
        // $('.SelectedRow input:button').focus();

    });


}

function GetWorkFlow_DtlsForm()
{
    var ListDetailsDl = new Object();
    ListDetailsDl.arr = new Array();

    $('#TblHeader tbody').find('tr').each(function (i, el) {
        var detailDL = {};
      //  detailDL.iRowNum = i + 1;
        debugger;
        detailDL.Job_Id = $(el).find('.RowJob_Id').attr('Job_IdProp');
        detailDL.WorkFlowOrder = $(el).find('.RowWorkFlowOrder').text();
        ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

    });
    debugger;
    return ListDetailsDl;

}

function CustomCloseScr() {


    // var url = "http://" + document.location.host + "/indexEn.aspx";
    // var url =document.location.host + "/indexEn.aspx";
    //window.location.replace(url);

    // location.assign(url);

    window.location.replace("WorkFlows.aspx");
}

function AddNewRow()
{

    if (($('#selJob_Id').val() != "-1") && ($('#selJob_Id').val() != null))
    {

        debugger;
        // alert($('#selJob_Id').select2('data').text);
        //alert($("#selJob_Id option:selected").text());
        
        var newRow = '<tr>' +
        ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblHeader tbody tr').length + 1) + '</td>' +
        ' <td style="width: 35%;" class="RowJob_Id"  Job_IdProp ="' + $('#selJob_Id').val() + '">' + $("#selJob_Id option:selected").text() + '</td>' +
        //' <td style="width: 35%;" class="RowWorkFlowOrder">' + $('#txtOrder').val() + '</td>' +
        ' <td style="width: 35%;" class="RowWorkFlowOrder">' + ($('#TblHeader tbody tr').length + 1) + '</td>' +
        ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRow(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
        ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRow(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
        '</tr>';

        var updateRowIndex = $('#TblHeader tbody').find('.ReadyToUpdate').index();

        

        if (updateRowIndex == -1)
        {
            $('#TblHeader tbody').append(newRow);
        }

        else

        {

            $('#TblHeader > tbody > tr').eq(updateRowIndex).after(newRow);
            $('#TblHeader > tbody > tr').eq(updateRowIndex).remove();
            $('#TblHeader > tbody > tr').eq(updateRowIndex).find('.RowWorkFlowOrder').text(updateRowIndex + 1);
            $('#TblHeader > tbody > tr').eq(updateRowIndex).find('.rowNo').text(updateRowIndex + 1);

        }

       
       
    }
    else
    {
        if ($('#selJob_Id').val() == "-1")
        {
            $('#selJob_Id').parents('.form-group').removeClass('has-success');

            $('#selJob_Id').parents('.form-group').addClass('has-error');
            $('#selJob_Id').focus();
          
        } else
        {
            $('#selJob_Id').parents('.form-group').removeClass('has-error');

            $('#selJob_Id').parents('.form-group').addClass('has-success');
            
        }
        //if ($('#txtOrder').val() == "") {
        //    $('#txtOrder').parents('.form-group').removeClass('has-success');

        //    $('#txtOrder').parents('.form-group').addClass('has-error');
        //    $('#txtOrder').focus();

        //} else
        //{
        //    $('#txtOrder').parents('.form-group').removeClass('has-error');

        //    $('#txtOrder').parents('.form-group').addClass('has-success');

        //}
    }

    $("#selJob_Id").val('').trigger("change");
    //$("#txtOrder").val("");

    $('#SpnBtnAdd').text(GetTitledataLabelPop('strAddrow'));
    $('#btnAddRow').removeClass('blue');
    $('#btnAddRow').addClass('purple');

    $('#iSpnBtn').removeClass('fa-edit');
    $('#iSpnBtn').addClass('fa-plus');
    
}
function DeleteInvRow(e) {
    
    $(e).parents('tr').remove();
    UpdateTable();
}
function UpdateTable()
{
    $('#TblHeader tbody').find('tr').each(function (i, el)

    {
       

        $(el).find('.rowNo').text((i + 1))
        $(el).find('.RowWorkFlowOrder').text((i + 1))
        
    });
   
}
function test()
{
    alert('hellow');
}
function UpdateInvRow(e) {
    debugger;
    for (var i = 0; i < $('#TblHeader tbody tr').length; i++) {

        $($('#TblHeader tbody tr')[i]).removeClass('ReadyToUpdate');
    }
    debugger;
    $(e).parents('tr').addClass('ReadyToUpdate');

    $('#TblHeader tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');

    $("#selJob_Id").val($(e).parents('tr').find('.RowJob_Id').attr('Job_IdProp')).trigger('change');
    $('#SpnBtnAdd').text(GetTitledataLabelPop('strUpdaterow'));
    $('#btnAddRow').removeClass('purple');
    $('#btnAddRow').addClass('blue');
    $('#iSpnBtn').removeClass('fa-plus');
    $('#iSpnBtn').addClass('fa-edit');


}



function DiplayAddDialog()
{
    RestFormData();
    GetNewId();
    $('#txtWorkFlow_Id').val(newId);
    $("#txtWorkFlow_Id").prop("disabled", true);
    $("#txtWorkFlow_Id").addClass('edited');
   
}

function SaveDataFun()
{
    if (IsValidDetail())
    {
        debugger;

        SaveData();
        //$("#btnSaveData").attr('data-dismiss', 'modal');
        //$('#btnCloseModal').trigger('click');

    }
}

function GetNewId() {
    debugger;
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/GetNewId",
        data: '',
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {

            if (data.d != null) {
                newId = GetNextNumber(data.d);
            }

        }

    });
}

function CheckValiddata() {
    {

        alert('hellow');
    }

}

function CheckValiddata(e)
{
    {

        var idobj = jQuery(e).attr('id')
        debugger;

        if ($('#' + idobj).val() == "") {
            $('#' + idobj).parents('.form-group').removeClass('has-success');

            $('#' + idobj).parents('.form-group').addClass('has-error');
            $('#' + idobj).focus();
            result = false;
        } else {
            $('#' + idobj).parents('.form-group').removeClass('has-error');

            $('#' + idobj).parents('.form-group').addClass('has-success');
            result = true;
        }
    }

}
function IsValidDetail()
{
    debugger;
    var result = true;
    if ($('#TblHeader  tbody tr').length == 0)
    {
        bootbox.alert(GetTitledataLabelPop('strMsgCntntWorkOrdr'));

        result = false;
        
    }
    else
    {
        debugger;
         var allDetailInputs = $('#divBody input[type="text"]');

            for (var i = 0; i < allDetailInputs.length; i++)
            {
            debugger;
                if ($(allDetailInputs[i]).attr('required') != undefined)
                {
                    var idobj = jQuery(allDetailInputs[i]).attr('id')
                    debugger;

                    if ($('#' + idobj).val() == "")
                    {
                        $('#' + idobj).parents('.form-group').removeClass('has-success');

                        $('#' + idobj).parents('.form-group').addClass('has-error');
                        $('#' + idobj).focus();
                        result = false;
                        break;
                    } else
                    {
                        $('#' + idobj).parents('.form-group').removeClass('has-error');

                        $('#' + idobj).parents('.form-group').addClass('has-success');
                        result = true;
                    }
           
                }
       
            }               

    }

    return result;

}



//function AddNewData() {
    
//    debugger;
//      var newInsertObjDL = {};
//      newInsertObjDL.Job_Id = $("#txtRec_Id").val();
//      newInsertObjDL.Job_Name = $("#txtRec_Name").val();
//      newInsertObjDL.Job_NameEn = $("#txtRec_NameEn").val();
//      newInsertObjDL.Job_NameConv = "";

//      newInsertObjDL.Rec_Status = 0;
      
//      var DTO = { 'newobjDL': newInsertObjDL };
//        $.ajax({
//            type: "POST",
//            url: $(location).attr('href') + "/AddNewData",
//            data: JSON.stringify(DTO),
//            contentType: "application/json",
//            dataType: "json",
//            async: false,
//            success: function (data) {

//                if (data.d > 0) {
//                    PublishData();
//                    bootbox.alert("Data has been Saved");
//                   // $('#btnCloseDialog').trigger('click')
//                    RestFormData();
//                    GetNewId();
//                }

//                else if (data.d == 2627) {
//                    bootbox.alert("Error :Rec Id can not be dublicated, Data not saved,");
//                }
//                else {
//                    bootbox.alert("Error : Data not saved,");
//                }

//            }
//        });
    
//}



function PublishData() {
    //    
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/SelectAll",
        data: '',
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            //            
            if (data.d != null) {
                RestSearchData();
                FillDataTable(data.d);
            }

        }

    });
}
function RestSearchData() {

    $("#txtSearchId").val("");
    $("#txtSearch_Name").val("");
    $("#txtSearch_NameEn").val("");
    
}


function FillDataTable(objList) {

    $('#TblHeader tbody').find('tr').remove();

    if (objList != null && objList.length > 0) {

        for (var i = 0; i < objList.length; i++) {
           // var StrSuperVisor = $('#selSearchSuperVisorId  option[value="' + (objList[i].SuperVisorId == "" ? -1 : objList[i].SuperVisorId) + '"]').text();
            $('#TblHeader  tbody').append('<tr>' +
                                            '<td style="width: 5%;" class="RecId"> ' + ($('#TblHeader  tbody tr').length + 1) + ' </td>' +
                                            '<td style="width: 10%;" class="RowId"> ' + objList[i].Job_Id + ' </td>' +
                                            '<td style="width: 40%;" class="RowName"> ' + objList[i].Job_Name + ' </td>' +
                                            '<td style="width: 40%;" class="RowNameEn"> ' + objList[i].Job_NameEn + ' </td>' +
                                            '<td style="width: 5%;" class="SelectData" onclick="select(this);">' +
                                            '<div class="md-radio">' +
                                            '<input type="radio"  id="' + objList[i].Job_Id + '"  name="radio2" class="md-radiobtn">' +
                                            '<label for="' + objList[i].Job_Id + '" ><span></span><span class="check"></span><span class="box"></span></label> </div>' +

                                           // '<input style="margin: 0px;" type="radio" name="AreaGroup" id="' + objList[i].AreaId + '"  /></td>' +
                                            '</tr>');

        }
    }
}
function select(e) {
    $(e).find('input').attr('checked', true);
    $('#TblHeader tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');
}



function DiplayDeleteDialog() {
    if ($('#TblHeader').find('input[type="radio"]:checked').length > 0) {

        bootbox.confirm(GetTitledataLabelPop('strMsgConfirmDelete'), function (o)
        {
            if (o == true) 
            {
                deleteDataByObj();
            }
            else (o == false)
            {

            }
            
        })

//        $('<div></div>').appendTo('body')
//.html('<div><h4>Are you sure?</h4></div>')
//.dialog({
//    modal: true,
//    title: 'Delete message',
//    zIndex: 10000,
//    autoOpen: true,
//    width: 'auto',
//    resizable: false,
//    buttons: {
//        Yes: function () {
//            deleteDataByObj();
//            //deleteDataById($('#TblHeader').find('input[type="radio"]:checked').attr('id'));
//            $(this).dialog("close");
//        },
//        No: function () {
//            $(this).dialog("close");
//        }
//    },
//    close: function (event, ui) {
//        $(this).remove();
//    }
//});




    }
    else {
        bootbox.alert(GetTitledataLabelPop('strMsgNoDataSelect'));
        
    }
}



function deleteDataByObj() {
    debugger;
        var DeleteObjDL = {};
        var selectedRow = $('#TblHeader').find('input[type="radio"]:checked').closest('tr');
        DeleteObjDL.Job_Id = $('#TblHeader').find('input[type="radio"]:checked').attr('id').trim();
        if (DeleteObjDL.Job_Id != null || DeleteObjDL.Job_Id != "")
        {
        DeleteObjDL.Job_Name = selectedRow.find('.RowName').text().trim();
        DeleteObjDL.Job_NameEn = selectedRow.find('.RowNameEn').text().trim();
        DeleteObjDL.Job_NameConv = "";
        // areasDL.SuperVisorId = $("#selSuperVisorId").val() == "" ? 0 : $("#selSuperVisorId").val();
        

        var DTO = { 'DelObjDL': DeleteObjDL };
        debugger;
    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/DeleteRecordData",
        data: JSON.stringify(DTO),
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.d == true) {
                bootbox.alert(GetTitledataLabelPop('strMsgDataDeleted'));
               // $('#alertDialog').dialog();
              //  PublishData();
            }
            else {
                bootbox.alert(GetTitledataLabelPop('strMsgNoDataDel'));
                //$('#alertDialog').dialog();
            }
        }

         });
     }
}


function DiplayUpdateDialog() {

    if ($('#TblHeader').find('input[type="radio"]:checked').length > 0) {
        debugger;
        $('#spnModalTitle').text('Update Job');
        $('#btnUpdate').attr('href', '#responsive');
        PublishUpdateForm();

        $("#btnSaveData").attr('onclick', 'UpdateDataObject()');
    }
    else {
        bootbox.alert(GetTitledataLabelPop('strMsgNoDataSelect'));
      
    }
}
function FocusInput()
{
    var allDetailInputs = $('input[type="text"]');
    for (var i = 0; i < allDetailInputs.length; i++)
    {
        $('#' + jQuery(allDetailInputs[i]).attr('id')).addClass('edited');

    }
}
function PublishUpdateForm()
{

    //txtRec_Id, txtRec_Name, txtRec_NameEn

    var selectedRow = $('#TblHeader').find('input[type="radio"]:checked').closest('tr');
    $("#txtRec_Id").val($('#TblHeader').find('input[type="radio"]:checked').attr('id').trim());
    $("#txtRec_Id").prop("disabled", true);
    //$("#txtRec_Id").addClass('edited');
    $("#txtRec_Name").val(selectedRow.find('.RowName').text().trim());
    $("#txtRec_NameEn").val(selectedRow.find('.RowNameEn').text().trim());

    FocusInput();

    

}

function UpdateDataObject() {

    // if (jQuery('#form1').validationEngine('validate'))
    if (IsValidDetail())
    {
        debugger;

        var UpdateObjDL = {};
        UpdateObjDL.Job_Id = $("#txtRec_Id").val();
        UpdateObjDL.Job_Name = $("#txtRec_Name").val();
        UpdateObjDL.Job_NameEn = $("#txtRec_NameEn").val();
        UpdateObjDL.Job_NameConv = "";
       // areasDL.SuperVisorId = $("#selSuperVisorId").val() == "" ? 0 : $("#selSuperVisorId").val();
        

        var DTO = { 'UpdObjDL': UpdateObjDL };
        $.ajax({
            type: "POST",
            url: $(location).attr('href') + "/UpdateDataObject",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {

                if (data.d == true) {
                    debugger;
                    $('#btnCloseModal').trigger('click');
                  //  PublishData();
                    bootbox.alert(GetTitledataLabelPop('strMsgScrSave'));
                  //  $('#btnCloseDialog').trigger('click')
                }

                else {
                    bootbox.alert(GetTitledataLabelPop('strMsgScrNotSave'));
                }

            }
        });
    }
}

function SearchData() {

    $.ajax({
        type: "POST",
        url: $(location).attr('href') + "/SelectAll",
        data: '',
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            //Job_Id, Job_Name, Job_NameConv, InsUser, InsDate, UpdateUser, UpdateDate, DeleteUser, DeleteDate, Rec_Status
            //txtRec_Id, txtRec_Name, txtRec_NameEn
            //txtSearch_Id, txtSearch_Name, txtSearch_NameEn


            if (data.d != null) {
                if ($('#txtSearch_Id').val().trim() != "") {
                    for (var i = 0; i < data.d.length; i++) {
                        if (data.d[i].Job_Id != $('#txtSearch_Id').val().trim()) {
                            data.d.splice(i, 1);
                            i = i - 1;
                        }
                    }
                }


                //if ($('#selSearchSuperVisorId').val().trim() != "") {
                //    for (var i = 0; i < data.d.length; i++) {
                //        if (data.d[i].SuperVisorId != $('#selSearchSuperVisorId').val().trim()) {
                //            data.d.splice(i, 1);
                //            i = i - 1;
                //        }
                //    }
                //}

                if ($('#txtSearch_Name').val().trim() != "") {
                    for (var i = 0; i < data.d.length; i++) {
                        if (data.d[i].Job_Name.toLowerCase().indexOf($('#txtSearch_Name').val().trim().toLowerCase()) == -1) {
                            data.d.splice(i, 1);
                            i = i - 1;
                        }
                    }
                }
                if ($('#txtSearch_NameEn').val().trim() != "") {
                    for (var i = 0; i < data.d.length; i++) {
                        if (data.d[i].Job_NameEn.toLowerCase().indexOf($('#txtSearch_NameEn').val().trim().toLowerCase()) == -1) {
                            data.d.splice(i, 1);
                            i = i - 1;
                        }
                    }
                }

                FillDataTable(data.d);
            }

        }

    });

}



function RestFormData()
{
   // txtWorkFlow_Id, txtWorkFlow_Name, txtWorkFlow_NameEn
   // selJob_Id, txtOrder

    $("#txtWorkFlow_Id").val("");
    $("#txtWorkFlow_Name").val("");
    $("#txtWorkFlow_NameEn").val("");
    $("#selJob_Id").val('').trigger("change");
  //  $("#txtOrder").val("");
    $("#TblHeader tbody").empty();
    //$('#selSuperVisorId option:contains("Select")').prop('selected', true);
    //$("#selSuperVisorId").chosen();
    //$("#selSuperVisorId").trigger("chosen:updated");


}
function setMaxLengthFields()
{
    $("#txtWorkFlow_Id").attr('maxlength', "6");
    $("#txtWorkFlow_Name").attr('maxlength', "100");
    $("#txtWorkFlow_NameEn").attr('maxlength', "100");
}

