
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

<a href="https://mcalvario.github.io/Professional-Portfolio/">
<img className="image1" src='/ProfessionalProfile.png' height="400" width="500" />
</a>

<a href="https://joellopez95.github.io/SA-Flavor-Finder/">
<img className="image2" src='/SAFlavor.png' height="400" width="500" />
</a>

<a href="https://mcalvario.github.io/WeatherDashboard/">
<img className="image3" src='/Weather.png' height="400" width="500" />
</a>

<img className="image4" src='/website.png' height="400" width="500" />

<img className="image5" src='/Fitness.png' height="400" width="500" />

<a href="https://mcalvario.github.io/WorkDayCalendar/">
<img className="image6" src='/mycalendar.png' height="400" width="500" />
</a>
</center>

</portfolioCard>
      </div>
  );
}

export default PortfolioCard;