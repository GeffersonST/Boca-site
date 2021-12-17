import { BsTelephoneInboundFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <div className="HeroItems">
          <div className="HeroH1">Peças e Tintas Automotivas</div>
          <div className="HeroP">
            {" "}
            Tele-entrega <br />
            <FaMotorcycle />
          </div>

          <div className="HeroBtn">
            {" "}
            <BsTelephoneInboundFill /> Faça seu Orçamento
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
