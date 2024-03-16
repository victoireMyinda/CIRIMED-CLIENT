import Social from "../../components/social/social"
import Navbar from "../../components/header/header"
import post from "../../assets/images/post.jpeg"
import './detailformation.css'

const DetailFormation = () => {
    return (
        <>
            <Social />
            <Navbar />
            <div className="detailFormationMain">

                <div className="detailFormationBannier">
                    <img src={post} alt="post" />
                </div>
                


            </div>
        </>


    )
}

export default DetailFormation
