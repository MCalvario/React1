
// TODO: Modifimport  "../Portfolio.css"y this function so that it accepts props from the parent component
// export default function PortfolioCard(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

import '../styles/About.css';

function PortfolioCard() {



  // Helper function that generates a random width for our placeholder images
  // const randomWidth = () => {
  //   const number = Math.random() * (300 - 200) + 200;
  //   return number.toString().split('.')[0];
  // };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">

<PortfolioCard style={{ background: "black", color: "silver", justifyContent: "flex-end"}}

className="portfolioCard">

<center>
      <h1>Portfolio</h1>
      </center>

<img className="image1" src='/ProfessionalProfile.png' height="270" width="200" />
<img className="image2" src='/SAFlavor.png' height="270" width="200" />
<img className="image3" src='/Weather.png' height="270" width="200" />
<img className="image4" src='/website.png' height="270" width="200" />
<img className="image5" src='/20230709_071707.jpg' height="270" width="200" />
<img className="image6" src='/20230709_071707.jpg' height="270" width="200" />
      
      </PortfolioCard>
      </div>
  );
}
      {/* <div className="PortfolioCard" style={cardStyle}>
        <img
          className="card-img-top"
          src={`/ProfessionalProfile.png${randomWidth()}`}
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
} */}

export default PortfolioCard;