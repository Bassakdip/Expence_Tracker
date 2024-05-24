import React, { useEffect, useState } from 'react'
import { updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import './ProfileDetails.css';

const ProfileDetails = () => {

    const [fullName, setFullName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        if (user.displayName) {
            setFullName(user.displayName)
            setPhotoUrl(user.photoURL)
        }
    }, [])

    const nameHandler = (e) => {
        setFullName(e.target.value)
    }
    const photoUrlHandler = (e) => {
        setPhotoUrl(e.target.value)
    }

    const formUpdateHandler = async (e) => {
        e.preventDefault()
        try {
            await updateProfile(auth.currentUser, {
                displayName: fullName,
                photoURL: photoUrl
            })
            console.log('profile update successfully');
            navigate("/userdetails")

        } catch (err) {
            console.log(err.message);
        }
        setFullName("")
        setPhotoUrl("")
    }

        return (
            <div>
                <div className="form-container">
                    <div className="header">
                        <span className="frmspan">Contact Details</span>
                        <button className="cancel-button">Cancel</button>
                    </div>
                    <form onSubmit={formUpdateHandler}>
                        <div className="input-container">

                            <label htmlFor="fullName">Full Name:</label>

                            <input type="text" id="fullName"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={nameHandler}
                                required
                            />

                            <label htmlFor="photoURL">Photo URL:</label>
                            <input type="text" id="photoURL"
                                placeholder="Photo URL"
                                value={photoUrl}
                                onChange={photoUrlHandler} />

                        </div>
                        <div className="button-container">
                            <button type="submit">Update</button>
                        </div>
                    </form>
                    <hr className="horizontal-line" />
                </div>
            </div>
        )
    }

    export default ProfileDetails
