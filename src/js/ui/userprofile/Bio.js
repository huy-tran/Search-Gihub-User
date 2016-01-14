var React = require('react');

var Bio = React.createClass({
  propTypes: {
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    var bio = this.props.bio;
    return (
      <div>
        <h2>{bio.login}'s Bio</h2>
        <ul className="list-group">
          {bio.avatar_url && <li className="list-group-item"><img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
          {bio.name && <li className="list-group-item">{bio.name}</li>}
          {bio.company && <li className="list-group-item">{bio.company}</li>}
          {bio.blog && <li className="list-group-item">{bio.blog}</li>}
          {bio.location && <li className="list-group-item">{bio.location}</li>}
        </ul>
      </div>
    );
  }
});

module.exports = Bio ;