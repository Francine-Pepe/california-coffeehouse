function MenuProps(props: any) {
  const { product, price } = props;
  return (
    <section className="menu">
      <div className="menu-container">
        <div className="menu-products">
          <div className="divider" id="product">
            <h3>{product}</h3>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="divider" id="price">
            <h3>{price}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuProps;
