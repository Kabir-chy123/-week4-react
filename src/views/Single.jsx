import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state.item;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
