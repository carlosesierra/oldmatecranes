const domestic = {
  id:'domestic',
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: '05.jpg',
    width: 640,
    class: 'mw-90 border-charcoal'
  },
  copy:{
    title: 'Domestic',
    copy: <>Old mate services domestic construction, Aircon installation and replacement, granny flats, Tiny homes and backyard offices as well as general removal of fallen trees and even art installation.<br/><br/>Whatever your needs CONTACT US.<br/><br/>Old mates cranes and rigging have the expertise and experience to get your job done.</>
  }
};

const Domestic = () =>  (
    <section className='container-fluid p-0 pt-5 text-bg-light' id={domestic.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 flex-wrap-reverse animate-bottom'>
        <div className='col-lg-6'>
          <h2>{domestic.copy.title}</h2>
          {domestic.copy.copy}
        </div>
        <div className='col-lg-6 pb-3 text-center'>
          <img src={domestic.image.url} alt={domestic.image.alt} width={domestic.image.width} className={domestic.image.class}/>
        </div>
        </div>
      </div>
    </section>
)

export default Domestic;