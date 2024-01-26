
import '../styles/About.css';

function About() {

  return (
    <div className="container">
    <about style={{ background: "black", color: "silver", justifyContent: "flex-end"}}
    
    className="about">
    
   
    
    

      <center>
      <h1>About Me</h1>
      </center>
    
    
      <center>
      <img className="image" src='/20230709_071707.jpg' height="270" width="200" />
      </center>
    
    
      <center>
      <p className="about">My name is Maribel Calvario and I love coding! <br></br>
       I am passionate about web development and am looking forward to learning a lot more as I explore and research.<br></br>
       In my free time, I love spending time with my family and of course, I love coding.<br></br>
       Feel free to look around and send me a message!  :) </p>
       </center>
     
     
      </about>
      </div>
  );
}

export default About;