
import '../styles/Portfolio.css';

function PortfolioCard() {

  return (
    <div className="container">
    <portfolioCard style={{ background: "black", color: "silver", justifyContent: "flex-end"}}
    
    className="portfolioCard">

<center>
      <h1>Portfolio</h1>
      </center>

<center>
<img className="image1" src='/ProfessionalProfile.png' height="400" width="500" />
<img className="image2" src='/SAFlavor.png' height="400" width="500" />
<img className="image3" src='/Weather.png' height="400" width="500" />
<img className="image4" src='/website.png' height="400" width="500" />
<img className="image5" src='/Fitness.png' height="400" width="500" />
<img className="image6" src='/mycalendar.png' height="400" width="500" />
</center>

</portfolioCard>
      </div>
  );
}

export default PortfolioCard;