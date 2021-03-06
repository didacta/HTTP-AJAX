import React from 'react';
import axios from 'axios';



class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      });
  }



  getNextId = () => {
    let copyList = [...this.state.friends];
    const nextId = copyList.pop().id + 2;
    return nextId;
  };

  handleSubmit = () => {
    const nextId = this.getNextId();
    const newFriendObj = { id: nextId, name: this.state.name, age: this.state.age, email: this.state.email };
    let newFriendsList = [...this.state.friends, newFriendObj];

    this.setState({ friends: newFriendsList });
  };
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <ul className="friends__list">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
          <form>
            <div className="friend-nameIN">Name:
              <input value={this.state.name} onChange={this.handleChange} name="name" type="text" placeholder="name" />
            </div>
            <div className="friend-ageIN">Age:
              <input value={this.state.age} onChange={this.handleChange} name="age" type="text" placeholder="age" />
            </div>
            <div className="friend-email">Email:
              <input value={this.state.email} onChange={this.handleChange} name="email" type="text" placeholder="email" />
            </div>
            <div className="form-button">
            <input onClick={this.handleSubmit} type="button" value="Save" /></div>
          </form> </ul>
      </div>
    
        
      );
    }

  }

  export default FriendsList;