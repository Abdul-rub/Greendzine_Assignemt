

const styles = {
  container: {
    marginTop: "40px",
    marginBottom: '10px',
    padding: '5px',

  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '15px',
    objectFit: 'cover',
    overflow: 'hidden', 
  },
  id: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px',
    borderRadius: '50%',
    width:'27px',
    fontSize: '12px',
  },
};

const EmployeeItem = ({ id, avatar, firstName }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={avatar} alt={firstName} style={styles.image} />
        <div style={styles.id}>{id}</div>
        <p>{firstName}</p>
      </div>
    </div>
  );
};

export default EmployeeItem;
