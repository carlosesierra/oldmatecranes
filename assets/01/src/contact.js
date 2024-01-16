const contact = {
  logo : <div className='pb-5 logo'><img src='logo-bottomm.svg' alt='made this' className='d-lg-none d-block mw-90 mx-auto d-block' /><img src='logo-bottom.svg' alt='made this' className='d-none d-lg-block mx-auto d-block' /></div>,

  copy01 : <div className='pt-lg-5 pb-4 text-center title01'>Let's work together</div>,

  cta : <div className='row gx-3 pb-4 justify-content-center cta'> <div className='col-6'> <img src='cta-call.svg' alt='call' className='mw-90 float-end' /> </div> <div className='col-6'> <img src='cta-email.svg' alt='email' className='mw-90 float-start' /> </div></div>,

  copy02 : <div className='text-center copy'>New business <a href='tel:+61452241979' className='text-decoration-underline text-white text-reset'>+61 452 241 979</a><br/>General enquires <a href='tel:+613991733409' className='text-decoration-underline text-white text-reset'>+61 3 9917 3340</a><br/><a href='mailto:hello@madethis.com.au' className='text-decoration-underline text-white text-reset'>hello@madethis.com.au</a></div>,

  social : <div className='row gx-3 justify-content-center pt-5 social'> <a href='https://madethis.com.au/' className='col-6'> <img src='icon-linkedin.svg' alt='linkedin' className='mw-90 float-end' /> </a> <a href='https://madethis.com.au/' className='col-6'> <img src='icon-instagram.svg' alt='instagram' className='mw-90 float-start' /> </a></div>,

  title : <div className='py-4 title02'><img src='title02.svg' alt='website coming 2024' className='mw-90 mx-auto' /></div>,

  tnc : <div className='pb-4 text-center tnc'>&#169; MADE THIS. All rights reserved.<br/>We acknowledge the Traditional Custodians and original storytellers of this land. We pay our respects to Elders both past and present.<br/><br/><a href='https://madethis.com.au/' className='text-decoration-underline text-white text-reset'>Privacy policy</a></div>,
};

const Contact = () =>  (
    <>
    <section className='container-fluid bg-charcoal py-5'>
      <div className='row justify-content-center py-5'>
        <div className='col contact'>
        <> 
          {contact.logo}
          {contact.copy01}
          {contact.cta}
          {contact.copy02}
          {contact.social}
          {contact.title}
          {contact.tnc}
        </>
        </div>
     </div>
    </section>
    </>
)

export default Contact;