import React from 'react';

const Bio = ({bio}) => {
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

Bio.propTypes = {
  bio: React.PropTypes.object.isRequired
}

export default Bio;