import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import "../components/Accueil.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Accueil() {
    return (
      
      
      <div className="Accueil" style={{ height : "89vh", overflow : "auto"}}>
        <Header/>
        <body>

        <div className="div_presentation">


          <h2 className="slogan"> FORME, FORCE, FUN </h2>

          <div className="div_presentation_text">

            <div className="text_slogan">
              <div className="intext_slogan"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus ut odio egestas ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus ut odio egestas ullamcorper. 
              </div>
            </div>
              
            <img src="https://static.observatoiredelafranchise.fr/images/ckfinder/images/2021/03/23/salle-appart-fitness-777e0f.jpg" alt="Logo" className="image_presentation"/>
           
          </div>
          
        </div>


         <div className = "div_cours">

          <h2 className="nosCours"> NOS COURS </h2>
          <div className="div_cours_text">

            <img src="https://www.salsadanse.com/wp-content/uploads/2020/07/cours-de-zumba-latin-training-paris-4.jpg" alt="Logo" className="image_cours"/>
            
            <div className="text_cours">
              <div className="intext_cours">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus ut odio egestas ullamcorper. </div>
              
              <div className="inscription_cours" >
                <Link to="/planning" className="inscription_link">
                  Inscription  
                </Link>
              </div> 

            </div>  
          </div>
        </div> 

        <div className = "div_abo">

          <h2 className="nosForfaits"> NOS FORFAITS </h2>

          <div className="div_forfait_text">

            <div className="div_abo_1" >
              <h4> Forfait étudiant </h4>
              <h3> 20€ </h3>
            </div>

            <div className="div_abo_2" >
              <h4> Forfait classique </h4>
              <h3> 40€ </h3>
            </div>
          </div>
        
       
        </div>

        </body>
        <Footer />
      </div>
      
      
    );
  }
  
  export default Accueil;
  