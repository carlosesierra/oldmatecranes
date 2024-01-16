const about = {
  copy: 'A SPECIALIST PRODUCTION COMPANY WHERE ARTISTRY MEETS INNOVATION',
};

const About = () =>  (
    <>
    <section className='container-fluid py-5 bg-charcoal'>
      <div className='row justify-content-md-center '>
      <div className='col col-xl-8 text-center px-5 about'>
          {about.copy}
        </div></div>
    </section>
    </>
)

export default About;