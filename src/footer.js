const footer = {
  id:'footer',
  copy:{
    copyright: 'Old Mates Cranes & Rigging',
    byCopy: 'carlosesierra.com.au',
    byUrl: 'https://carlosesierra.com.au/'
  }
};

const Footer = () =>  (
    <section className='container-fluid p-0 bg-charcoal' id={footer.id}>
      <div className='row p-3 g-0'>
        <div className='col text-white small fw-light'>
        &#169; {footer.copy.copyright} {(new Date().getFullYear())} – <a href={footer.copy.byUrl} className={'text-white text-decoration-none'} target={'_blank'} rel={'noreferrer'}>web design</a> by {footer.copy.byCopy}
        </div>
      </div>
    </section>
)

export default Footer;