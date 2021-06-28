$(document).ready(function () {

    $('#SpnScreenTitle').text('Employees_data Screen');
    $('#SpnTabelHdr').text('Employees_data Data');
   // ChangeLabelsbitlinguage();
    Changelanguage();
    //var ValidAuth = CheckUserAuthontication();

    //if (ValidAuth != null && ValidAuth != -1)
    //{

       // DiplayAddDialog();

        setMaxLengthFields();
        DisabledControls(true);
       
        //$('#txtHire_Date').on('change', funcrion(){
        //    CheckWorkDates();
        //});

    debugger;
    FillGeneralCobmboSelectAll('selComapny_Id', "Company_Id", "Company_Name_En", "Companies", "");


        

    //} else if (ValidAuth == -1)
    //{
    //    var Message = ((getCookie("LangCookie") == "ar") ? "هذا المستخدم ليس له صلاحية" : "This User has not authontication ");
    //    varpagename = "Login";
    //    // gotoLoginScren(false);
    //    CustomAlertConfirmLogout(Message, varpagename)
    //    //window.location.replace($(location).attr('origin') + '/' + "Login.aspx");


    //}

   

});
var newId = 0;
//function funAutoComp()
//{
//    $('#txtSearch_Name').autocomplete(SearchData());

//}

function SaveData()
{
    var ObjEmployees_data_HdrDL = GetEmployees_data_HdrForm();

    var ListEmployees_data_Dtls = new Object();
    ListEmployees_data_Dtls.arr = new Array();
    ListEmployees_data_Dtls = GetEmployees_data_DtlsForm();


    var DTO = { 'ObjEmployees_data_HdrDL': ObjEmployees_data_HdrDL, 'ListEmployees_data_Dtls': ListEmployees_data_Dtls.arr };
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
                RestFormData();
                CustomCloseScr();
                //DiplayAddDialog();
            } else
            {
                bootbox.alert(GetTitledataLabelPop('strMsgScrNotSave'));
            }

            
        }

    });
    return result;


}

var pageName;


function GetEmployees_data_HdrForm()
{
    var result = new Object();
   // txtEmployees_data_Id, txtEmployees_data_Name, txtEmployees_data_NameEn
  //  txtDailyTask, txtOrder
    
    result.Company_Id = $('#selComapny_Id').val();
    result.Identity_No = $('#txtIdentity_No').val();
    result.Administration_Name = $('#txtAdministration_Name').val();

    result.Department_Name = $('#txtDepartment_Name').val();
    result.Job_Description = '';//$('#txtJob_Description').val();
    result.Employee_Name = $('#txtEmployee_Name').val();
    result.Title = $('#txtTitle').val();
    result.Hire_Date = ReadDateFromPageNum($('#txtHire_Date').val());
    result.TransportationAllowance = $('#txtTransportationAllowance').val();
    result.BasicAllowance = $('#txtBasicAllowance').val();
    result.HousingAllowance = $('#txtHousingAllowance').val();
    result.SchoolAllowance = 0;//$('#txtSchoolAllowance').val();
    result.OtherAllowance = $('#txtOtherAllowance').val();
    result.Approval = 0;

    result.MonthlyCost = $('#txtMonthlyCost').val();
    result.AnnualCost = $('#txtAnnualCost').val();
    result.TotalCost = $('#txtTotalCost').val();
    result.WorkingYear = $('#txtWorkingYear').val();
    result.workingMonth = $('#txtworkingMonth').val();
    result.workingDay = $('#txtworkingDay').val();


    

    

    return result;
}



function GetEmployees_data_DtlsForm()
{
    var ListDetailsDl = new Object();
    ListDetailsDl.arr = new Array();

    $('#TblHeader tbody').find('tr').each(function (i, el) 
    {
        var detailDL = {};
      //  detailDL.iRowNum = i + 1;
        debugger;
        detailDL.iRow = $(el).find('.rowNo').text();
        detailDL.Item_Name = $(el).find('.RowDailyTask').text();
       // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
       // detailDL.RecStatus =  $(el).find('.RowStatus').text();
        detailDL.Item_Type = 1;
        ListDetailsDl.arr.push(detailDL)
        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

    });

    $('#TblAchievement tbody').find('tr').each(function (i, el) {
        var detailDL = {};
        //  detailDL.iRowNum = i + 1;
        debugger;
        detailDL.iRow = $(el).find('.rowNo').text();
        detailDL.Item_Name = $(el).find('.RowAchievement').text();
        // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
        // detailDL.RecStatus =  $(el).find('.RowStatus').text();
        detailDL.Item_Type = 2;
        ListDetailsDl.arr.push(detailDL)
        //ListDetailsDl.arr[ListDetailsDl.arr.length].append = detailDL
        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

    });

    $('#TblPendingTask tbody').find('tr').each(function (i, el) {
        var detailDL = {};
        //  detailDL.iRowNum = i + 1;
        debugger;
        detailDL.iRow = $(el).find('.rowNo').text();
        detailDL.Item_Name = $(el).find('.RowPendingTask').text();
        // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
        // detailDL.RecStatus =  $(el).find('.RowStatus').text();
        detailDL.Item_Type = 3;
        ListDetailsDl.arr.push(detailDL)
        //ListDetailsDl.arr[ListDetailsDl.arr.length].append = detailDL
        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

    });

    $('#TblSuggest tbody').find('tr').each(function (i, el) {
        var detailDL = {};
        //  detailDL.iRowNum = i + 1;
        debugger;
        detailDL.iRow = $(el).find('.rowNo').text();
        detailDL.Item_Name = $(el).find('.RowSuggest').text();
        // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
        // detailDL.RecStatus =  $(el).find('.RowStatus').text();
        detailDL.Item_Type = 4;
        ListDetailsDl.arr.push(detailDL)
        //ListDetailsDl.arr[ListDetailsDl.arr.length].append = detailDL
        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

    });


    debugger;
    return ListDetailsDl;

}

//function Test()
//{
//    var ListDetailsDl = new Object();
//    ListDetailsDl.arr = new Array();

//    $('#TblHeader tbody').find('tr').each(function (i, el) {
//        var detailDL = {};
//        //  detailDL.iRowNum = i + 1;
//        debugger;
//        detailDL.iRow = $(el).find('.rowNo').text();
//        detailDL.Item_Name = $(el).find('.RowDailyTask').text();
//        // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
//        // detailDL.RecStatus =  $(el).find('.RowStatus').text();
//        detailDL.Item_Type = 1;
//        ListDetailsDl.arr.push(detailDL)
//        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

//    });

//    $('#TblAchievement tbody').find('tr').each(function (i, el) {
//        var detailDL = {};
//        //  detailDL.iRowNum = i + 1;
//        debugger;
//        detailDL.iRow = $(el).find('.rowNo').text();
//        detailDL.Item_Name = $(el).find('.RowDailyTask').text();
//        // detailDL.RecStatus = find('.RowStatus').attr("RowStatusProp");
//        // detailDL.RecStatus =  $(el).find('.RowStatus').text();
//        detailDL.Item_Type = 2;
//        ListDetailsDl.arr.push(detailDL)
//        //ListDetailsDl.arr[ListDetailsDl.arr.length].append = detailDL
//        //ListDetailsDl.arr[ListDetailsDl.arr.length] = detailDL;

//    });


//    debugger;
//    return ListDetailsDl;


//}

function CustomCloseScr() 
{

    window.location.replace("intro.aspx");
}

function AddNewRow()
{
   // var edited = 0;

    if (($('#txtDailyTask').val() != "-1") && ($('#txtDailyTask').val() != null))
    {
    //    $('#TblHeader tbody tr').each(function () {
      //      if ($(this).hasClass("ReadyToUpdate")) {
        //        $(this).remove();
          //      edited = 1;

            //}
       // });

        var newRow = '<tr>' +
        ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblHeader tbody tr').length + 1) + '</td>' +
        ' <td style="width: 70%;  word-break: break-all" class="RowDailyTask"  DailyTaskProp ="' + $('#txtDailyTask').val() + '">' + $('#txtDailyTask').val() + '</td>' +
       // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "1" >1</td>' +
        ' <td  style="width: 10%;"><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRow(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
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
            //$('#TblHeader > tbody > tr').eq(updateRowIndex).find('.RowEmployees_dataOrder').text(updateRowIndex + 1);
            $('#TblHeader > tbody > tr').eq(updateRowIndex).find('.rowNo').text(updateRowIndex + 1);

        }

       
       
    }
    else
    {
        if ($('#txtDailyTask').val() == "-1")
        {
            $('#txtDailyTask').parents('.form-group').removeClass('has-success');

            $('#txtDailyTask').parents('.form-group').addClass('has-error');
            $('#txtDailyTask').focus();
          
        } else
        {
            $('#txtDailyTask').parents('.form-group').removeClass('has-error');

            $('#txtDailyTask').parents('.form-group').addClass('has-success');
            
        }
       
    }

    $("#txtDailyTask").val('');
    //$("#txtOrder").val("");

    $('#SpnBtnAdd').text(GetTitledataLabelPop('strAddrow'));
    $('#btnAddRow').removeClass('blue');
    $('#btnAddRow').addClass('purple');

    $('#iSpnBtn').removeClass('fa-edit');
    $('#iSpnBtn').addClass('fa-plus');
    
}
function DeleteInvRow(e) 
{
  //  $(e).parents().closest("tr").find('.RowStatus').text(3);
  //  $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 3);


 //   $(e).parents().closest("tr").css("display", "none");
   $(e).parents('tr').remove();
    UpdateTable();
}

function UpdateTable()
{
    $('#TblHeader tbody').find('tr').each(function (i, el)

    {
       

        $(el).find('.rowNo').text((i + 1))
        //$(el).find('.RowEmployees_dataOrder').text((i + 1))
        
    });
   
}

function UpdateInvRow(e) 
{
    debugger;
    for (var i = 0; i < $('#TblHeader tbody tr').length; i++) {

        $($('#TblHeader tbody tr')[i]).removeClass('ReadyToUpdate');
    }
    debugger;
    $(e).parents('tr').addClass('ReadyToUpdate');
   // $(e).parents().closest("tr").find('.RowStatus').text(2);
   // $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 2);

    $('#TblHeader tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');

    $("#txtDailyTask").val($(e).parents('tr').find('.RowDailyTask').attr('DailyTaskProp'));
    $('#SpnBtnAdd').text(GetTitledataLabelPop('strUpdaterow'));
    $('#btnAddRow').removeClass('purple');
    $('#btnAddRow').addClass('blue');
    $('#iSpnBtn').removeClass('fa-plus');
    $('#iSpnBtn').addClass('fa-edit');


}

///Begin Achievement-------------------------

function AddNewRowAchievement() {
    // var edited = 0;

    if (($('#txtAchievement').val() != "-1") && ($('#txtAchievement').val() != null)) {
        //    $('#TblAchievement tbody tr').each(function () {
        //      if ($(this).hasClass("ReadyToUpdate")) {
        //        $(this).remove();
        //      edited = 1;

        //}
        // });

        var newRow = '<tr>' +
            ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblAchievement tbody tr').length + 1) + '</td>' +
            ' <td style="width: 70%; word-break: break-all" class="RowAchievement"  AchievementProp ="' + $('#txtAchievement').val() + '">' + $('#txtAchievement').val() + '</td>' +
            // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "1" >1</td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowAchievement(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowAchievement(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
            '</tr>';

        var updateRowIndex = $('#TblAchievement tbody').find('.ReadyToUpdate').index();



        if (updateRowIndex == -1) {
            $('#TblAchievement tbody').append(newRow);
        }

        else {

            $('#TblAchievement > tbody > tr').eq(updateRowIndex).after(newRow);
            $('#TblAchievement > tbody > tr').eq(updateRowIndex).remove();
            $('#TblAchievement > tbody > tr').eq(updateRowIndex).find('.rowNo').text(updateRowIndex + 1);

        }



    }
    else {
        if ($('#txtAchievement').val() == "-1") {
            $('#txtAchievement').parents('.form-group').removeClass('has-success');

            $('#txtAchievement').parents('.form-group').addClass('has-error');
            $('#txtAchievement').focus();

        } else {
            $('#txtAchievement').parents('.form-group').removeClass('has-error');

            $('#txtAchievement').parents('.form-group').addClass('has-success');

        }

    }

    $("#txtAchievement").val('');


    $('#SpnBtnAddAchievement').text(GetTitledataLabelPop('strAddrow'));
    $('#btnAddRowAchievement').removeClass('blue');
    $('#btnAddRowAchievement').addClass('purple');

    $('#SpnBtnAddAchievement').removeClass('fa-edit');
    $('#SpnBtnAddAchievement').addClass('fa-plus');

}
function DeleteInvRowAchievement(e) {
    //  $(e).parents().closest("tr").find('.RowStatus').text(3);
    //  $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 3);


    //   $(e).parents().closest("tr").css("display", "none");
    $(e).parents('tr').remove();
    UpdateTableAchievement();
}

function UpdateTableAchievement() {
    $('#TblAchievement tbody').find('tr').each(function (i, el) {


        $(el).find('.rowNo').text((i + 1))
        //$(el).find('.RowEmployees_dataOrder').text((i + 1))

    });

}

function UpdateInvRowAchievement(e) {
    debugger;
    for (var i = 0; i < $('#TblAchievement tbody tr').length; i++) {

        $($('#TblAchievement tbody tr')[i]).removeClass('ReadyToUpdate');
    }
    debugger;
    $(e).parents('tr').addClass('ReadyToUpdate');
    // $(e).parents().closest("tr").find('.RowStatus').text(2);
    // $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 2);

    $('#TblAchievement tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');

    $("#txtAchievement").val($(e).parents('tr').find('.RowAchievement').attr('AchievementProp'));
    $('#SpnBtnAddAchievement').text(GetTitledataLabelPop('strUpdaterow'));
    $('#btnAddRowAchievement').removeClass('purple');
    $('#btnAddRowAchievement').addClass('blue');
    $('#SpnBtnAddAchievement').removeClass('fa-plus');
    $('#SpnBtnAddAchievement').addClass('fa-edit');


}


///End Achievement-------------------------

// Begin Pending ------

function AddNewRowPendingTask() {
    // var edited = 0;

    if (($('#txtPendingTask').val() != "-1") && ($('#txtPendingTask').val() != null)) {
        //    $('#TblPendingTask tbody tr').each(function () {
        //      if ($(this).hasClass("ReadyToUpdate")) {
        //        $(this).remove();
        //      edited = 1;

        //}
        // });

        var newRow = '<tr>' +
            ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblPendingTask tbody tr').length + 1) + '</td>' +
            ' <td style="width: 70%; word-break: break-all" class="RowPendingTask"  PendingTaskProp ="' + $('#txtPendingTask').val() + '">' + $('#txtPendingTask').val() + '</td>' +
            // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "1" >1</td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowPendingTask(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowPendingTask(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
            '</tr>';

        var updateRowIndex = $('#TblPendingTask tbody').find('.ReadyToUpdate').index();



        if (updateRowIndex == -1) {
            $('#TblPendingTask tbody').append(newRow);
        }

        else {

            $('#TblPendingTask > tbody > tr').eq(updateRowIndex).after(newRow);
            $('#TblPendingTask > tbody > tr').eq(updateRowIndex).remove();
            //$('#TblPendingTask > tbody > tr').eq(updateRowIndex).find('.RowEmployees_dataOrder').text(updateRowIndex + 1);
            $('#TblPendingTask > tbody > tr').eq(updateRowIndex).find('.rowNo').text(updateRowIndex + 1);

        }



    }
    else {
        if ($('#txtPendingTask').val() == "-1") {
            $('#txtPendingTask').parents('.form-group').removeClass('has-success');

            $('#txtPendingTask').parents('.form-group').addClass('has-error');
            $('#txtPendingTask').focus();

        } else {
            $('#txtPendingTask').parents('.form-group').removeClass('has-error');

            $('#txtPendingTask').parents('.form-group').addClass('has-success');

        }

    }

    $("#txtPendingTask").val('');
    //$("#txtOrder").val("");

    $('#btnAddRowPendingTask').text(GetTitledataLabelPop('strAddrow'));
    $('#btnAddRow').removeClass('blue');
    $('#btnAddRow').addClass('purple');

    $('#SpnBtnAddPendingTask').removeClass('fa-edit');
    $('#SpnBtnAddPendingTask').addClass('fa-plus');

}
function DeleteInvRowPendingTask(e) {
    //  $(e).parents().closest("tr").find('.RowStatus').text(3);
    //  $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 3);


    //   $(e).parents().closest("tr").css("display", "none");
    $(e).parents('tr').remove();
    UpdateTablePendingTask();
}

function UpdateTablePendingTask() {
    $('#TblPendingTask tbody').find('tr').each(function (i, el) {


        $(el).find('.rowNo').text((i + 1))
        //$(el).find('.RowEmployees_dataOrder').text((i + 1))

    });

}

function UpdateInvRowPendingTask(e) {
    debugger;
    for (var i = 0; i < $('#TblPendingTask tbody tr').length; i++) {

        $($('#TblPendingTask tbody tr')[i]).removeClass('ReadyToUpdate');
    }
    debugger;
    $(e).parents('tr').addClass('ReadyToUpdate');
    // $(e).parents().closest("tr").find('.RowStatus').text(2);
    // $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 2);

    $('#TblPendingTask tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');

    $("#txtPendingTask").val($(e).parents('tr').find('.RowPendingTask').attr('PendingTaskProp'));
    $('#btnAddRowPendingTask').text(GetTitledataLabelPop('strUpdaterow'));
    $('#btnAddRow').removeClass('purple');
    $('#btnAddRow').addClass('blue');
    $('#SpnBtnAddPendingTask').removeClass('fa-plus');
    $('#SpnBtnAddPendingTask').addClass('fa-edit');


}

/// end pending Task

// Begin Suggest

function AddNewRowSuggest() {
    // var edited = 0;

    if (($('#txtSuggest').val() != "-1") && ($('#txtSuggest').val() != null)) {
        //    $('#TblSuggest tbody tr').each(function () {
        //      if ($(this).hasClass("ReadyToUpdate")) {
        //        $(this).remove();
        //      edited = 1;

        //}
        // });

        var newRow = '<tr>' +
            ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblSuggest tbody tr').length + 1) + '</td>' +
            ' <td style="width: 70%;word-break: break-all" class="RowSuggest"  SuggestProp ="' + $('#txtSuggest').val() + '">' + $('#txtSuggest').val() + '</td>' +
            // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "1" >1</td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowSuggest(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
            ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowSuggest(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
            '</tr>';

        var updateRowIndex = $('#TblSuggest tbody').find('.ReadyToUpdate').index();



        if (updateRowIndex == -1) {
            $('#TblSuggest tbody').append(newRow);
        }

        else {

            $('#TblSuggest > tbody > tr').eq(updateRowIndex).after(newRow);
            $('#TblSuggest > tbody > tr').eq(updateRowIndex).remove();
            //$('#TblSuggest > tbody > tr').eq(updateRowIndex).find('.RowEmployees_dataOrder').text(updateRowIndex + 1);
            $('#TblSuggest > tbody > tr').eq(updateRowIndex).find('.rowNo').text(updateRowIndex + 1);

        }



    }
    else {
        if ($('#txtSuggest').val() == "-1") {
            $('#txtSuggest').parents('.form-group').removeClass('has-success');

            $('#txtSuggest').parents('.form-group').addClass('has-error');
            $('#txtSuggest').focus();

        } else {
            $('#txtSuggest').parents('.form-group').removeClass('has-error');

            $('#txtSuggest').parents('.form-group').addClass('has-success');

        }

    }

    $("#txtSuggest").val('');
    //$("#txtOrder").val("");

    $('#SpnBtnAddSuggest').text(GetTitledataLabelPop('strAddrow'));
    $('#btnAddRowSuggest').removeClass('blue');
    $('#btnAddRowSuggest').addClass('purple');

    $('#SpnBtnAddSuggest').removeClass('fa-edit');
    $('#SpnBtnAddSuggest').addClass('fa-plus');

}
function DeleteInvRowSuggest(e) {
    //  $(e).parents().closest("tr").find('.RowStatus').text(3);
    //  $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 3);


    //   $(e).parents().closest("tr").css("display", "none");
    $(e).parents('tr').remove();
    UpdateTableSuggest();
}

function UpdateTableSuggest() {
    $('#TblSuggest tbody').find('tr').each(function (i, el) {


        $(el).find('.rowNo').text((i + 1))
        //$(el).find('.RowEmployees_dataOrder').text((i + 1))

    });

}

function UpdateInvRowSuggest(e) {
    debugger;
    for (var i = 0; i < $('#TblSuggest tbody tr').length; i++) {

        $($('#TblSuggest tbody tr')[i]).removeClass('ReadyToUpdate');
    }
    debugger;
    $(e).parents('tr').addClass('ReadyToUpdate');
    // $(e).parents().closest("tr").find('.RowStatus').text(2);
    // $(e).parents().closest("tr").find('.RowStatus').attr("RowStatusProp", 2);

    $('#TblSuggest tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');

    $("#txtSuggest").val($(e).parents('tr').find('.RowSuggest').attr('SuggestProp'));
    $('#SpnBtnAddSuggest').text(GetTitledataLabelPop('strUpdaterow'));
    $('#btnAddRowSuggest').removeClass('purple');
    $('#btnAddRowSuggest').addClass('blue');
    $('#SpnBtnAddSuggest').removeClass('fa-plus');
    $('#SpnBtnAddSuggest').addClass('fa-edit');


}
///End Suggest-----


function DiplayAddDialog()
{
    RestFormData();
    GetNewId();
    $('#txtEmployees_data_Id').val(newId);
    $("#txtEmployees_data_Id").prop("disabled", true);
    $("#txtEmployees_data_Id").addClass('edited');
   
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
   // debugger;
    var result = true;
    if ($('#TblHeader  tbody tr').length == 0)
    {
        bootbox.alert(GetTitledataLabelPop('strMsgCntntWorkOrdr'));

        result = false;
        
    }
    else
    {
       // debugger;
         var allDetailInputs = $('#divBody input[type="text"]');

            for (var i = 0; i < allDetailInputs.length; i++)
            {
          //  debugger;
                if ($(allDetailInputs[i]).attr('required') != undefined)
                {
                    var idobj = jQuery(allDetailInputs[i]).attr('id')
                 //   debugger;

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







function PublishData()
{
    var Identity_no = $('#txtIdentity_No').val();
    if (Identity_no != "" && Identity_no != null && Identity_no != undefined) {

        var DTO = { 'Identity_no': Identity_no };
        $.ajax({
            type: "POST",
            url: $(location).attr('href') + "/SelectAll",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (data) {
                debugger;
                if (data.d != null) {
                    if (data.d.length > 0) {
                        RestSearchData();
                        debugger;
                        FillDataTable(data.d);
                        DisabledControls(true);
                    } else if (data.d.length == 0) {
                        DisabledControls(false);
                    }

                } 

            }



        });
    } else
    {
        bootbox.alert(GetTitledataLabelPop('strMsgChooseIdentity'));
    }
}
function RestSearchData() {

    $("#txtSearchId").val("");
    $("#txtSearch_Name").val("");
    $("#txtSearch_NameEn").val("");
    
}

function  FillEmployeData(objList)
{
debugger;
            $('#selComapny_Id ').val(objList.Company_Id).trigger('change');  

            $('#txtIdentity_No').val(objList.Identity_No) ;

            $('#txtAdministration_Name').val(objList.Administration_Name);

            $('#txtDepartment_Name').val(objList.Department_Name);

            $('#txtJob_Description').val(objList.Job_Description) ;

            $('#txtEmployee_Name').val(objList.Employee_Name);

            $('#txtTitle').val(objList.Title);

            $('#txtHire_Date').val(WriteDateToPageNum(objList.Hire_Date)) ;

            $('#txtTransportationAllowance').val(objList.TransportationAllowance);

            $('#txtBasicAllowance').val(objList.BasicAllowance) ;

            $('#txtHousingAllowance').val(objList.HousingAllowance) ;

            $('#txtSchoolAllowance').val(0) ;

            $('#txtOtherAllowance').val(objList.OtherAllowance) ;

            $('#txtMonthlyCost').val(objList.MonthlyCost);

            $('#txtAnnualCost').val(objList.AnnualCost) ;

            $('#txtTotalCost').val(objList.TotalCost) ;

            $('#txtWorkingYear').val(objList.WorkingYear);

            $('#txtworkingMonth').val(objList.workingMonth)  ;

            $('#txtworkingDay').val(objList.workingDay) ;

}
function FillDataTable(objList) {

    FillEmployeData(objList[0]);
    if (objList != null && objList.length > 0) {
        debugger;

        for (var i = 0; i < objList.length; i++) {

            if (objList[i].Item_Type == 1)
            {
                $('#TblHeader tbody').append('<tr>' +
                    ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblHeader tbody tr').length + 1) + '</td>' +
                    ' <td style="display:none;" class="Rec_Hdr_Id"  Rec_Hdr_IdProp= "' + objList[i].Dtls_Id + '" > ' + objList[i].Dtls_Id + ' </td>' +
                    // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "0" > 0 </td>' +
                    ' <td style="width: 70%;word-break: break-all" class="RowDailyTask"  DailyTaskProp ="' + objList[i].Item_Name + '">' + objList[i].Item_Name + '</td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRow(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRow(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
                    '</tr>');

            } else if (objList[i].Item_Type == 2)
            {

                $('#TblAchievement tbody').append('<tr>' +
                    ' <td style="width: 10%;" class="rowNo"  >' + ($('#TTblAchievement tbody tr').length + 1) + '</td>' +
                    ' <td style="display:none;" class="Rec_Hdr_Id"  Rec_Hdr_IdProp= "' + objList[i].Dtls_Id + '" > ' + objList[i].Dtls_Id + ' </td>' +
                    // ' <td style="display:none;" class="RowStatus"   RowStatusProp= "0" > 0 </td>' +
                    ' <td style="width: 70%;word-break: break-all" class="RowAchievement"  AchievementProp ="' + objList[i].Item_Name + '">' + objList[i].Item_Name + '</td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowAchievement(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowAchievement(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
                    '</tr>');


            }
            else if (objList[i].Item_Type == 3) {

                $('#TblPendingTask tbody').append('<tr>' +
                    ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblPendingTask tbody tr').length + 1) + '</td>' +
                    ' <td style="display:none;" class="Rec_Hdr_Id"  Rec_Hdr_IdProp= "' + objList[i].Dtls_Id + '" > ' + objList[i].Dtls_Id + ' </td>' +
                    ' <td style="width: 70%;word-break: break-all" class="RowPendingTask"  PendingTaskProp ="' + objList[i].Item_Name + '">' + objList[i].Item_Name + '</td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowPendingTask(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowPendingTask(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
                    '</tr>');


            }

            else if (objList[i].Item_Type == 4) {

                $('#TblSuggest tbody').append('<tr>' +
                    ' <td style="width: 10%;" class="rowNo"  >' + ($('#TblSuggest tbody tr').length + 1) + '</td>' +
                    ' <td style="display:none;" class="Rec_Hdr_Id"  Rec_Hdr_IdProp= "' + objList[i].Dtls_Id + '" > ' + objList[i].Dtls_Id + ' </td>' +
                    ' <td style="width: 70%;word-break: break-all" class="RowSuggest"  SuggestProp ="' + objList[i].Item_Name + '">' + objList[i].Item_Name + '</td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="UpdateInvRowSuggest(this);" data-toggle="modal" class="btn btn-md blue"><span>' + GetTitledataLabelPop('strbtnEdit') + '</span><i class="fa fa-edit"></i></a></td>' +
                    ' <td  style="width: 10%;" ><a href="javascript:;" id="btnUpdate" onclick="DeleteInvRowSuggest(this);" data-toggle="modal" class="btn btn-md red"><span >' + GetTitledataLabelPop('strbtnDel') + '</span><i class="fa fa-trash"></i></a></td>' +
                    '</tr>');


            }



        }
    }

}








function select(e) {
    $(e).find('input').attr('checked', true);
    $('#TblHeader tbody tr').css('background', 'transparent');
    $(e).parent('tr').css('background', '#36c6d3');
}



function DiplayDeleteDialog() 
{
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

    }
    else {
        bootbox.alert(GetTitledataLabelPop('strMsgNoDataSelect'));
        
    }
}



function deleteDataByObj() 
{
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

    if ($('#TblHeader').find('input[type="radio"]:checked').length > 0) 
    {
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






function RestFormData()
{
   

    $('#selComapny_Id ').val('').trigger('change');

    $('#txtIdentity_No').val('');

    $('#txtAdministration_Name').val('');

    $('#txtDepartment_Name').val('');

    $('#txtJob_Description').val('');

    $('#txtEmployee_Name').val('');

    $('#txtTitle').val('');

    $('#txtHire_Date').val('');

    $('#txtTransportationAllowance').val('');

    $('#txtBasicAllowance').val('');

    $('#txtHousingAllowance').val('');

    $('#txtSchoolAllowance').val('0');

    $('#txtOtherAllowance').val('');

    $('#txtMonthlyCost').val('');

    $('#txtAnnualCost').val('');

    $('#txtTotalCost').val('');

    $('#txtWorkingYear').val('');

    $('#txtworkingMonth').val('');

    $('#txtworkingDay').val('');



    $("#TblHeader tbody").empty();
    $("#TblSuggest tbody").empty();
    $("#TblPendingTask tbody").empty();
    $("#TblAchievement tbody").empty();

   

}
function setMaxLengthFields()
{
    

    $('#txtIdentity_No').attr('maxlength', "10");

    $('#txtAdministration_Name').attr('maxlength', "300");

    $('#txtDepartment_Name').attr('maxlength', "300");

    //$('#txtJob_Description').attr('maxlength', "6");

    $('#txtEmployee_Name').attr('maxlength', "300");

    $('#txtTitle').attr('maxlength', "300");

    $('#txtHire_Date').attr('maxlength', "10");

    $('#txtTransportationAllowance').attr('maxlength', "9");

    $('#txtBasicAllowance').attr('maxlength', "9");

    $('#txtHousingAllowance').attr('maxlength', "9");

    $('#txtSchoolAllowance').attr('maxlength', "9");

    $('#txtOtherAllowance').attr('maxlength', "9");

    $('#txtMonthlyCost').attr('maxlength', "9");

    $('#txtAnnualCost').attr('maxlength', "9");

    $('#txtTotalCost').attr('maxlength', "9");

    $('#txtWorkingYear').attr('maxlength', "2");

    $('#txtworkingMonth').attr('maxlength', "2");

    $('#txtworkingDay').attr('maxlength', "2");


    $('#txtDailyTask').attr('maxlength', "150");
    $('#txtAchievement').attr('maxlength', "150");
    $('#txtPendingTask').attr('maxlength', "150");
    $('#txtSuggest').attr('maxlength', "150");



    
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


function UpdateDataObject() 
{

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

function CheckWorkDates()
{
    
    var HireDte = $('#txtHire_Date').val();
    debugger;
    if (HireDte != "" && HireDte != null && HireDte != undefined && HireDte.length == 10)
    {

    var DTO = { 'HireDte': ReadDateFromPageNum(HireDte) };
        $.ajax({
            type: "POST",
            url: $(location).attr('href') + "/SelectDates",
            data: JSON.stringify(DTO),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                debugger;
                var object=data.d ;
                if (object != null) {
          $('#txtworkingDay').attr('disabled', true);
          $('#txtworkingMonth').attr('disabled', true);
          $('#txtWorkingYear').attr('disabled', true);
           for (var i = 0; i < object.length; i++) {
                $('#txtworkingDay').val(object[i].DayNo);
                $('#txtworkingMonth').val(object[i].MonthNo);
                $('#txtWorkingYear').val(object[i].YearNo);

                DuesChange();
                 }
                 
                }

            }

        

        });
    }
}

function DuesChange()
{ 
debugger;
        $('#txtMonthlyCost').attr('disabled', true);
        $('#txtAnnualCost').attr('disabled', true);
        $('#txtTotalCost').attr('disabled', true);

var Basic = $('#txtBasicAllowance').val();
var Housing = $('#txtHousingAllowance').val();
var Transportation = $('#txtTransportationAllowance').val();
    var School = 0;//$('#txtSchoolAllowance').val();
var Other = $('#txtOtherAllowance').val();

var MonthlyCost=parseFloat(Basic ==""?0:Basic)+parseFloat(Housing ==""?0:Housing)+parseFloat(Transportation ==""?0:Transportation)+parseFloat(School ==""?0:School)+parseFloat(Other ==""?0:Other);
console.log(MonthlyCost); 
$('#txtMonthlyCost').val(MonthlyCost);
var AnnualCost=MonthlyCost * 12;
console.log(AnnualCost); 
   $('#txtAnnualCost').val(AnnualCost);
if ($('#txtworkingMonth').val() !="" && $('#txtworkingMonth').val() !=null && $('#txtWorkingYear').val() !="" && $('#txtWorkingYear').val() !=null)
{
    debugger;
var TotalCost= (MonthlyCost *parseInt($('#txtworkingMonth').val()) ) + (AnnualCost * parseInt($('#txtWorkingYear').val()) );
$('#txtTotalCost').val(TotalCost);
console.log(TotalCost);


}


}

function DisabledControls(flag)
{
    ///  debugger;

    var allDetailInputs = $('#divBody input,select,table');
    for (var i = 0; i < allDetailInputs.length; i++) {
        var idobj = jQuery(allDetailInputs[i]).attr('id')

        if (idobj != "selComapny_Id") {
            $('#' + idobj).attr('disabled', flag);
        }

    }

    $('#txtDailyTask').attr('disabled', flag);
    $('#btnAddRow').attr('disabled', flag);

    $('#txtAchievement').attr('disabled', flag);
    $('#btnAddRowAchievement').attr('disabled', flag);

    $('#txtPendingTask').attr('disabled', flag);
    $('#btnAddRowPendingTask').attr('disabled', flag);

    $('#txtSuggest').attr('disabled', flag);
    $('#btnAddRowSuggest').attr('disabled', flag);
    $('#btnSaveAll').attr('disabled', flag);
    if (flag == true) {
        $('#btnSaveAll').hide();
    } else
    {
        $('#btnSaveAll').show();
    }
    
    //$('#btnSaveAll').prop('disabled', false);

    $('#selComapny_Id').attr('disabled', flag);

    $('#TblHeader tbody').attr('disabled', flag);


    $('#txtworkingDay').attr('disabled',true)
    $('#txtworkingMonth').attr('disabled', true)
    $('#txtWorkingYear').attr('disabled', true)
    $('#txtMonthlyCost').attr('disabled', true)
    $('#txtAnnualCost').attr('disabled', true)
    $('#txtTotalCost').attr('disabled', true)


   

    //$('#TblHeader td:nth-child(2)').hide();

   // $('#TblHeader').find('.clsupdate').hide();
    

}

