import React from "react";
import WOW from 'wowjs';
import Description from "../../components/Description";

const apollo_hospital_new_delhi = {
  title   : "Apollo hospital - New Delhi ",
  text    : `Apollo Hospital, Delhi, part of the Apollo Group provides world 
  class medical treatment using the latest & best available technologies at 
  affordable prices.A state-of-the art modern facility in the heart of the capital, 
  it is spread over 15 acres and has a built-up area of over 600,000 square feet. 
  Currently the hospital has 695 beds with a capacity to expand to 1000 beds. 
  Right from the infrastructure to the latest medical technology acquisition, 
  Indraprastha Apollo Hospitals has always kept its patients first and strived 
  to deliver not world class but the world's best care to its patients since its 
  inception in 1996.`,
  tags    : "consultation",
  image:"https://medigence.com/uploads/hospital/images/30fed7f3060a15cca3ce567930e69f66.jpg"
}

const medanta_medicity_gurgaon = {
  title   : "Medanta Medicity Gurgaon",
  text    : `Medanta (The Medicity) is a multi-specialty medical institute based 
  in Gurgaon in the National Capital Region of India.[1][2] It was started in 2009, 
  with cardiac surgeon, Naresh Trehan.[3] as its main director along with co 
  founder Sunil Sachdeva and various others. The hospital has more than 1600 beds 
  and has expanded its outreach to other cities including Lucknow, Indore and 
  Ranchi. Lucknow is now getting its own 1000 bedded hospital.`,
  tags    : "Treatment coordination",
  image:"https://getwellgo.com/uploads/hospitals/medanta-gurgaon.jpg"
}

const fortis_hospital = {
  title   : "Fortis Hospital Gurgaon",
  text    : `Fortis Memorial Research Institute (FMRI) is a multi-super speciality, 
  quaternary care hospital with an enviable international faculty, reputed clinicians, 
  including super-sub-specialists and specialty nurses, supported by cutting edge 
  technology. A premium referral hospital, it endeavors to be the Mecca of Healthcare™ 
  for Asia Pacific and beyond. Set on a spacious 11-acre campus with 1000 beds, this 
  Next Generation Hospital™ is built on the foundation of Trust ™ and rests on four 
  strong pillars:Talent, Technology, Service and Infrastructure. `,
  tags    : "improving",
  image:"https://fastfox.com/blog/wp-content/uploads/2017/05/91420800.jpg"
}

const qrg_hospital = {
  title   : "QRG Hospital New Delhi",
  text    : `QRG Health City isn’t just another hospital but an amalgamation of the 
  best services the healthcare segment can offer. Our excellent medical infrastructure 
  houses a Critical Care Medicine unit for patients with life threatening diseases. 
  Not just that, our highly qualified team of medical professionals and advanced 
  software system make us an ideal hospital for patients from all walks of life. At 
  QRG Health City, we’re constantly seeking betterment and are always trying to 
  exceed expectations. `,
  tags    : "improving",
  image:"https://content.jdmagicbox.com/comp/faridabad/r4/011pxx11.xx11.170523131908.t4r4/catalogue/dr-nisha-kapoor-qrg-health-city---sector-16-faridabad-gynaecologist-and-obstetrician-doctors-7tib9eRHCj.jpg"
}

const max_hospital  = {
  title   : "Max Hospital New Delhi",
  text    : `Max Super Speciality Hospital, Saket (a Unit of Devki Devi foundation) is 
  one of the premier names in the healthcare world. A 500+ bedded facility offers 
  treatment across all medical disciplines of Cardiology, Cancer Care/Oncology 
  (Medical, Surgical and Radiotherapy), Neurology, Obstetrics and Gynecology, 
  Metabolic and Bariatric Surgery, Bone Marrow Transplant, Urology, Nephrology, Kidney 
  Transplant, Liver Transplant, Aesthetics and Reconstructive Surgery, and other 
  ancillary services. Our experts have treated more than 34+ lakh patients across 35 
  specialties. We are equipped with state-of-art 1.5 Tesla MRI machine and a 64 Slice 
  CT Angio. Additionally, we also have the Asia’s first BrainSUITE- an advanced 
  Neurosurgical operation theatre, which allows MRI to be taken while surgery. We have 
  also won a prestigious award by the “Association of Healthcare Providers of India (AHPI)”.. `,
  tags    : "improving",
  image:"https://i.pinimg.com/originals/3f/c9/5d/3fc95dad6087d6fd301495335654a8a8.jpg"
}

const blk_hospital  = {
  title   : "BLK Super Speciality Hospital New Delhi",
  text    : `BLK Super Speciality Hospital is a private sector hospital based in New Delhi,
  India 650-bed capacity, 125 critical care beds, 17 state-of-the-art modular operation 
  theatres 1500 healthcare providers, 150 globally renowned super specialists, 300 medical 
  [3]. It was founded by B. L. Kapur (Obstetrician and Gynecologist) on 2 January 1959. It 
  is accredited by the NABH and National Accreditation Board for Testing and Calibration 
  Laboratories and the Joint Commission International.[4] Hospital built up area of 
  650,000 square feet. Spread over 5 acres of land located in the heart of the capital 
  city, at Pusa road in Karol Bagh, Delhi, BLK is amongst the largest stand-alone private 
  hospitals in the National Capital Region ("NCR") and is managed by Radiant Life Care 
  Private [5] `,
  tags    : "improving",
  image:"https://www.vaktr.com/uploads/Hospital_75_blk.jpg"
}

const fortis_noida = {
  title   : "Fortis Memorial Hospital Noida",
  text    : `Designed and developed to deliver patient care with ease, warmth and compassion, 
  Fortis Hospital, Noida serves as a state-of-the-art facility with over 200 beds and 7 
  operational theaters. The hospital is well known for having one of the oldest and most 
  trusted Kidney Transplant Programmes in Noida, with over 750 successful Kidney Transplants. 
  Positioned as a center of excellence in Oncology, Orthopaedics, Neurosciences, 
  Liver Transplant, Kidney Transplant, Cardiac Sciences and Emergency Trauma Care Services, 
  Fortis Hospital, Noida is the second mega hub hospital in the Fortis Healthcare group, that 
  caters to the special needs of patients and their families.
  `,
  tags    : "improving",
  image:"https://www.vaidam.com/sites/default/files/hospitals/fortis-noida-building-1.jpg"
}

const jaypee_hospital = {
  title   : "Jaypee Hospital Noida",
  text    : `Jaypee Hospital at Noida is the flagship hospital of the Jaypee Group, which 
  heralds the group’s noble intention to enter the healthcare space. This hospital has been 
  planned and designed as a 1200 bedded tertiary care multi-speciality facility and has 
  commissioned 525 beds in the first phase `,
  tags    : "improving",
  image:"https://www.glassonweb.com/sites/default/files/styles/6/public/news/2017/Jaypee-Hospital.jpg?itok=l-klB2ho"
}

const manipal_hospital  = {
  title   : "Manipal Hospital New Delhi",
  text    : `With over 60 years of experience in Healthcare industry, Manipal Hospital Enterprises has now extended 
  its wings with the world class 380-bedded multi super specialty hospital in New Delhi. Supported by renowned and 
  dedicated medical professionals who give incomparable care to the patients every day, Manipal is the leading 
  healthcare provider delivering quality healthcare services across India. `,
  tags    : "improving",
  image:"https://cdn.credihealth.com/system/images/assets/25256/original/bg.jpg?1526967294"
}

const bgs_hospital  = {
  title   : "BGS Gleneagles Global Hospital Bangalore",
  text    : `Gleneagles Global Hospitals has two facilities in Bengaluru, one at Kengeri 
  and the other at Richmond Road. BGS Gleneagles Global Hospitals located at Kengeri, is 
  a state-of-the-art, NABH facility with expertise in multi-disciplinary tertiary 
  specialities. With over 500-beds, the hospital is one of the largest of its kind in 
  Bengaluru and consists of 14 operation theatres, most advanced imaging facilities and 
  a modern Transplant ICU. The hospital caters to several key specialities including 
  Oncology, Neurosurgery, Liver diseases and various others. BGS Gleneagles Global 
  Hospitals caters to several overseas patients from around the world suffering from 
  various disorders such as Liver ailments, Kidney failures, Breast Cancer, Leukaemia, 
  Neurologica `,
  tags    : "improving",
  image:"https://images1-fabric.practo.com/practices/664585/bgs-gleneagles-global-hospital-bangalore-5aaa554a02c7a.jpg"
}
const apollo_hospital_bangalore = {
  title   : "Apollo Hospital Bangalore",
  text    : `Apollo Hospitals Bangalore is a world class JCI accredited super speciality hospital providing a complete range of healthcare services under the same roof.`,
  tags    : "improving",
  image:"https://medigence.com/uploads/hospital/images/24cc536a76a9b1e705562f9943d77fcf.jpg"
}

const fortis_hospital_bangalore = {
  title   : "Fortis Hospital Bangalore",
  text    : `Fortis Hospital, Cunningham Road, established in 1990 is a 150 bed tertiary 
  care hospital in Bengaluru. The hospital is known for its centre for excellence of 
  interventional cardiology and cardiac surgery. The hospital offers latest super-specialised 
  services in urology, orthopaedics, digestive care, emergency care and critical care.

  The amenities offered by the hospital includes a 24-hour accident and emergency service which comprises ambulance services, blood bank, cardiac operation theatres, preventive health check, diagnostic and a catheterization laboratory. Among the other services the hospital provides critical and emergency care, diet counselling, physiotherapy and rehabilitation, laboratory and micro biological services and stress management. A 24-hour pharmacy, endoscopy unit and emergency room are also available for patients. `,
  tags    : "improving",
  image:"https://content.indiainfoline.com/_media/iifl/img/article/2018-06/29/full/1530279343-7147.jpg"
}

const global_hospital_chennai  = {
  title   : "Global Hospital Chennai",
  text    : `Gleneagles Global Health City, the sprawling 21-acre facility located in Perumbakkam, 
  Chennai is the largest facility of Gleneagles Global Hospitals India. With a capacity of over 
  1000 beds and accreditations from leading agencies, the facility is Asia’s most trusted and 
  leading Multi-Organ Transplant Centre. The hospital has undertaken several path-breaking Liver, 
  Neuro, Heart, Lung and Kidney procedures. It is recognized by several international and national 
  level accrediting agencies. World-class infrastructure, dedicated staff and a commitment for 
  medical excellence are the USPs of this facility. The hospital has several achievements to its 
  credit and continues to work on several pioneering procedures.`,
  tags    : "improving",
  image:"https://www.vaidam.com/sites/default/files/hospitals/global-chennai-facade.jpg"
}

const fortis_hospital_chennai  = {
  title   : "Fortis Hospital Chennai",
  text    : `Fortis Malar Hospital, formerly known as Malar Hospital, was Established in 1992, became a household
  name for tertiary care hospital services in Chennai over the years. In 2007, Fortis Healthcare – India’s fastest 
  growing hospital network acquired stakes in Malar Hospital Limited. A 180-bed multi-specialty, tertiary care 
  hospital offers comprehensive medical care in more than 40 specialties such as cardiology, cardio-thoracic 
  surgery, neurology, neurosurgery, orthopaedics, nephrology, gynaecology, gastroenterology, urology, paediatrics, 
  and diabetes among others. The hospital specializes in cutting edge medical technology and dedicated patient 
  care services.

  Fortis Malar Hospital is also home to Asia’s largest heart transplant centre with over 300 heart transplants to its credit.
  
  At the hospital we have more than 160 consultants and 650 employees to manage over 11,000 in-patients. The unwavering commitment, precision and synchronised teamwork makes Fortis Malar `,
  tags    : "improving",
  image:"https://i.ndtvimg.com/i/2016-08/fortis-healthcare-650_650x400_61471840529.jpg?ver-20191121.20"
}

export default class About extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);

    new WOW.WOW().init();
  }
  render() {
    return (
      <>    
        <Description  content={apollo_hospital_new_delhi}/>
        <Description inverse={true} content={medanta_medicity_gurgaon}/>
        <Description  content={fortis_hospital}/>
        <Description inverse={true} content={qrg_hospital}/>
        <Description  content={max_hospital}/>
        <Description inverse={true} content={blk_hospital}/>
        <Description  content={fortis_noida}/>
        <Description inverse={true} content={jaypee_hospital}/>
        <Description  content={fortis_hospital_bangalore}/>
        <Description inverse={true} content={manipal_hospital}/>
        <Description  content={bgs_hospital}/>
        <Description inverse={true} content={apollo_hospital_bangalore}/>
        <Description  content={global_hospital_chennai}/>
        <Description inverse={true} content={fortis_hospital_chennai}/>
        
      </>
    );
  }
}
