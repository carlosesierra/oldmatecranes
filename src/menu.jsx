

const logo = {
  alt: 'Old Mate Cranes & Rigging',
  url: 'logo01.png',
  width: 240,
  href: 'http://oldmatecranes.com.au/'
  
};

const menu = {
  link1:{
    copy:'home',
    url: 'http://oldmatecranes.com.au/'
  },
  link2:{
    copy:'about us',
    url:'#aboutus'
  },
  link3:{
    copy:'services',
    url:'#services'
  },
  link4:{
    copy:'safety',
    url: '#safety'
  },
  link5:{
    copy:'social',
    url: '#social'
  },
  link6:{
    copy:'domestic',
    url:'#domestic'
  },
  link7:{
    copy:'industrial',
    url:'#industrial'
  },
  link8:{
    copy:'civil',
    url:'#civil'
  },
  link9:{
    copy:'contact',
    url:'#contact'
  },
  links: [
    { href: 'http://oldmatecranes.com.au/', copy: 'home' },
    { href: '#aboutus', copy: 'about Us' },
    { href: '#services', copy: 'services' },
    { href: '#safety', copy: 'safety' },
    { href: '#social', copy: 'social' },
    { href: '#domestic', copy: 'domestic' },
    { href: '#industrial', copy: 'industrial' },
    { href: '#civil', copy: 'civil' },
    { href: '#contact', copy: 'contact' }
],
};


const Menu = () =>  {


return(
    <>
    <nav className='navbar fixed-top bg-body-tertiary shadow' role='navigation'>
    <div className='container-fluid d-flex'>
    <a className='navbar-brand' href={logo.href}><img src={logo.url} alt={logo.alt} width={logo.width} /></a>
    <ul className='d-none d-lg-flex p-0 list-unstyled'>
            {menu.links.map((link, index) => (
                <li className='nav-item' key={index}  data-bs-dismiss='offcanvas'>
                <a className='nav-link text-dark pt-3 px-2' href={link.href}>
                {link.copy}
                </a>
                </li>
            ))}
        </ul>
        <button className='d-lg-none navbar-toggler border-0' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='offcanvas offcanvas-end bg-energyyellow' tabIndex={-1} id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header flex-row-reverse' data-bs-theme='light'>
                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                {menu.links.map((link, index) => (
                <li className='nav-item' key={index}  data-bs-dismiss='offcanvas'>
                <a className='nav-link text-dark' href={link.href}>
                {link.copy}
                </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </div>
    </nav>
    </>
  )
}



export default Menu;