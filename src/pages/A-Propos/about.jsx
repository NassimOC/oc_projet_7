import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/collapse';
import image from '../../images/image_source_2.png';
import { listAbout } from '../../data/about';

function About() {
  return (
    <div>
      <Banner image={image} />
      <div className="about-menu">
        {listAbout.map((about) => (
          <Collapse
            key={about.title}
            content={about.content}
            title={about.title}
            list="false"
          />
        ))}
      </div>
    </div>
  );
}

export default About;
