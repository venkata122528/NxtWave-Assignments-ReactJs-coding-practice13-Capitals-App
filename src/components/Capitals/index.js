import {Component} from 'react'
import ForEachOption from '../ForEachOption/index'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedCityId: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({selectedCityId: event.target.value})
  }

  render() {
    const {selectedCityId} = this.state
    const [selectedCity] = countryAndCapitalsList.filter(
      each => selectedCityId === each.id,
    )

    return (
      <div className="mainContainer">
        <div className="card">
          <div>
            <h1 className="mainHeading">Countries And Capitals</h1>
            <select id="selectEl" onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachCountryCapital => (
                <ForEachOption
                  eachCountryCapital={eachCountryCapital}
                  key={eachCountryCapital.id}
                />
              ))}
            </select>
            <label className="selectCitySuggestion" htmlFor="selectEl">
              is capital of which country?
            </label>
            <p className="resultCountry">{selectedCity.country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
