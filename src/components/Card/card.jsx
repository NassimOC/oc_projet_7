function Card({cover, title}) {
  
    return (
      <div className="card">
        <img src={cover} alt={title} />
        <span>{title}</span>
      </div>
    );
  }

export default Card;
