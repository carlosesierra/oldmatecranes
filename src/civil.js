const civil = {
  id:'civil',
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: '07.jpg',
    width: 512,
    class: 'mw-90 border-charcoal'
  },
  copy:{
    title: 'Civil & Commercial',
    copy: <>Old mate is here to assist you with you personal and crane hire solutions.<br/><br/>We are here for whatever you need from panel rotation to facade installation old mates got you covered. We offer hourly hire as well as project rates don't hesitate to contact us.<br/><br/>Our Cranes are all crane safe inspected and green stickered helping to streamline the process and reduce induction and inspection down time.</>
  }
};

const Civil = () =>  (
    <section className='container-fluid p-0 pt-5 text-bg-light' id={civil.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 flex-wrap-reverse animate-bottom'>
        <div className='col-lg-6'>
          <h2>{civil.copy.title}</h2>
          {civil.copy.copy}
        </div>
        <div className='col-lg-6 pb-3 text-center'>
          <img src={civil.image.url} alt={civil.image.alt} width={civil.image.width} className={civil.image.class}/>
        </div>
        </div>
      </div>
    </section>
)

export default Civil;