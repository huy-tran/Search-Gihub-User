var React = require('react');

var Repos = React.createClass({
  propType: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    return (
      <div>
        <h2>User Repos</h2>
        <ul className="list-group">
           {this.props.repos.map(function (repo, index) {
             return (
               <li className="list-group-item" key={index}>
                 {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                 {repo.description && <p>{repo.description}</p>}
               </li>
             );
           })}
         </ul>
      </div>
    );
  }
});

module.exports = Repos ;
