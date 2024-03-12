import "./bannier.css"
import img1 from "../../../assets/images/img1.png"

const Bannier = () => {
  return (
    <div className="acceuil">
      <div className='col1'>
        <img src={img1} alt="accueil_image" />
      </div>
      <div className='col2'>
        <div className='title'>Notre expertise pour <br/> votre santé</div>
        <div className='desc'>
          Le médecin est la personne qui examine ton corps, qui te soigne quand tu es malade et te donne des conseils
          pour rester en bonne santé. Si cela est nécessaire, il te prescrit des médicaments,
          des examens complémentaires (prise de sang, radio…) ou un traitement (séances de kinésithérapie…).
        </div>
        <button className='button'>Découvrir</button>
      </div>
    </div>
  )
}

export default Bannier