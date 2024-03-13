import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';

const ChangePass = ({ changePasswordHandle, setBtnClic, btnClic }) => {

    const [tokenGoogle, setTokenGoogle] = useState("");

    const [password, setPassword] = useState("");
    const [newPassword, setNewpassword] = useState('');
    const [repetPassword, setRepetPassword] = useState('');

    const onChange = (e) => {
        setTokenGoogle(e);
    };

    const submitData = (e) => {
        e.preventDefault();
        setBtnClic(true);
        if (tokenGoogle) {
            if (newPassword === repetPassword) {
                changePasswordHandle(e, password, newPassword);
            } else {
                toast.error("Les deux mots de passe ne correspondent pas");
                setBtnClic(false);
            }
        } else {
            toast.error("Veuillez cocher le ReCAPTCHA");
            setBtnClic(false);
        }
    };

    return (
        <form onSubmit={(e) => submitData(e)}>
            <h5>Changer votre mot de passe</h5>

            <div style={{ fontSize: "13px" }}>
                Si vous voulez changer le mot de passe attaché  à votre compte client congomart, vous pouvez le faire ci-dessous.
                N'oubliez pas de cliquer sur le bouton Enregistrer les modifications quand vous avez terminé
            </div>
            <div className='mt-3'>
                <label>Votre ancien mot de passe</label> <br />
                <input
                    type="password"
                    placeholder="Ancien mot de passe"
                    className='mt-2'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='mt-2'>
                <label>Votre nouveau mot de passe</label> <br />
                <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    className='mt-2'
                    onChange={(e) => setNewpassword(e.target.value)}
                />
            </div>

            <div className='mt-2'>
                <label>Répéter le nouveau mot de passe</label> <br />
                <input
                    type="password"
                    placeholder="Répéter le mot de passe"
                    className='mt-2'
                    onChange={(e) => setRepetPassword(e.target.value)}
                />
            </div>

            <div className="form-group mt-2" style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                <ReCAPTCHA
                    sitekey="6LfaKTAkAAAAAFTPzhWyXNNBdEu32lulv8lYi7Q6"
                    onChange={onChange}
                />
            </div>

            <div className='inputAndBtn'>
                <button
                    className='mt-2'
                    disabled={password && repetPassword && newPassword ? btnClic ? true : false : true}
                >
                    {
                        btnClic ? "Modification..." : "Modifier"
                    }
                </button>
            </div>
        </form>
    )
}

export default ChangePass