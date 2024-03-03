import './index.css'

const ForEachOption = props => {
  const {eachCountryCapital} = props
  const {id, capitalDisplayText} = eachCountryCapital

  return <option value={id}>{capitalDisplayText}</option>
}

export default ForEachOption
