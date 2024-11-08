function MenuProps(props: any) {
  const { data } = props;
  return (
    <section className="menu">
      {data.map((data: { product: string; price: string }, index: any) => (
        <div className="menu-container" key={index}>
          <div className="menu-products">
            <div className="divider" id="product">
              <h3>{data.product}</h3>
            </div>
            <div className="divider">
              <hr />
            </div>
            <div className="divider" id="price">
              <h3>{data.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuProps;
