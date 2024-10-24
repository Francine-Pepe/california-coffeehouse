import { AboutUsContent } from "../../Data";
function AboutUs() {
  return (
    <section>
      {AboutUsContent.map((data, index) => {
        return (
          <div className="about-us-container" key={index}>
            <div className="about-us-image">
              <img src={data.image} alt={data.alt} />
            </div>
            <div className="about-us-text">
              <div className="text">
                <p>{data.text}</p>
              </div>
              <img src={data.bgImage} alt="" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AboutUs;
