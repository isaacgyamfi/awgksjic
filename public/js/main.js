$(document).ready(function() {
  $('#summary-table-auxiliary').DataTable();
});
$(document).ready(function() {
  $('#summary-table-commandery').DataTable();
});
$('#submission-btn-commandery').click(function() {
  $('#commandery_idMod').text($('#commandery_id').val());
  $('#titleMod').text($('#title').val());
  $('#genderMod').text($('#gender').val());
  $('#surnameMod').text($('#surname').val());
  $('#other_namesMod').text($('#other_names').val());
  $('#parishMod').text($('#parish').val());
  $('#dobMod').text($('#dob').val());
  $('#pobMod').text($('#pob').val());
  $('#nationalityMod').text($('#nationality').val());
  $('#postal_addressMod').text($('#postal_address').val());
  $('#residential_addressMod').text($('#residential_address').val());
  $('#telephoneMod').text($('#telephone').val());
  $('#cellphoneMod').text($('#cellphone').val());
  $('#emailMod').text($('#email').val());
  $('#hometownMod').text($('#hometown').val());
  $('#regionMod').text($('#region').val());
  $('#occupational_statusMod').text($('#occupational_status').val());
  $('#professionMod').text($('#profession').val());
  $('#place_of_workMod').text($('#place_of_work').val());
  $('#work_addressMod').text($('#work_address').val());
  $('#office_phoneMod').text($('#office_phone').val());
  $('#position_1Mod').text($('#position_1').val());
  $('#held_1Mod').text($('#held_1').val());
  $('#from_1Mod').text($('#from_1').val());
  $('#to_1Mod').text($('#to_1').val());
  $('#position_2Mod').text($('#position_2').val());
  $('#held_2Mod').text($('#held_2').val());
  $('#from_2Mod').text($('#from_2').val());
  $('#to_2Mod').text($('#to_2').val());
  $('#position_3Mod').text($('#position_3').val());
  $('#held_3Mod').text($('#held_3').val());
  $('#from_3Mod').text($('#from_3').val());
  $('#to_3Mod').text($('#to_3').val());
  $('#position_4Mod').text($('#position_4').val());
  $('#held_4Mod').text($('#held_4').val());
  $('#from_4Mod').text($('#from_4').val());
  $('#to_4Mod').text($('#to_4').val());
  $('#position_5Mod').text($('#position_5').val());
  $('#held_5Mod').text($('#held_5').val());
  $('#from_5Mod').text($('#from_5').val());
  $('#to_5Mod').text($('#to_5').val());
  $('#doiMod').text($('#doi').val());
  $('#coi_nameMod').text($('#coi_name').val());
  $('#coi_numberMod').text($('#coi_number').val());
  $('#comm_transferredMod').text($('#comm_transferred').val());
  $('#num_of_comm_transferredMod').text($('#num_of_comm_transferred').val());
  $('#degree_2Mod').text($('#degree_2').val());
  $('#degree_4Mod').text($('#degree_4').val());
  $('#degree_5Mod').text($('#degree_5').val());
  $('#honour_1Mod').text($('#honour_1').val());
  $('#doh_1Mod').text($('#doh_1').val());
  $('#honour_2Mod').text($('#honour_2').val());
  $('#doh_2Mod').text($('#doh_2').val());
  $('#honour_3Mod').text($('#honour_3').val());
  $('#doh_3Mod').text($('#doh_3').val());
  $('#honour_4Mod').text($('#honour_4').val());
  $('#doh_4Mod').text($('#doh_4').val());
  $('#honour_5Mod').text($('#honour_5').val());
  $('#doh_5Mod').text($('#doh_5').val());
  $('#marriage_statusMod').text($('#marriage_status').val());
  $('#date_of_marriageMod').text($('#date_of_marriage').val());
  $('#name_of_spouseMod').text($('#name_of_spouse').val());
  $('#type_of_marriageMod').text($('#marriage_type').val());
  $('#child_1Mod').text($('#child_1').val());
  $('#dob_child_1Mod').text($('#dob_child_1').val());
  $('#child_2Mod').text($('#child_2').val());
  $('#dob_child_2Mod').text($('#dob_child_2').val());
  $('#child_3Mod').text($('#child_3').val());
  $('#dob_child_3Mod').text($('#dob_child_3').val());
  $('#child_4Mod').text($('#child_4').val());
  $('#dob_child_4Mod').text($('#dob_child_4').val());
  $('#child_5Mod').text($('#child_5').val());
  $('#dob_child_5Mod').text($('#dob_child_5').val());
  $('#date_of_baptismMod').text($('#date_of_baptism').val());
  $('#date_of_communionMod').text($('#date_of_communion').val());
  $('#date_of_confirmationMod').text($('#date_of_confirmation').val());
  $('#service_parishMod').text($('#service_parish').val());
});

$('#submit').click(function() {
  $('#formCommandery').submit();
  alert('You have successfully been registered');
  window.location.href = '/';
});

$('#submission-btn-auxiliary').click(function() {
  $('#auxiliary_idMod').text($('#commandery_id').val());
  $('#titleMod').text($('#title').val());
  $('#surnameMod').text($('#surname').val());
  $('#genderMod').text($('#gender').val());
  $('#other_namesMod').text($('#other_names').val());
  $('#parishMod').text($('#parish').val());
  $('#dobMod').text($('#dob').val());
  $('#pobMod').text($('#pob').val());
  $('#nationalityMod').text($('#nationality').val());
  $('#postal_addressMod').text($('#postal_address').val());
  $('#residential_addressMod').text($('#residential_address').val());
  $('#telephoneMod').text($('#telephone').val());
  $('#cellphoneMod').text($('#cellphone').val());
  $('#emailMod').text($('#email').val());
  $('#hometownMod').text($('#hometown').val());
  $('#regionMod').text($('#region').val());
  $('#occupational_statusMod').text($('#occupational_status').val());
  $('#professionMod').text($('#profession').val());
  $('#place_of_workMod').text($('#place_of_work').val());
  $('#work_addressMod').text($('#work_address').val());
  $('#office_phoneMod').text($('#office_phone').val());
  $('#position_1Mod').text($('#position_1').val());
  $('#held_1Mod').text($('#held_1').val());
  $('#from_1Mod').text($('#from_1').val());
  $('#to_1Mod').text($('#to_1').val());
  $('#position_2Mod').text($('#position_2').val());
  $('#held_2Mod').text($('#held_2').val());
  $('#from_2Mod').text($('#from_2').val());
  $('#to_2Mod').text($('#to_2').val());
  $('#position_3Mod').text($('#position_3').val());
  $('#held_3Mod').text($('#held_3').val());
  $('#from_3Mod').text($('#from_3').val());
  $('#to_3Mod').text($('#to_3').val());
  $('#position_4Mod').text($('#position_4').val());
  $('#held_4Mod').text($('#held_4').val());
  $('#from_4Mod').text($('#from_4').val());
  $('#to_4Mod').text($('#to_4').val());
  $('#position_5Mod').text($('#position_5').val());
  $('#held_5Mod').text($('#held_5').val());
  $('#from_5Mod').text($('#from_5').val());
  $('#to_5Mod').text($('#to_5').val());
  $('#doiMod').text($('#doi').val());
  $('#aoi_nameMod').text($('#aoi_name').val());
  $('#aoi_numberMod').text($('#aoi_number').val());
  $('#auxi_transferredMod').text($('#auxi_transferred').val());
  $('#num_of_auxi_transferredMod').text($('#num_of_auxi_transferred').val());
  $('#degree_2Mod').text($('#degree_2').val());
  $('#degree_4Mod').text($('#degree_4').val());
  $('#degree_5Mod').text($('#degree_5').val());
  $('#honour_1Mod').text($('#honour_1').val());
  $('#doh_1Mod').text($('#doh_1').val());
  $('#honour_2Mod').text($('#honour_2').val());
  $('#doh_2Mod').text($('#doh_2').val());
  $('#honour_3Mod').text($('#honour_3').val());
  $('#doh_3Mod').text($('#doh_3').val());
  $('#honour_4Mod').text($('#honour_4').val());
  $('#doh_4Mod').text($('#doh_4').val());
  $('#honour_5Mod').text($('#honour_5').val());
  $('#doh_5Mod').text($('#doh_5').val());
  $('#marriage_statusMod').text($('#marriage_status').val());
  $('#date_of_marriageMod').text($('#date_of_marriage').val());
  $('#name_of_spouseMod').text($('#name_of_spouse').val());
  $('#type_of_marriageMod').text($('#marriage_type').val());
  $('#child_1Mod').text($('#child_1').val());
  $('#dob_child_1Mod').text($('#dob_child_1').val());
  $('#child_2Mod').text($('#child_2').val());
  $('#dob_child_2Mod').text($('#dob_child_2').val());
  $('#child_3Mod').text($('#child_3').val());
  $('#dob_child_3Mod').text($('#dob_child_3').val());
  $('#child_4Mod').text($('#child_4').val());
  $('#dob_child_4Mod').text($('#dob_child_4').val());
  $('#child_5Mod').text($('#child_5').val());
  $('#dob_child_5Mod').text($('#dob_child_5').val());
  $('#date_of_baptismMod').text($('#date_of_baptism').val());
  $('#date_of_communionMod').text($('#date_of_communion').val());
  $('#date_of_confirmationMod').text($('#date_of_confirmation').val());
  $('#service_parishMod').text($('#service_parish').val());
});

$('#submit').click(function() {
  $('#formAuxiliary').submit();
  alert('You have successfully been registered');
  window.location.href = '/';
});

let uploadedImage = event => {
  let reader = new FileReader();
  reader.onload = () => {
    let output = document.getElementById('uploaded_image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

let honourDiv = document.getElementById('honour');
let honourBtn = document.getElementById('addHonourBtn');

function addNewHonour(event) {
  event.preventDefault();
  let honourDivCount = honourDiv.parentElement.parentElement.childElementCount;
  let newHonourDiv = document.createElement('div');
  newHonourDiv.innerHTML = `<div id="honour" class="row"><div class="form-group col"><label for="">Honor ${honourDivCount +
    1}</label><input class="form-control" type="text" id="honour_${honourDivCount +
    1}" name="honour_${honourDivCount +
    1}"></div><div class="form-group col"><label for="">Date of honor</label><input class="form-control" type="date" id="doh_${honourDivCount +
    1}" name="date_${honourDivCount + 1}"></div></div>`;
  honourDiv.parentNode.parentNode.append(newHonourDiv);
  if (honourDivCount >= 4) {
    honourBtn.style = 'display: none;';
  }
}

let childDiv = document.getElementById('child_id');
let childBtn = document.getElementById('addChildBtn');

function addNewChild(event) {
  event.preventDefault();
  let childDivCount = childDiv.parentElement.parentElement.childElementCount;
  let newchildDiv = document.createElement('div');
  newchildDiv.innerHTML = `<div id="child_id"><div class="form-group col"><label for="">Child ${childDivCount +
    1}</label><input class="form-control" type="text" id="child_${childDivCount +
    1}" name="child_${childDivCount +
    1}" placeholder="child's name"></div><div class="form-group col"><label for=""> Date of birth of Child ${childDivCount +
    1}</label><input class="form-control" id="dob_child_${childDivCount +
    1}" type="date" name="dob_of_child_${childDivCount + 1}"></div></div>`;
  childDiv.parentNode.parentNode.append(newchildDiv);
  if (childDivCount >= 4) {
    childBtn.style = 'display: none;';
  }
}

let positionDiv = document.getElementById('pos-form');
let positionBtn = document.getElementById('addPositionBtn');

function addNewPositionAuxiliary(event) {
  event.preventDefault();
  let positionDivCount =
    positionDiv.parentElement.parentElement.childElementCount;
  let newPositionDiv = document.createElement('div');
  newPositionDiv.innerHTML = `<div class="pos-form">
            <div class="form-row col-md-12">
            <div class="form-group col-md-3">
                <label for="">Position: </label>
                <select name="position_${positionDivCount +
                  1}" class="form-control" id="position_${positionDivCount +
    1}">
                <option selected disabled>Select</option>
                <option>Local Auxiliary</option>
                <option>District</option>
                <option>Grand</option>
                <option>Supr. Sub</option>
                <option>Supreme</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="">Position held: </label>
                <input class="form-control" type="text" name="position_supr${positionDivCount +
                  1}" id="held_${positionDivCount + 1}">
            </div>
            <div class="form-group col-md-3">
                <label for="">From: </label>
                <input class="form-control" type="date" name="from_${positionDivCount +
                  1}" id="from_${positionDivCount + 1}">
            </div>
            <div class="form-group col-md-3">
                <label for="">To: </label>
                <input class="form-control" type="date" name="to_${positionDivCount +
                  1}" id="to_${positionDivCount + 1}">
            </div>
            </div>
        </div>`;
  positionDiv.parentNode.parentNode.append(newPositionDiv);
  if (positionDivCount >= 10) {
    positionBtn.style = 'display: none;';
  }
}

function addNewPositionCommandery(event) {
  event.preventDefault();
  let positionDivCount =
    positionDiv.parentElement.parentElement.childElementCount;
  let newPositionDiv = document.createElement('div');
  newPositionDiv.innerHTML = `<div class="pos-form">
            <div class="form-row col-md-12">
            <div class="form-group col-md-3">
                <label for="">Position: </label>
                <select name="position_${positionDivCount +
                  1}" class="form-control" id="position_${positionDivCount +
    1}">
                <option selected disabled>Select</option>
                <option>Local Commandery</option>
                <option>District</option>
                <option>Grand</option>
                <option>Supr. Sub</option>
                <option>Supreme</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="">Position held: </label>
                <input class="form-control" type="text" name="position_supr${positionDivCount +
                  1}" id="held_${positionDivCount + 1}">
            </div>
            <div class="form-group col-md-3">
                <label for="">From: </label>
                <input class="form-control" type="date" name="from_${positionDivCount +
                  1}" id="from_${positionDivCount + 1}">
            </div>
            <div class="form-group col-md-3">
                <label for="">To: </label>
                <input class="form-control" type="date" name="to_${positionDivCount +
                  1}" id="to_${positionDivCount + 1}">
            </div>
            </div>
        </div>`;
  positionDiv.parentNode.parentNode.append(newPositionDiv);
  if (positionDivCount >= 10) {
    positionBtn.style = 'display: none;';
  }
}