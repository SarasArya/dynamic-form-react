import React from 'react';

const styles = {
  thankYouStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};
const ThankYou = () => {
  return <h2 style={{ ...styles.thankYouStyle }}>Dread it. Run from it. Destiny still arrives</h2>;
};

export default ThankYou;
