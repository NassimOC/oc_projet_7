import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/collapse';
import image from '../../images/image_source_2.png';
import { aboutList } from '../../data/about';

function About() {
  return (
    <div>
      <Banner image={image} />
      <div className="about-menu">
        {aboutList.map((about) => (
          <Collapse
            key={about.title}
            content={about.content}
            title={about.title}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
