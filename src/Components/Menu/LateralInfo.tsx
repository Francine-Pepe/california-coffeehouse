import {lateralInfo} from "./../../Data";

function LateralInfo() {
  return (
    <div className="lateral-info">
        {lateralInfo.map(({text, image, alt}, index) => {
            return (
                <div key={index}>
                <p>{text}</p>
                <img src={image} alt={alt} />
                </div>
            )
        })}

    </div>
  )
}

export default LateralInfo