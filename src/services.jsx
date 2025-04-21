const services = {
  id:'services',
  copy:{
    title: 'Services',
    list: ['General Crane Hire', 'Steel Erection', 'Shutdown Works', 'Engineered Lift Studies', 'Riggers/Dogmen', 'Heavy Haulage', 'Site Sheds & Safes', 'Electrical Spotters/Traffic Controllers', 'Traffic Management Plans']
  }
};

const listItems = services.copy.list.map((list) => <li key={list}>{list}</li>);
  
const Services = () => (
  <section className='container-fluid p-0 min-vh-100 parallax' id={services.id}>
    <div className='container-fluid p-0 min-vh-100 d-flex justify-content-center align-items-center'>
    <div className='row px-4 g-0 justify-content-center align-items-center '>
        <div className='text-white p-0 animate-bottom'>
          <h2>{services.copy.title}</h2>
          <ul>{listItems}</ul>  
        </div>
      </div>
    </div>
  </section >
)

export default Services;