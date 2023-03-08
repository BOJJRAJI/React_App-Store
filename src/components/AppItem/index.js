import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-items">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="app-heading ">{appName}</p>
    </li>
  )
}

export default AppItem
