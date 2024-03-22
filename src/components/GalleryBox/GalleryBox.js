import './GalleryBox.css'

const GalleryBox = (props) => {
  return (
      <div className="gallery-box">
          <div className="img">
              <img src={props.img} alt="gallery"/>
          </div>
      </div>
  )
}

export default GalleryBox