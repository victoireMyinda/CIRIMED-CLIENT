
import "./signup.css"
const DevenirMembre = () => {
    return (
        <div className="formMain">
            <div className="imageForm"></div>
            <div className="signupForm">
                <form>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="text" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Prenom</label>
                        <input type="text" className="form-control" id="text" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Téléphone</label>
                        <input type="phone" className="form-control" id="text" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>


        </div>
    )
}

export default DevenirMembre
