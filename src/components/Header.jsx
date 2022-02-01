
function Header({text}) {
  return (
    <header>
        <div className="conatiner">
            <h2>{text}</h2>
        </div>
      
    </header>
  )
}

Header.defaultProps = {
    text: 'Default Header',
}

export default Header
