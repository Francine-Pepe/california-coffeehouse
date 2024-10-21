
function TextProps(props: any) {
  const { data } = props;
  return (
    <div className="text-container tracking-in-expand-fwd-top">
      {data.map((item: { text: string }, index: any) => (
        <div key={index}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TextProps;
