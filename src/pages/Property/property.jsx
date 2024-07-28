import { useParams } from 'react-router-dom';
import Carousel from '../../components/Slideshow/slideshow';
import Collapse from '../../components/Collapse/collapse';
import { listProperties } from '../../data/properties';
import Infos from '../../components/Infos/infos';

function Property() {
  const { id } = useParams();

  const selectedProperty = listProperties.find(
    (property) => property.id === id
  );

  return (
    <div>
      <Carousel id={id} />
      <Infos property={selectedProperty} />
      <div className="details">
        <Collapse
          content={selectedProperty.description}
          title="Description"
          list="false"
        />
        <Collapse
          content={selectedProperty.equipments}
          title="Équipements"
          list={true}
        />
      </div>
    </div>
  );
}

export default Property;
