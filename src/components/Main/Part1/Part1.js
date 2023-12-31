import myImage from "../../../images/3x4.jpg";
import myImage2 from "../../../images/arrow.svg";
import { NavLink } from "react-router-dom";

function Part1() {
  return (
    <div className="main">
      <div className="main-img">
        <img src={myImage} alt="" />
      </div>
      <div className="main-txt">
        <div className="it">
          <h2>it</h2>
        </div>
        <div className="title">
          <h1>Sevak Arakelyan</h1>
        </div>
        <div className="bio">
          <h6>Front-end Developer</h6>
        </div>
        <div className="info">
          <p>
            I am a Front-end developer (Trainer) with more than 6 months.
            Consistently exceeded employers' expectations. I'm working I perform
            it as quickly as possible and in satisfactory conditions.
            satisfactory conditions.
          </p>
          <p>
            я Front-end developer (Trainer) с опытом работы в IT-Center более 6
            месяцев. Постоянно превышал Ожидание работодателей. Работу я
            выполняаю в максимальнo быстро и в удовлетворительных условиях.
          </p>
        </div>
        <div className="button">
          <NavLink to="/About">
            <button>
              <span> CLICK ME!</span>
              <span> MORE </span>
              <img src={myImage2} alt="" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Part1;
