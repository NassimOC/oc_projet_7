import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/card';
import { listLogement } from '../../data/logements';


function Home() {
  return (
    <div>
      <Banner />
      <div className='card-container'>
      {listLogement.map((logement) => <Card key={logement.id} cover={logement.cover} title={logement.title} />)}
      </div>
    </div>
  );
}

export default Home;
