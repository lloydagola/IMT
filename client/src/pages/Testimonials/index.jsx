import React from "react";
import WOW from 'wowjs';
import Activity from "../../components/Activity";

const PatientTestimonials = [
  {
    title:"Success story of Liver Transplantation - Manipal Hospitals India",
    text: `The patient, a native of Kenya, was diagnosed with liver cirrhosis 
    and liver cancer. The doctors at Manipal Hospitals, Bangalore executed 
    liver transplant surgery for him. `,
    url:`https://www.youtube.com/embed/ILZhtt5-V2c`
  },
  {
    title:"Robotic Kidney Transplant at Max Saket – Patient from Nairobi, Kenya",
    text: `Since 1999, 52 year old George from Nairobi, Kenya, was suffering 
    from diabetes. His diabetes led to renal complications, worsening with 
    severe Renal Failure, in July 2018. His body was swollen, and he had high 
    blood pressure and sugar levels. Dr. Anant Kumar and his team of 
    specialists at Max Hospitals New Delhi put him on dialysis, controlled 
    his sugar and blood pressure. Then, it was discovered that George needed 
    a kidney transplant. His son came forward and helped save his father’s 
    life by donating one of hiskidney.  `,
    url:`https://www.youtube.com/embed/xVtvYIx_tts`
  },
  {
    title:"Paediatric Liver Transplant, Fortis Healthcare, Noida, Dr Vivek Vij, Dr Rajiv Tomar",
    text: `7 month old Baby Henar came to Fortis Noida from Iraq with complaints of 
    jaundice, liver disease and other associated complications. Faced with a threat 
    to the baby's life, the team of expert doctors at Fortis Noida led by Dr. Vivek 
    Vij performed a lifesaving Liver Transplant & gave Baby Henar a new lease of life. `,
    url:`https://www.youtube.com/embed/tr0_sa1-KAc`
  },
  {
    title:"Patient from Afghanistan got Liver Transplant Done at Jaypee Hospital, Noida",
    text: `Patient from Afghanistan got Liver Transplant Done at Jaypee Hospital, Noida`,
    url:`https://www.youtube.com/embed/tnBJAAWoMCk`
  },
  {
    title:"Breast Cancer Patient From Nigeria Talks About Her Treatment At Narayana Health City",
    text: `Mrs. Patience Ikwunze from Nigeria was diagnosed with Breast Cancer and 
    came to India for treatment. She was operated upon by Dr. Pragnya Coca, 
    Consultant, Medical Oncology at Narayan Superspeciality Hospital Gurgaon. 
    Mrs. Ikwunze is now well and is leading a normal life.`,
    url:`https://www.youtube.com/embed/zN1OkobUXdA`
  },
  {
    title:"70-year-old Kenya Patient’s Zest for Life | Kidney Transplant at Max Hospital Vaishali",
    text: `Mr John Mburu Mwaur, a 70-year-old resident of Kenya, post his 
    successful surgery Max Super SpecialityHospital, New Delhi.`,
    url:`https://www.youtube.com/embed/0KoU0uj7hjQ`
  },
  {
    title:"Bone Marrow Transplant for Sickle cell Anemia at Artemis Hospital, India",
    text: `Ms. Intisar Hameed Babe from Iraq successfully underwent Liver Transplant 
    at Narayana Superspeciality Hospital, Gurugram. She and her family share their experience. `,
    url:`https://www.youtube.com/embed/PZ6ZyPmyyt0`
  },
  {
    title:"Robotic Kidney Transplant at Max Saket – Patient from Nairobi, Kenya",
    text: `Miss Ukeme Geoffrey Daniel sharing her experience at Artemis Hospital Gurgaon `,
    url:`https://www.youtube.com/embed/xVtvYIx_tts`
  },
]

export default class Testimonials extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);

    new WOW.WOW().init();
  }
  render() {
    return (
      <> 
        {PatientTestimonials.map((testimony, index) => <Activity content={testimony} key={index}/>)}   
      </>
 )
}
}

