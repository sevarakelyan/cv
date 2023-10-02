import myImage from '../../../images/image.png';
import myImage2 from '../../../images/arrow.svg';

function Part2() {
  return (
    <div className="main">
      <div className="part2-img">
        <img src={myImage} alt="" />
      </div>
      <div className="part2-txt">
        <div className="part2-title">
          <h2>my lastest proect</h2>
        </div>
        <div>
          <p>
            Site maked by using`
            <br />
            <span className="red"> HTML5 CSS3 JS </span>
          </p>
        </div>
        <div className="buttonDiv">
          <button>
            <span>view more</span>
            <span>CLICK ME!</span>
            <img src={myImage2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Part2;
