const contact = {
  id:'contact',
  map:{
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805202.1114042776!2d144.3937689427798!3d-37.96964332246956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1704185837493!5m2!1sen!2sau',
    className:'border-white mw-90'
  },
  copy:{
    title: 'Contact Us',
    copy: <>We are based in Melbourne, Victoria, Australia.</>
  },
  email:{
    email:'info@oldmate.com.au',
    to:'mailto:info@oldmate.com.au'
  }
};

const Contact = () =>  (
    <section className='container-fluid p-0 pt-5 bg-charcoal' id={contact.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 animate-bottom'>
        <div className='col-lg-6'>
          <h2>{contact.copy.title}</h2>
          {contact.copy.copy}
          <br/>
          <a href={contact.email.to} className='text-white'>{contact.email.email}</a>
        </div>
        <div className='col-lg-6 pb-3 pt-5 pt-lg-0 text-center'>
          <iframe src={contact.map.src} width={600} height={450} allowFullScreen={''} loading={'lazy'} referrerPolicy={'no-referrer-when-downgrade'} aria-hidden={false} tabIndex={0} title={'map'} className={contact.map.className}></iframe>
        </div>
        </div>
      </div>
    </section>
)

export default Contact;