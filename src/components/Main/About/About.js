function About() {
  return (
    <div className="aboutMain">
      <div className="aboutTitle">
        <h1>
          Abou<span>t</span> Me
        </h1>
        <p>•</p>
      </div>
      <div className="aboutLeft">
        <div className="abFlex border padd">
          <div className="abFlexLeft">
            <h3>Experience</h3>
            <h6>It Trainer</h6>
            <p>It center | Armenia Armavir Armavir</p>
          </div>
          <div className="abFlexRight">
            <p>2023</p>
          </div>
        </div>

        <div className="abFlex">
          <div className="borde abFlexLeft">
            <h3>Education</h3>
            <h6>Web developer</h6>
            <p>It center | Armenia Armavir Armavir</p>
          </div>
          <div className="abFlexRight">
            <p>2022-2023</p>
          </div>
        </div>

        <div className="borderS"></div>
      </div>
      <div className="aboutRight">
        <div className="abFlex border">
          <div className="borde abFlexLeft">
            <h3>Language</h3>
            <div className="ff">
              <h5>Armenian</h5>
              <div><p>100%</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
