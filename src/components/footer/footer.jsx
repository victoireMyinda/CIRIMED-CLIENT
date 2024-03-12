import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Section "About" */}
          <div className="footer-section">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante tellus, a posuere odio sollicitudin vel. Phasellus quis ipsum id elit tempor lacinia ut id lorem.</p>
          </div>
          
          {/* Section "Nos Liens" */}
          <div className="footer-section">
            <h3>Nos Liens</h3>
            <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Produits</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Section "Newsletter" */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières mises à jour.</p>
            <form>
              <input type="email" placeholder="Entrez votre email" />
              <button>inscrire</button>
            </form>
          </div>
        </div>
        
        {/* Bas du footer */}
        <div className="footer-bottom">
          <hr />
          <p className="text-center">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
