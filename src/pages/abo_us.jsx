import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About_us() {

    const navigate = useNavigate();

    useEffect(() => {
        const isUser = localStorage.getItem("userInside");
        if (!isUser) {
            navigate('/');
        }
    }, [])


    return (
        <div>
            this is about us  page
        </div>
    );
}
export default About_us