function Header(propsObj) {
  console.log(propsObj)
  return (
    <header>
      <h3>{propsObj.logo} &#128034;</h3>
      {propsObj.show && <p>Shown</p>}
    </header>
  )
}

export default Header;