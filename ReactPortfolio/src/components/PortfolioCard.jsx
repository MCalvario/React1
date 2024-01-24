
// TODO: Modifimport  "../Portfolio.css"y this function so that it accepts props from the parent component
export default function PortfolioCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      
      <div className="PortfolioCard" style={cardStyle}>
        <img
          className="card-img-top"
          src={`ReactPortfolio/public/Portfolio.png${randomWidth()}`}
          alt="PortfolioCard cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          
          <a href="#" className="btn btn-primary">
            View portfolio
          </a>
        </div>
        <div className="card-body">
          </div>
    
       
      </div>
    </div>
  );
}