import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/card';
import { listLogement } from '../../data/logements';
import image from '../../images/image_source_1.png';

function Home() {
  return (
    <div>
      <Banner image={image} content="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {listLogement.map((logement) => (
          <Card
            key={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
