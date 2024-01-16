const social = {
  id:'social',
  copy:{
    title: 'Find Us in Social Media',
    copy: <>We create site specific swims and include them to your as part of docket to help you stay safe and compliant while ensuring our team understands the site and any potential challenges they will face. Our lift studies are created by a team of riggers and engineers to ensure real safe and simple solutions to even the most complex lifts.</>
  },
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: 'logo03.png',
    width: 150,
    class: 'mw-90'
  },
  icons: {
    link1:{
      alt:'facebook',
      src:'facebook.png',
      url: 'http://oldmatecranes.com.au/'
    },
    link2:{
      alt:'instagram',
      src:'instagram.png',
      url:'http://oldmatecranes.com.au/'
    }
  }
};

const Social = () => (
  <section className='container-fluid p-0 pt-5 min-vh-100 parallax' id={social.id}>
    <div className='container-fluid p-0 pt-5 min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='row px-4 g-0 justify-content-center align-items-center '>
        <div className='col-md-6 text-white p-0 animate-bottom'>
        <h2>{social.copy.title}</h2>
          {social.copy.copy}
          <div className='row p-0 pt-3'>
          <div className='col-6 text-center text-white p-0' href={social.icons.link1.url}><img src={social.icons.link1.src} alt={social.icons.link1.alt} /></div>
          <div className='col-6 text-center text-white p-0' href={social.icons.link2.url}><img src={social.icons.link2.src} alt={social.icons.link2.alt} /></div>
          </div>
          <div className='col p-0 pt-5 text-center'>
          <img src={social.image.url} alt={social.image.alt} width={social.image.width} className={social.image.class}/>
        </div>
        </div>
      </div>
    </div>
  </section >
)

export default Social;