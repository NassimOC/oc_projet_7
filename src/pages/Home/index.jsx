import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/card';
import { listProperties } from '../../data/properties';
import image from '../../images/image_source_1.png';

function Home() {
  return (
    <div>
      <Banner image={image} content="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {listProperties.map((property) => (
          <Card
            key={property.id}
            cover={property.cover}
            title={property.title}
            id={property.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
