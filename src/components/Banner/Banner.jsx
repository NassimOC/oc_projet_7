function Banner({image, content}) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner--img"/>
      <p className="banner--content">{content}</p>
    </div>
  )
}
 
export default Banner