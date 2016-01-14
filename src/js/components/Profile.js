import React from 'react';
import Notes from '../ui/notes/Notes';
import Bio from '../ui/userprofile/Bio';
import Repos from '../ui/userprofile/Repos';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://bng-notetaker.firebaseio.com/');

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bio: {},
      repos: [],
      notes: []
    };
  }
  componentDidMount(){
    this.init(this.props.params.username);
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps (nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username)
  }
  init (username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then((data) => {
        this.setState({ 
          bio: data.bio,
          repos: data.repos
        });
      });
  }
  handleAddNote (newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  render(){
    return (
      <div className="row">
        <div className="col-sm-4">
          <Bio bio={this.state.bio} />
        </div>
        <div className="col-sm-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div> 
        <div className="col-sm-4">
          <Notes username={this.props.params.username} notes={this.state.notes} addNote={(newNote) => this.handleAddNote(newNote)}/>
        </div>
      </div>
    );
  }
}

export default Profile;
