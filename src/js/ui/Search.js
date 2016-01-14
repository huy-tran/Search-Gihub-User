var React = require('react');
var Router = require('react-router');


var Search = React.createClass({
  mixins: [Router.History],
  setRef: function (ref) {
    this.usernameRef = ref;
  },
  handleSubmit: function(){
    var username = this.usernameRef.value;
    if (this.usernameRef.value) {
      this.usernameRef.value = '';
      this.history.pushState(null, '/profile/' + username);
    };
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} role="form">
        <div className="form-group">
          <div className="input-group col-sm-6" style={{margin: '0 auto'}}>
            <input type="text" className="form-control" placeholder="Type Github Username here..." ref={this.setRef}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = Search ;