function TitleProps(props: any) {
  const { icon, title } = props;

  return (
    <section className="menu">
      <div className="menu-container" id="menu-menu-title">
        <div className="menu-title">
          <img src={icon} alt="" />
          <h1>{title}</h1>
        </div>
        <hr />

      </div>
      
    </section>
  );
}

export default TitleProps;
