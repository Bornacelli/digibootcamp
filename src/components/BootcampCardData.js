
import './BootcampCard.css';
import BootcampCard from './BootcampCard';

const BootcampCardData = ({ imageSrc, title }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <button className="card-button">Ver Más</button>
    </div>
  );
};

export default BootcampCardData;
