import React from "react";
import Description from "../../components/Description";
import Summary from "../../components/Summary";
import Slogan from "../../components/Slogan";
import Gem from "../../components/Gem";
import Team from "../../components/Team";
import {Featured, FeaturedInverse} from "../../components/Featured";

const ecoConservancy = {
  title   : "Eco Conservancy",
  text    : `Gem Country Lodge runs purely on solar power served by 6 (250 watts panels and 8
             200Ah batteries). We have introduced our patrons to our green products and services as
             many travellers are seeking eco-friendly places to stay. Registered by Kenya Wildlife
             Service as partner in keeping Ostriches and Peacock as well as holding dik diks.`,
  tags    : "green power",
  featuredImage:"./img/1.jpg"
}

const environmentalConservation = {
  title   : "Environmental Conservation",
  text    : `Aside from employing green technologies, we have also managed to set up a tree nursery from
             where we both sell and donate tree seedlings to members of the community. As agro forestry
             champions in our locality, we are on the frontline in advocating for reducing human footprints
             in our locality, thus reducing the impact on climate change effect. To this end, we have
             embarked on the use of seed balls from seedballskenya.co.ke to fast-track the process of
             reforestation
             
             We pride ourselves in being better prepared for any upcoming environmental restrictions
             within our locality. We also advise our patrons accordingly so they stay within the
             environmental laws in the area. It’s a win-win for all.`,
  tags    : "fast-track",
  featuredImage:"./img/14.jpg"
}



export default class Environment extends React.Component {
  componentDidMount = () => window.scrollTo(0, 0);
  render() {
    return (
    <>    
    <FeaturedInverse content={environmentalConservation} count={1} descriptionImage = "./img/15.jpg"/>  
    <Featured content={ecoConservancy} count={2} descriptionImage = "./img/15.jpg"/>  
    
  </>
)
}
}

