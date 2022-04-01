export const Book = (props) => {
  const { asin, title, author, pages } = props.data
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Book image" alt="Book image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{author}</p>
        <p className="card-text">asin: {asin}</p>
        <p className="card-text">páginas: {pages}</p>
      </div>
    </div>
  )
}