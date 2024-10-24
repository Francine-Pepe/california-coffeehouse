function TitleProps(props: any) {
  const { data } = props;

  return (
    <section className="menu">
      {data.map((data: { icon: string; title: string }, index: any) => (
        <div className="menu-container" id="menu-menu-title">
          <div className="menu-title">
            <img src={data.icon} alt="" />
            <h2>{data.title}</h2>
          </div>

          <hr />
        </div>
      ))}
    </section>
  );
}

export default TitleProps;
