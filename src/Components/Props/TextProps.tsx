import { useState } from "react";

function TextProps(props: any) {
  const { data } = props;

  return (
    <div className="text-container container">
      {data.map((item: { text: string }, index: any) => (
        <div key={index}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TextProps;
