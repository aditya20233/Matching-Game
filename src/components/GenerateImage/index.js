import './index.css'

const GenerateImage = props => {
  const {item, OnClickImage} = props
  const {id, thumbnailUrl} = item

  const OnClick = () => {
    OnClickImage(id)
  }
  return (
    <li className="list-item12">
      <button className="button" type="button" onClick={OnClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="img61" />
      </button>
    </li>
  )
}

export default GenerateImage
