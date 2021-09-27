import './index.css'

const GenerateItem = props => {
  const {item, OnClickButton, item1} = props
  const {tabId, displayText} = item
  const hei = () => {
    OnClickButton(tabId)
  }
  const StyleButton = tabId === item1 ? 'style-button' : ''
  return (
    <li className="list-item">
      <button className={`button ${StyleButton}`} type="button" onClick={hei}>
        {displayText}
      </button>
    </li>
  )
}

export default GenerateItem
