import React from "react";
import {Featured, FeaturedInverse} from "../../components/Featured";

const consultation = {
  title   : "Consultation ",
  text    : "Medical reports review by the doctor and complete treatment plan and doctor ",
  tags    : "consultation",
  featuredImage:"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=blue-and-silver-stetoscope-40568.jpg&fm=jpg"
}

const treatment = {
  title   : "Treatment",
  text    : "Appointment with the doctor, Treatment coordination at the hospital, discharge, Follow ups, Fit to fly certificate from hospital.",
  tags    : "Treatment coordination",
  featuredImage:"https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}

const travel = {
  title   : "Travel and visa assistance",
  text    : "Visa invitation letter from hospital, Airport pick up and drop service, Hotel booking, Forex exchange assistance.",
  tags    : "improving",
  featuredImage:"https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}


export default class  Community extends React.Component {
  componentDidMount = () => window.scrollTo(0, 0);
  render() {
    return (
      <>   
        <Featured content={consultation} count={1}/>  
        <FeaturedInverse content={travel} count={2}/>  
        <Featured content={treatment} count={3}/>            
      </>
    )
  }
}