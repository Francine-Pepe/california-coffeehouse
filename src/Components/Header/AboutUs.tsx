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
              <p>{data.text}</p>
              <button className="functional-button"><a href="/">{data.button}</a></button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AboutUs;
