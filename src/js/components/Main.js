import React from 'react';
import Search from '../ui/Search';

const Main = ({children, history}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <Search history={history} />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Main;
