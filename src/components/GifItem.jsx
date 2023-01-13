
export const GifItem = ({ title, imgUrl }) => {

  return (
    <div className="card">
      <img src={ imgUrl } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
