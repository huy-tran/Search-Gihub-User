import React from 'react';
import Router from 'react-router';

class Search extends React.Component {
  setRef(ref) {
    this.usernameRef = ref;
  }
  handleSubmit(e){
    e.preventDefault();
    const username = this.usernameRef.value;
    if (this.usernameRef.value) {
      this.usernameRef.value = '';
      this.props.history.pushState(null, `/profile/${username}`);
    };
  }
  render(){
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} role="form">
        <div className="form-group">
          <div className="input-group col-sm-6" style={{margin: '0 auto'}}>
            <input type="text" className="form-control" placeholder="Type Github Username here..." ref={(ref) => this.setRef(ref)}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
};

Search.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Search;