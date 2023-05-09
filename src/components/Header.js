import '../styles/header.css';

const styles = {
  header: {
    padding: '9px 5%',
    marginBottom: '25px'
  },
  h3: {
    color: '#eee'
  }
};

function Header(propsObj) {
  return (
    <header style={styles.header}>
      <h3 style={styles.h3}>{propsObj.logo} &#128034;</h3>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </header>
  )
}

export default Header;

// const el = document.querySelector('#some-el');

// el.style.color = 'red';

// el.style.backgroundColor = 'orange';