import { BannerImage, BannerText } from "../../Data";

function Banner() {
  return (
    <section>
      {BannerImage.map((data, index) => {
        return (
          <div className="banner-image-container container" key={index}>
            <img src={data.image} alt="" />

            {BannerText.map((data, index) => {
              return (
                <div className="banner-text" key={index}>
                  <p>{data.text}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      
    </section>
  );
}

export default Banner;
