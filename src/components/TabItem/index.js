import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    onChangeTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''
  return (
    <li className="list">
      <button
        className={`tab-name  ${activeTabClassName}`}
        onClick={changeTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
