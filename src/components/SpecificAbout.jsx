import { useParams } from 'react-router-dom';

function SpecificAbout() {
  const { id } = useParams();

  

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default SpecificAbout;