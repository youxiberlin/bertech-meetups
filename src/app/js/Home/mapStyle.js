const K_WIDTH = 20;
const K_HEIGHT = 20;


const purple = 'rgba(82,72,156,0.7)'
const blue = 'rgba(89,195,195,0.7)'

const upcomingStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: K_HEIGHT,
  backgroundColor: blue,
  textAlign: 'center',
  color: '#000',
};

const rsvpStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: K_HEIGHT,
  backgroundColor: 'rgba(227,71,145,0.7)',
  textAlign: 'center',
  color: '#000',
};

export { upcomingStyle, rsvpStyle };