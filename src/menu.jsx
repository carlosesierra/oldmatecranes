import { useState, useRef } from 'react';

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
  }
};


const Menu = () =>  {

  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const toggle = () => ( setShow(!show))

return(
    <>
    <nav className='navbar fixed-top bg-body-tertiary shadow' role='navigation'>
    <div className='container-fluid d-flex'>
    <a className='navbar-brand' href={logo.href}><img src={logo.url} alt={logo.alt} width={logo.width} /></a>
    <div className='col d-none d-md-flex justify-content-end menu-links'>
            <a href={menu.link1.url}>{menu.link1.copy}</a> 
            <a href={menu.link2.url}>{menu.link2.copy}</a>
            <a href={menu.link3.url}>{menu.link3.copy}</a> 
            <a href={menu.link4.url}>{menu.link4.copy}</a>
            <a href={menu.link5.url}>{menu.link5.copy}</a> 
            <a href={menu.link6.url}>{menu.link6.copy}</a>
            <a href={menu.link7.url}>{menu.link7.copy}</a>
            <a href={menu.link8.url}>{menu.link8.copy}</a>
            <a href={menu.link9.url}>{menu.link9.copy}</a>
    </div>
    <button className='navbar-toggler d-md-none' type='button' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' onClick={toggle}></span>
    </button>
    <div className='navbar-collapse flex-row-reverse'>
          <div className={`navbar-nav menu-links ${show ? 'show' : ''}`}>
            <a ref={ref} onClick={toggle} href={menu.link1.url}>{menu.link1.copy}</a> 
            <a ref={ref} onClick={toggle} href={menu.link2.url}>{menu.link2.copy}</a>
            <a ref={ref} onClick={toggle} href={menu.link3.url}>{menu.link3.copy}</a> 
            <a ref={ref} onClick={toggle} href={menu.link4.url}>{menu.link4.copy}</a> 
            <a ref={ref} onClick={toggle} href={menu.link5.url}>{menu.link5.copy}</a>
            <a ref={ref} onClick={toggle} href={menu.link6.url}>{menu.link6.copy}</a> 
            <a ref={ref} onClick={toggle} href={menu.link7.url}>{menu.link7.copy}</a>  
            <a ref={ref} onClick={toggle} href={menu.link8.url}>{menu.link8.copy}</a>
            <a ref={ref} onClick={toggle} href={menu.link9.url}>{menu.link9.copy}</a> 
          </div>
    </div>
    </div>
    </nav>
    </>
  )
}



export default Menu;