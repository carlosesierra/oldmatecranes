const safety = {
  id:'safety',
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: '04.jpg',
    width: 640,
    class: 'mw-90 border-charcoal'
  },
  copy:{
    title: 'Safety',
    copy: <>'Keeping it safe and simple is our guiding principle whenever we approach any lift. Be it the first time or the thousandth we ensure it is the safest and most efficient way to complete the lift.<br/><br/>We encourage our crane crew to talk to clients about what it is there lifting, what it does and where it’s going to ensure they are best equipped to tackle the task ahead.'</>
  }
};

const Safety = () =>  (
    <section className='container-fluid p-0 pt-5 text-bg-light' id={safety.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 flex-wrap-reverse animate-bottom'>
        <div className='col-lg-6'>
          <h2>{safety.copy.title}</h2>
          {safety.copy.copy}
        </div>
        <div className='col-lg-6 pb-3 text-center'>
          <img src={safety.image.url} alt={safety.image.alt} width={safety.image.width} className={safety.image.class}/>
        </div>
        </div>
      </div>
    </section>
)

export default Safety;