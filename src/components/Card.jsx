function Card() {
  return (
    <div className="card" >
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top"
        alt="Card image"
      />
      <div className="card-body"> 
        <h5 className="card-title">Bootstrap Card</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}
export default Card;