import padlockImage from "./padlock.jpeg";

const Headshot = (props) => {
  return (
    <div {...props}>
      <img 
        src={padlockImage} 
        alt="Padlock Security Image" 
        className="rounded-lg shadow-lg"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Headshot;
