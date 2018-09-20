const K_WIDTH = 20;
const K_HEIGHT = 20;

const mapStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  // border: '3px solid #05204A',
  borderRadius: K_HEIGHT,
  backgroundColor: 'rgba(227,71,145,0.5)',
  textAlign: 'center',
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export { mapStyle };