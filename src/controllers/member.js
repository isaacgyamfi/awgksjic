const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Commandery = require('../models/commandery');
const Auxiliary = require('../models/auxiliary');
module.exports = {
  getCommanderyPage: (req, res) => {
    res.render('commandery', {
      pageTitle: 'Commandery registration',
      path: '/commandery',
    });
  },
  getAuxiliaryPage: (req, res) => {
    res.render('auxiliary', {
      pageTitle: 'Auxiliary registration',
      path: '/auxiliary',
    });
  },
  saveDataCommandery: (req, res) => {
    const image_upload = req.files.imageUpld;
    let image_name = image_upload.name;
    const regis_id = req.body.regis_id;
    const title = req.body.title;
    const gender = req.body.gender;
    const surname = req.body.surname;
    const other_names = req.body.other_names;
    const parish = req.body.parish;
    const commandery_no = req.body.commandery_no;
    const file_extension = image_upload.mimetype.split('/')[1];
    image_name = regis_id + '.' + file_extension;
    const dob = req.body.dob;
    const place_of_birth = req.body.place_of_birth;
    const nationality = req.body.nationality;
    const postal_address = req.body.postal_address;
    const residential_address = req.body.residential_address;
    const telephone = req.body.telephone;
    const cellphone = req.body.cellphone;
    const email = req.body.email;
    const hometown = req.body.hometown;
    const region = req.body.region;
    const occ_status = req.body.occ_status;
    const profession = req.body.profession;
    const place_of_work = req.body.place_of_work;
    const work_address = req.body.work_address;
    const office_phone = req.body.office_phone;
    const position_1 = req.body.position_1;
    const position_supr1 = req.body.position_supr1;
    const from_1 = req.body.from_1;
    const to_1 = req.body.to_1;
    const position_2 = req.body.position_2;
    const position_supr2 = req.body.position_supr2;
    const from_2 = req.body.from_2;
    const to_2 = req.body.to_2;
    const position_3 = req.body.position_3;
    const position_supr3 = req.body.position_supr3;
    const from_3 = req.body.from_3;
    const to_3 = req.body.to_3;
    const position_4 = req.body.position_4;
    const position_supr4 = req.body.position_supr4;
    const from_4 = req.body.from_4;
    const to_4 = req.body.to_4;
    const position_5 = req.body.position_5;
    const position_supr5 = req.body.position_supr5;
    const from_5 = req.body.from_5;
    const to_5 = req.body.to_5;
    const position_6 = req.body.position_6;
    const position_supr6 = req.body.position_supr6;
    const from_6 = req.body.from_6;
    const to_6 = req.body.to_6;
    const position_7 = req.body.position_7;
    const position_supr7 = req.body.position_supr7;
    const from_7 = req.body.from_7;
    const to_7 = req.body.to_7;
    const position_8 = req.body.position_8;
    const position_supr8 = req.body.position_supr8;
    const from_8 = req.body.from_8;
    const to_8 = req.body.to_8;
    const position_9 = req.body.position_9;
    const position_supr9 = req.body.position_supr9;
    const from_9 = req.body.from_9;
    const to_9 = req.body.to_9;
    const position_10 = req.body.position_10;
    const position_supr10 = req.body.position_supr10;
    const from_10 = req.body.from_10;
    const to_10 = req.body.to_10;
    const position_11 = req.body.position_11;
    const position_supr11 = req.body.position_supr11;
    const from_11 = req.body.from_11;
    const to_11 = req.body.to_11;
    const doi = req.body.doi;
    const commandery_of_initiation = req.body.commandery_of_initiation;
    const init_no = req.body.init_no;
    const comm_transferred = req.body.comm_transferred;
    const no_of_comm_transferred = req.body.no_of_comm_transferred;
    const second_dg_date = req.body.second_degree;
    const fourth_dg_date = req.body.fourth_degree;
    const date_other = req.body.date_other;
    const honour_1 = req.body.honour_1;
    const date_1 = req.body.date_1;
    const honour_2 = req.body.honour_2;
    const date_2 = req.body.date_2;
    const honour_3 = req.body.honour_3;
    const date_3 = req.body.date_3;
    const honour_4 = req.body.honour_4;
    const date_4 = req.body.date_4;
    const honour_5 = req.body.honour_5;
    const date_5 = req.body.date_5;
    const marriage_status = req.body.marriage_status;
    const date_of_marriage = req.body.date_of_marriage;
    const spouse = req.body.spouse;
    const marriage_type = req.body.marriage_type;
    const child_1 = req.body.child_1;
    const dob_of_child_1 = req.body.dob_of_child_1;
    const child_2 = req.body.child_2;
    const dob_of_child_2 = req.body.dob_of_child_2;
    const child_3 = req.body.child_3;
    const dob_of_child_3 = req.body.dob_of_child_3;
    const child_4 = req.body.child_4;
    const dob_of_child_4 = req.body.dob_of_child_2;
    const child_5 = req.body.child_5;
    const dob_of_child_5 = req.body.dob_of_child_5;
    const date_baptism = req.body.date_baptism;
    const first_communion = req.body.first_communion;
    const date_confirmation = req.body.date_confirmation;
    const service_parish = req.body.service_parish;

    if (
      image_upload.mimetype === 'image/png' ||
      image_upload.mimetype === 'image/jpeg' ||
      image_upload.mimetype === 'image/gif'
    ) {
      image_upload.mv(
        `public/assets/img/${image_name}`,
        image_upload,
        (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        },
      );
    }
    const commandery = new Commandery(
      null,
      regis_id,
      image_name,
      title,
      gender,
      surname,
      other_names,
      parish,
      commandery_no,
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
      position_supr1,
      from_1,
      to_1,
      position_2,
      position_supr2,
      from_2,
      to_2,
      position_3,
      position_supr3,
      from_3,
      to_3,
      position_4,
      position_supr4,
      from_4,
      to_4,
      position_5,
      position_supr5,
      from_5,
      to_5,
      position_6,
      position_supr6,
      from_6,
      to_6,
      position_7,
      position_supr7,
      from_7,
      to_7,
      position_8,
      position_supr8,
      from_8,
      to_8,
      position_9,
      position_supr9,
      from_9,
      to_9,
      position_10,
      position_supr10,
      from_10,
      to_10,
      position_11,
      position_supr11,
      from_11,
      to_11,
      doi,
      commandery_of_initiation,
      init_no,
      comm_transferred,
      no_of_comm_transferred,
      second_dg_date,
      fourth_dg_date,
      date_other,
      honour_1,
      date_1,
      honour_2,
      date_2,
      honour_3,
      date_3,
      honour_4,
      date_4,
      honour_5,
      date_5,
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
      date_baptism,
      first_communion,
      date_confirmation,
      service_parish,
    );
    commandery.save();

    let documentDefinition = {
      content: [
        `ACCRA WEST GRAND KNIGHTS AND LADIES AUXILARY`,
        `\n\n`,
        `Personal details`,
        `\n`,
        `Name: ${title} ${other_names} ${surname}`,
        `Registration ID: ${regis_id}`,
        `Gender: ${gender}`,
        `Date of birth: ${dob}`,
        `Place of birth: ${place_of_birth}`,
        `Parish: ${parish}`,
        `Commandery number: ${commandery_no}`,
        `Nationality: ${nationality}`,
        `Postal Address: ${postal_address}`,
        `Residential Address: ${residential_address}`,
        `Telephone: ${telephone}`,
        `Cellphone: ${cellphone}`,
        `email: ${email}`,
        `hometown: ${hometown}`,
        `\n\n`,
        `Employment data`,
        `\n`,
        `Occupational status: ${occ_status}`,
        `Profession: ${profession}`,
        `Place of work: ${place_of_work}`,
        `Office phone: ${office_phone}`,
        `Work address: ${work_address}`,
        `\n\n`,
        `Commandery History`,
        `\n`,
        `Date of initiation: ${doi}`,
        `Commandery of initiation: ${commandery_of_initiation}`,
        `Commandery of initiation number: ${init_no}`,
        `Commandery transferred to: ${comm_transferred}`,
        `Number of commandery transferred to: ${no_of_comm_transferred}`,
        `Second degree date: ${second_dg_date}`,
        `Fourth degree date: ${fourth_dg_date}`,
        `Fifth degree date: ${date_other}`,
        `\n\n`,
        `Marriage details`,
        `\n`,
        `Marriage status: ${marriage_status}`,
        `Date of marriage: ${date_of_marriage}`,
        `Spouse: ${spouse}`,
        `Type of marriage: ${marriage_type}`,
        `First child: ${child_1}`,
        `Date of birth of first child: ${dob_of_child_1}`,
        `Second child: ${child_2}`,
        `Date of second child: ${dob_of_child_2}`,
        `Third child: ${child_3}`,
        `Date of birth of third child: ${dob_of_child_3}`,
        `Fourth child: ${child_4}`,
        `Date of birth of fourth child: ${dob_of_child_4}`,
        `Fifth child: ${child_5}`,
        `Date of birth of fifth child: ${dob_of_child_5}`,
        `\n\n`,
        `Sacramental details`,
        `\n`,
        `Date of baptism: ${date_baptism}`,
        `Date of first communion: ${first_communion}`,
        `Date of confirmation: ${date_confirmation}`,
        `Service in parish: ${service_parish}`,
      ],
    };
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data) => {
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=AWGKSJI.pdf',
      });
      const download = Buffer.from(data.toString('utf-8'), 'base64');
      res.end(download);
    });
  },
  saveDataAuxiliary: (req, res) => {
    let image_upload = req.files.imageUpld;
    let image_name = image_upload.name;
    let regis_id = req.body.regis_id;
    let title = req.body.title;
    let gender = req.body.gender;
    let surname = req.body.surname;
    let other_names = req.body.other_names;
    let parish = req.body.parish;
    let auxiliary_no = req.body.auxiliary_no;
    let file_extension = image_upload.mimetype.split('/')[1];
    image_name = regis_id + '.' + file_extension;
    let dob = req.body.dob;
    let place_of_birth = req.body.place_of_birth;
    let nationality = req.body.nationality;
    let postal_address = req.body.postal_address;
    let residential_address = req.body.residential_address;
    let telephone = req.body.telephone;
    let cellphone = req.body.cellphone;
    let email = req.body.email;
    let hometown = req.body.hometown;
    let region = req.body.region;
    let occ_status = req.body.occ_status;
    let profession = req.body.profession;
    let place_of_work = req.body.place_of_work;
    let work_address = req.body.work_address;
    let office_phone = req.body.office_phone;
    let position_1 = req.body.position_1;
    let position_supr1 = req.body.position_supr1;
    let from_1 = req.body.from_1;
    let to_1 = req.body.to_1;
    let position_2 = req.body.position_2;
    let position_supr2 = req.body.position_supr2;
    let from_2 = req.body.from_2;
    let to_2 = req.body.to_2;
    let position_3 = req.body.position_3;
    let position_supr3 = req.body.position_supr3;
    let from_3 = req.body.from_3;
    let to_3 = req.body.to_3;
    let position_4 = req.body.position_4;
    let position_supr4 = req.body.position_supr4;
    let from_4 = req.body.from_4;
    let to_4 = req.body.to_4;
    let position_5 = req.body.position_5;
    let position_supr5 = req.body.position_supr5;
    let from_5 = req.body.from_5;
    let to_5 = req.body.to_5;
    let position_6 = req.body.position_6;
    let position_supr6 = req.body.position_supr6;
    let from_6 = req.body.from_6;
    let to_6 = req.body.to_6;
    let position_7 = req.body.position_7;
    let position_supr7 = req.body.position_supr7;
    let from_7 = req.body.from_7;
    let to_7 = req.body.to_7;
    let position_8 = req.body.position_8;
    let position_supr8 = req.body.position_supr8;
    let from_8 = req.body.from_8;
    let to_8 = req.body.to_8;
    let position_9 = req.body.position_9;
    let position_supr9 = req.body.position_supr9;
    let from_9 = req.body.from_9;
    let to_9 = req.body.to_9;
    let position_10 = req.body.position_10;
    let position_supr10 = req.body.position_supr10;
    let from_10 = req.body.from_10;
    let to_10 = req.body.to_10;
    let position_11 = req.body.position_11;
    let position_supr11 = req.body.position_supr11;
    let from_11 = req.body.from_11;
    let to_11 = req.body.to_11;
    let doi = req.body.doi;
    let auxiliary_of_initiation = req.body.auxiliary_of_initiation;
    let init_no = req.body.init_no;
    let auxi_transferred = req.body.auxi_transferred;
    let no_of_auxi_transferred = req.body.no_of_auxi_transferred;
    let second_dg_date = req.body.second_degree;
    let honour_1 = req.body.honour_1;
    let date_1 = req.body.date_1;
    let honour_2 = req.body.honour_2;
    let date_2 = req.body.date_2;
    let honour_3 = req.body.honour_3;
    let date_3 = req.body.date_3;
    let honour_4 = req.body.honour_4;
    let date_4 = req.body.date_4;
    let honour_5 = req.body.honour_5;
    let date_5 = req.body.date_5;
    let marriage_status = req.body.marriage_status;
    let date_of_marriage = req.body.date_of_marriage;
    let spouse = req.body.spouse;
    let marriage_type = req.body.marriage_type;
    let child_1 = req.body.child_1;
    let dob_of_child_1 = req.body.dob_of_child_1;
    let child_2 = req.body.child_2;
    let dob_of_child_2 = req.body.dob_of_child_2;
    let child_3 = req.body.child_3;
    let dob_of_child_3 = req.body.dob_of_child_3;
    let child_4 = req.body.child_4;
    let dob_of_child_4 = req.body.dob_of_child_2;
    let child_5 = req.body.child_5;
    let dob_of_child_5 = req.body.dob_of_child_5;
    let date_baptism = req.body.date_baptism;
    let first_communion = req.body.first_communion;
    let date_confirmation = req.body.date_confirmation;
    let service_parish = req.body.service_parish;

    if (
      image_upload.mimetype === 'image/png' ||
      image_upload.mimetype === 'image/jpeg' ||
      image_upload.mimetype === 'image/gif'
    ) {
      image_upload.mv(
        `public/assets/img/${image_name}`,
        image_upload,
        (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        },
      );
    }

    const auxiliary = new Auxiliary(
      null,
      regis_id,
      image_name,
      title,
      gender,
      surname,
      other_names,
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
      position_supr1,
      from_1,
      to_1,
      position_2,
      position_supr2,
      from_2,
      to_2,
      position_3,
      position_supr3,
      from_3,
      to_3,
      position_4,
      position_supr4,
      from_4,
      to_4,
      position_5,
      position_supr5,
      from_5,
      to_5,
      position_6,
      position_supr6,
      from_6,
      to_6,
      position_7,
      position_supr7,
      from_7,
      to_7,
      position_8,
      position_supr8,
      from_8,
      to_8,
      position_9,
      position_supr9,
      from_9,
      to_9,
      position_10,
      position_supr10,
      from_10,
      to_10,
      position_11,
      position_supr11,
      from_11,
      to_11,
      doi,
      auxiliary_of_initiation,
      init_no,
      auxi_transferred,
      no_of_auxi_transferred,
      second_dg_date,
      honour_1,
      date_1,
      honour_2,
      date_2,
      honour_3,
      date_3,
      honour_4,
      date_4,
      honour_5,
      date_5,
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
      date_baptism,
      first_communion,
      date_confirmation,
      service_parish,
    );
    auxiliary.save();

    let documentDefinition = {
      content: [
        `ACCRA WEST GRAND KNIGHTS AND LADIES AUXILARY`,
        `\n\n`,
        `Personal details`,
        `\n`,
        `Name: ${title} ${other_names} ${surname}`,
        `Registration ID: ${regis_id}`,
        `Gender: ${gender}`,
        `Date of birth: ${dob}`,
        `Place of birth: ${place_of_birth}`,
        `Parish: ${parish}`,
        `Auxiliary number: ${auxiliary_no}`,
        `Nationality: ${nationality}`,
        `Postal Address: ${postal_address}`,
        `Residential Address: ${residential_address}`,
        `Telephone: ${telephone}`,
        `Cellphone: ${cellphone}`,
        `email: ${email}`,
        `hometown: ${hometown}`,
        `\n\n`,
        `Employment data`,
        `\n`,
        `Occupational status: ${occ_status}`,
        `Profession: ${profession}`,
        `Place of work: ${place_of_work}`,
        `Office phone: ${office_phone}`,
        `Work address: ${work_address}`,

        `\n\n`,
        `Auxiliary History`,
        `\n`,
        `Date of initiation: ${doi}`,
        `Auxiliary of initiation: ${auxiliary_of_initiation}`,
        `Auxiliary of initiation number: ${init_no}`,
        `Auxiliary transferred to: ${auxi_transferred}`,
        `Number of auxiliary transferred to: ${no_of_auxi_transferred}`,
        `Second degree date: ${second_dg_date}`,
        `\n\n`,
        `Marriage details`,
        `\n`,
        `Marriage status: ${marriage_status}`,
        `Date of marriage: ${date_of_marriage}`,
        `Spouse: ${spouse}`,
        `Type of marriage: ${marriage_type}`,
        `First child: ${child_1}`,
        `Date of birth of first child: ${dob_of_child_1}`,
        `Second child: ${child_2}`,
        `Date of second child: ${dob_of_child_2}`,
        `Third child: ${child_3}`,
        `Date of birth of third child: ${dob_of_child_3}`,
        `Fourth child: ${child_4}`,
        `Date of birth of fourth child: ${dob_of_child_4}`,
        `Fifth child: ${child_5}`,
        `Date of birth of fifth child: ${dob_of_child_5}`,
        `\n\n`,
        `Sacramental details`,
        `\n`,
        `Date of baptism: ${date_baptism}`,
        `Date of first communion: ${first_communion}`,
        `Date of confirmation: ${date_confirmation}`,
        `Service in parish: ${service_parish}`,
      ],
    };
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data) => {
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=AWGKSJI.pdf',
      });
      const download = Buffer.from(data.toString('utf-8'), 'base64');
      res.end(download);
    });
  },
};
