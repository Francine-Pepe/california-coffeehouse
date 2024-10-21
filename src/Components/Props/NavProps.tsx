import "../../Styles/styles.sass";

function NavProps(props: { id: any; link: any; name: any }) {
  const { id, link, name } = props;
  return (
    <nav>
      <ul>
        <li id={id}>
          <a href={link}>{name}</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavProps;
