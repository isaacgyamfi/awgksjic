const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commanderySchema = new Schema({
  registration_id: String,
  picture: String,
  title: String,
  gender: String,
  surname: String,
  othername: String,
  parish: String,
  commandery_no: String,
  dob: Date,
  place_of_birth: String,
  nationality: String,
  postal_address: String,
  residential_address: String,
  telephone: String,
  cellphone: String,
  email: String,
  hometown: String,
  region: String,
  occ_status: String,
  profession: String,
  place_of_work: String,
  work_address: String,
  office_phone: String,
  position_1: String,
  position_supr1: String,
  from_1: Date,
  to_1: Date,
  position_2: String,
  position_supr2: String,
  from_2: Date,
  to_2: Date,
  position_3: String,
  position_supr3: String,
  from_3: Date,
  to_3: Date,
  position_4: String,
  position_supr4: String,
  from_4: Date,
  to_4: Date,
  position_5: String,
  position_supr5: String,
  from_5: Date,
  to_5: Date,
  position_6: String,
  position_supr6: String,
  from_6: Date,
  to_6: Date,
  position_7: String,
  position_supr7: String,
  from_7: Date,
  to_7: Date,
  position_8: String,
  position_supr8: String,
  from_8: Date,
  to_8: Date,
  position_9: String,
  position_supr9: String,
  from_9: Date,
  to_9: Date,
  position_10: String,
  position_supr10: String,
  from_10: Date,
  to_10: Date,
  position_11: String,
  position_supr11: String,
  from_11: Date,
  to_11: Date,
  doi: Date,
  commandery_of_initiation: String,
  init_no: String,
  comm_transferred: String,
  no_of_comm_transferred: Number,
  second_dg_date: Date,
  fourth_dg_date: Date,
  date_other: Date,
  honour_1: String,
  date_1: Date,
  honour_2: String,
  date_2: Date,
  honour_3: String,
  date_3: Date,
  honour_4: String,
  dater_4: Date,
  honour_5: String,
  date_5: Date,
  marriage_status: String,
  date_of_marriage: Date,
  spouse: String,
  marriage_type: String,
  child_1: String,
  dob_of_child_1: Date,
  child_2: String,
  dob_of_child_2: Date,
  child_3: String,
  dob_of_child_3: Date,
  child_4: String,
  dob_of_child_4: Date,
  child_5: String,
  dob_of_child_5: Date,
  date_of_baptism: Date,
  first_communion: Date,
  date_of_confirmation: Date,
  service_parish: String,
});

module.exports =
  mongoose.models.Commandery || mongoose.model('Commandery', commanderySchema);
