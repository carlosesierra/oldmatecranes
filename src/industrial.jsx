const industrial = {
  id:'industrial',
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: '06.jpg',
    width: 512,
    class: 'mw-90 border-charcoal'
  },
  copy:{
    title: 'Industrial',
    copy: <>Old mate services industrial construction, Aircon installation and replacement, granny flats, Tiny homes and backyard offices as well as general removal of fallen trees and even art installation.<br/><br/>Whatever your needs CONTACT US.<br/><br/>Old mates cranes and rigging have the expertise and experience to get your job done.</>
  }
};

const Industrial = () =>  (
    <section className='container-fluid p-0 pt-5 text-bg-light' id={industrial.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 animate-bottom'>
        <div className='col-lg-6 pb-3 text-center'>
          <img src={industrial.image.url} alt={industrial.image.alt} width={industrial.image.width} className={industrial.image.class}/>
        </div>
        <div className='col-lg-6'>
          <h2>{industrial.copy.title}</h2>
          {industrial.copy.copy}
        </div>
        </div>
      </div>
    </section>
)

export default Industrial;