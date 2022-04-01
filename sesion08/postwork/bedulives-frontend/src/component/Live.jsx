export const Live = (props) => {
  const { title, subtitle, date, time, mode, img } = props.data
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Live image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{subtitle}</p>
        <p className="card-text">{date} a las {time}</p>
        <p className="card-text">{mode}</p>
      </div>
    </div>
  )
}