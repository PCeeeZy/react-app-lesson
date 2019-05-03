//Dependencies
import React, { Component } from 'react';

//API
import API from '../services/API';

//Components
import Loading from '../components/Loading';
import ActiveFriends from '../components/ActiveFriends';
import InactiveFriends from '../components/InactiveFriends';

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        friends: [],
        input: '',
        loading: true
      }
      this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
      this.updateInput = this.updateInput.bind(this)
      this.handleAddFriend = this.handleAddFriend.bind(this)
      this.handleToggleFriend = this.handleToggleFriend.bind(this)

      console.log(`----constructor-----`)
    }

    // Lifecycle Methods

    componentDidMount() {
      console.log(`------componentDidMount------`);

      API.fetchFriends()
          .then((friends) => {
              console.log(`Friends ${friends}`);
              this.setState({
                  friends,
                  loading: false
              })
          })
    }

    componentDidUpdate() {
      console.log(`--------componentDidUpdate------`)
    }

    componentWillUnmount() {
      console.log(`-------willUnmount--------`)
    }

    //-------------------------------------------------------
    handleAddFriend() {
      this.setState((currentState) => {
        return {
          friends: currentState.friends.concat([{
            name: this.state.input,
            active: true
          }]),
          input: ''
        }
      })
    }
    handleRemoveFriend(name) {
      this.setState((currentState) => {
        return {
          friends: currentState.friends.filter((friend) => friend.name !== name)
        }
      })
    }
    handleToggleFriend(name) {
      this.setState((currentState) => {
        const friend = currentState.friends.find((friend) => friend.name === name)
        return {
          friends: currentState.friends.filter((friend) => friend.name !== name)
            .concat([{
              name,
              active: !friend.active
            }])
        }
      })
    }
    updateInput(e) {
      const value = e.target.value
      this.setState({
        input: value
      })
    }
    render() {

      console.log(`-----render-----`)

      if (this.state.loading) {
          return <Loading />
      }

      return (
        <div>
          <input
            type='text'
            placeholder='new friend'
            value={this.state.input}
            onChange={this.updateInput}
          />
          <button onClick={this.handleAddFriend}>
            Submit
          </button>
          <div>
            <button onClick={() => this.setState({
              friends: []
            })}>Clear All</button>
          </div>
          <ActiveFriends
            list={this.state.friends.filter((friend) => friend.active === true)}
            onRemoveFriend={this.handleRemoveFriend}
            onToggleFriend={this.handleToggleFriend}
          />
          <InactiveFriends
            list={this.state.friends.filter((friend) => friend.active === false)}
            onToggleFriend={this.handleToggleFriend}
          />
        </div>
      )
    }
  }

  export default Home;