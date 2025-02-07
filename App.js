import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialuserDetailsList}

  onChangesearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filterUserResult = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filterUserResult})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const SearchResult = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <div className="Container">
          <h1 className="title">Users List</h1>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangesearchInput}
          />
          <ul className="list-container">
            {SearchResult.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                deleteUser={this.deleteUser}
                key={eachUser.uniqueNo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
