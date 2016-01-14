var React = require('react');
var Search = require('../ui/Search');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <Search />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main ;