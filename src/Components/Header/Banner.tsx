import { BannerImage, BannerText } from "../../Data";

function Banner() {
  return (
    <>
      {BannerImage.map((data, index) => {
        return (
          <section className="banner-image-container" key={index}>
            <img src={data.image} alt="" />
            {BannerText.map((data, index) => {
              return (
                <div className="banner-text" key={index}>
                  <p>{data.text}</p>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
}

export default Banner;
