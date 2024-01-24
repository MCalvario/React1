// TODO: Modify this function so that it accepts props from the parent component
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
      <h1>About Me</h1>
      <div className="PortfolioCard" style={cardStyle}>
        <img
          className="card-img-top"
          src={`ReactPortfolio/public/Portfolio.png${randomWidth()}`}
          alt="PortfolioCard cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">ID: {props.id}</p>
          <a href="#" className="btn btn-primary">
            View {props.name}'s portfolio
          </a>
        </div>
       
      </div>
    </div>
  );
}