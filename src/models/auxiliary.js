const db = require('../utils/database');

module.exports = class Auxiliary {
  constructor(
    id,
    registration_id,
    picture,
    title,
    gender,
    surname,
    othername,
    parish,
    auxiliary_no,
    dob,
    place_of_birth,
    nationality,
    postal_address,
    residential_address,
    telephone,
    cellphone,
    email,
    hometown,
    region,
    occ_status,
    profession,
    place_of_work,
    work_address,
    office_phone,
    position_1,
    position_supr_1,
    from_1,
    to_1,
    position_2,
    position_supr_2,
    from_2,
    to_2,
    position_3,
    position_supr_3,
    from_3,
    to_3,
    position_4,
    position_supr_4,
    from_4,
    to_4,
    position_5,
    position_supr_5,
    from_5,
    to_5,
    position_6,
    position_supr_6,
    from_6,
    to_6,
    position_7,
    position_supr_7,
    from_7,
    to_7,
    position_8,
    position_supr_8,
    from_8,
    to_8,
    position_9,
    position_supr_9,
    from_9,
    to_9,
    position_10,
    position_supr_10,
    from_10,
    to_10,
    position_11,
    position_supr_11,
    from_11,
    to_11,
    doi,
    auxiliary_of_initiation,
    init_no,
    auxi_transferred,
    no_of_auxi_transferred,
    second_dg_date,
    honour_1,
    date_honour_1,
    honour_2,
    date_honour_2,
    honour_3,
    date_honour_3,
    honour_4,
    date_honour_4,
    honour_5,
    date_honour_5,
    marriage_status,
    date_of_marriage,
    spouse,
    marriage_type,
    child_1,
    dob_of_child_1,
    child_2,
    dob_of_child_2,
    child_3,
    dob_of_child_3,
    child_4,
    dob_of_child_4,
    child_5,
    dob_of_child_5,
    date_of_baptism,
    first_communion,
    date_of_confirmation,
    service_parish,
  ) {
    this.id = id;
    this.registration_id = registration_id;
    this.picture = picture;
    this.title = title;
    this.gender = gender;
    this.surname = surname;
    this.othername = othername;
    this.parish = parish;
    this.auxiliary_no = auxiliary_no;
    this.dob = dob;
    this.place_of_birth = place_of_birth;
    this.nationality = nationality;
    this.postal_address = postal_address;
    this.residential_address = residential_address;
    this.telephone = telephone;
    this.cellphone = cellphone;
    this.email = email;
    this.hometown = hometown;
    this.region = region;
    this.occ_status = occ_status;
    this.profession = profession;
    this.place_of_work = place_of_work;
    this.work_address = work_address;
    this.office_phone = office_phone;
    this.position_1 = position_1;
    this.position_supr_1 = position_supr_1;
    this.from_1 = from_1;
    this.to_1 = to_1;
    this.position_2 = position_2;
    this.position_supr_2 = position_supr_2;
    this.from_2 = from_2;
    this.to_2 = to_2;
    this.position_3 = position_3;
    this.position_supr_3 = position_supr_3;
    this.from_3 = from_3;
    this.to_3 = to_3;
    this.position_4 = position_4;
    this.position_supr_4 = position_supr_4;
    this.from_4 = from_4;
    this.to_4 = to_4;
    this.position_5 = position_5;
    this.position_supr_5 = position_supr_5;
    this.from_5 = from_5;
    this.to_5 = to_5;
    this.position_6 = position_6;
    this.position_supr_6 = position_supr_6;
    this.from_6 = from_6;
    this.to_6 = to_6;
    this.position_7 = position_7;
    this.position_supr_7 = position_supr_7;
    this.from_7 = from_7;
    this.to_7 = to_7;
    this.position_8 = position_8;
    this.position_supr_8 = position_supr_8;
    this.from_8 = from_8;
    this.to_8 = to_8;
    this.position_9 = position_9;
    this.position_supr_9 = position_supr_9;
    this.from_9 = from_9;
    this.to_9 = to_9;
    this.position_10 = position_10;
    this.position_supr_10 = position_supr_10;
    this.from_10 = from_10;
    this.to_10 = to_10;
    this.position_11 = position_11;
    this.position_supr_11 = position_supr_11;
    this.from_11 = from_11;
    this.to_11 = to_11;
    this.doi = doi;
    this.auxiliary_of_initiation = auxiliary_of_initiation;
    this.init_no = init_no;
    this.auxi_transferred = auxi_transferred;
    this.no_of_auxi_transferred = no_of_auxi_transferred;
    this.second_dg_date = second_dg_date;
    this.honour_1 = honour_1;
    this.date_honour_1 = date_honour_1;
    this.honour_2 = honour_2;
    this.date_honour_2 = date_honour_2;
    this.honour_3 = honour_3;
    this.date_honour_3 = date_honour_3;
    this.honour_4 = honour_4;
    this.date_honour_4 = date_honour_4;
    this.honour_5 = honour_5;
    this.date_honour_5 = date_honour_5;
    this.marriage_status = marriage_status;
    this.date_of_marriage = date_of_marriage;
    this.spouse = spouse;
    this.marriage_type = marriage_type;
    this.child_1 = child_1;
    this.dob_of_child_1 = dob_of_child_1;
    this.child_2 = child_2;
    this.dob_of_child_2 = dob_of_child_2;
    this.child_3 = child_3;
    this.dob_of_child_3 = dob_of_child_3;
    this.child_4 = child_4;
    this.dob_of_child_4 = dob_of_child_4;
    this.child_5 = child_5;
    this.dob_of_child_5 = dob_of_child_5;
    this.date_of_baptism = date_of_baptism;
    this.first_communion = first_communion;
    this.date_of_confirmation = date_of_confirmation;
    this.service_parish = service_parish;
  }

  save() {
    return db.query(
      'INSERT INTO auxiliary (registration_id,picture,title,gender,surname,othername,parish,auxiliary_no,dob,place_of_birth,nationality,postal_address,residential_address,telephone,cellphone,email,hometown,region,occ_status,profession,place_of_work,work_address,office_phone,position_1,position_supr_1,from_1,to_1,position_2,position_supr_2,from_2,to_2,position_3,position_supr_3,from_3,to_3,position_4,position_supr_4,from_4,to_4,position_5,position_supr_5,from_5,to_5,position_6,position_supr_6,from_6,to_6,position_7,position_supr_7,from_7,to_7,position_8,position_supr_8,from_8,to_8,position_9,position_supr_9,from_9,to_9,position_10,position_supr_10,from_10,to_10,position_11,position_supr_11,from_11,to_11,doi,auxiliary_of_initiation,init_no,auxi_transferred,no_of_auxi_transferred,second_dg_date,honour_1,date_honour_1,honour_2,date_honour_2,honour_3,date_honour_3,honour_4,date_honour_4,honour_5,date_honour_5,marriage_status,date_of_marriage,spouse,marriage_type,child_1,dob_of_child_1,child_2,dob_of_child_2,child_3,dob_of_child_3,child_4,dob_of_child_4,child_5,dob_of_child_5,date_of_baptism,first_communion,date_of_confirmation,service_parish) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        this.registration_id,
        this.picture,
        this.title,
        this.gender,
        this.surname,
        this.othername,
        this.parish,
        this.auxiliary_no,
        this.dob,
        this.place_of_birth,
        this.nationality,
        this.postal_address,
        this.residential_address,
        this.telephone,
        this.cellphone,
        this.email,
        this.hometown,
        this.region,
        this.occ_status,
        this.profession,
        this.place_of_work,
        this.work_address,
        this.office_phone,
        this.position_1,
        this.position_supr_1,
        this.from_1,
        this.to_1,
        this.position_2,
        this.position_supr_2,
        this.from_2,
        this.to_2,
        this.position_3,
        this.position_supr_3,
        this.from_3,
        this.to_3,
        this.position_4,
        this.position_supr_4,
        this.from_4,
        this.to_4,
        this.position_5,
        this.position_supr_5,
        this.from_5,
        this.to_5,
        this.position_6,
        this.position_supr_6,
        this.from_6,
        this.to_6,
        this.position_7,
        this.position_supr_7,
        this.from_7,
        this.to_7,
        this.position_8,
        this.position_supr_8,
        this.from_8,
        this.to_8,
        this.position_9,
        this.position_supr_9,
        this.from_9,
        this.to_9,
        this.position_10,
        this.position_supr_10,
        this.from_10,
        this.to_10,
        this.position_11,
        this.position_supr_11,
        this.from_11,
        this.to_11,
        this.aoi,
        this.auxiliary_of_initiation,
        this.init_no,
        this.auxi_transferred,
        this.no_of_auxi_transferred,
        this.second_dg_date,
        this.honour_1,
        this.date_honour_1,
        this.honour_2,
        this.date_honour_2,
        this.honour_3,
        this.date_honour_3,
        this.honour_4,
        this.date_honour_4,
        this.honour_5,
        this.date_honour_5,
        this.marriage_status,
        this.date_of_marriage,
        this.spouse,
        this.marriage_type,
        this.child_1,
        this.dob_of_child_1,
        this.child_2,
        this.dob_of_child_2,
        this.child_3,
        this.dob_of_child_3,
        this.child_4,
        this.dob_of_child_4,
        this.child_5,
        this.dob_of_child_5,
        this.date_of_baptism,
        this.first_communion,
        this.date_of_confirmation,
        this.service_parish,
      ],
      (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log(result);
      },
    );
  }
};
