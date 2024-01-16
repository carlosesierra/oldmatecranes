const logo = {
  src:'logo-top.svg',
  alt:'madethis',
  url:'https://madethis.com.au/'
}

const Menu = () => {
  return (
    <>
      <section>
        <nav className='navbar fixed-top bg-charcoal'>
          <div className='container-fluid'>
            <div className='col text-center'>
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Menu;
