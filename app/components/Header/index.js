import React from 'react';

import Logo from 'components/Logo';


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Logo />
        [navbar here]
      </div>
    );
  }
}

export default Header;
