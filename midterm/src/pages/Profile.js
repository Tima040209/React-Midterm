import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Temirlan',
        surname: 'Umerbekov',
        birthday: '2004-02-09',
        email: 'tima@example.com',
        password: '********', 
      },
      isEditing: false,
    };
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.setState({ isEditing: false });
  };

  handleCancel = () => {
    this.setState({
      isEditing: false,
      user: {
        ...this.state.user, 
      },
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  render() {
    const { user, isEditing } = this.state;

    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>
        <div>
          <label>Surname:</label>
          {isEditing ? (
            <input
              type="text"
              name="surname"
              value={user.surname}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>{user.surname}</span>
          )}
        </div>
        <div>
          <label>Birthday:</label>
          {isEditing ? (
            <input
              type="date"
              name="birthday"
              value={user.birthday}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>{user.birthday}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          {isEditing ? (
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>********</span>
          )}
        </div>
        {isEditing ? (
          <div>
            <button onClick={this.handleSave}>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.handleEdit}>Edit</button>
        )}
      </div>
    );
  }
}

export default ProfilePage;
