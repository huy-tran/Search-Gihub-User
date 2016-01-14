var React = require('react');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');
var Notes = require('../ui/notes/Notes');
var Bio = require('../ui/userprofile/Bio');
var Repos = require('../ui/userprofile/Repos');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      bio: {},
      repos: [],
      notes: []
    };
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://bng-notetaker.firebaseio.com/');
    this.init(this.props.params.username);
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  componentWillReceiveProps: function (nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username)
  },
  init: function (username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
      .then(function (data) {
        this.setState({ 
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
    },
  handleAddNote: function (newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length + 1).set(newNote);
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-4">
          <Bio bio={this.state.bio} />
        </div>
        <div className="col-sm-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div> 
        <div className="col-sm-4">
          <Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
});

module.exports = Profile ;