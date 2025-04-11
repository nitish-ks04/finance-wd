import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const [username, setusername] = useState("");
    const [userphone, setuserphone] = useState("");
    const [usermail, setusermail] = useState("");

    useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem("currentuser"));
        if (currentuser?.name) {
            setusername(currentuser.name);
            setuserphone(currentuser.phone);
            setusermail(currentuser.email);
        }
    }, [])


    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("userInside");
        localStorage.removeItem("currentuser");
        navigate("/");
    }

    return (
        <div className="home">
            <div className="profile-name">
                welcome,{username},{userphone},{usermail} !
            </div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default Profile