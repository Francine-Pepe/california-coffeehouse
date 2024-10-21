import welcomeSign from "../Assets/welcome-sign-coffee.svg";

function AnimatedImage() {
  return (
    <div className="swing-in-top-fwd">
        <img src={welcomeSign} alt="" />
    </div>
  );
}

export default AnimatedImage;
