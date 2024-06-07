import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();

    const logins = async (googleUser) => {
        try {

            const authorizationCode = googleUser.code;
            const response = await axios.post('http://localhost:8080/api/v1/user/auth/token', {authorizationCode});
            setUser(response.data.user); // Assuming the user's role is included in the response
            localStorage.setItem('userid', response.data.user.id);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('access_token', response.data.authorization.access_token);
            localStorage.setItem('id_token', response.data.authorization.id_token);
            localStorage.setItem('token', response.data.authorization.id_token);
            localStorage.setItem('refresh_token', response.data.authorization.refresh_token);
            localStorage.setItem('user_type', response.data.user.userType);
            localStorage.setItem('user_email', response.data.user.email);
            return Promise.resolve();

        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setUser(null);
        setLogged(false);
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_email');
        navigate("/login")
    };

    // Load user from local storage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogged(true);
            // navigate("/home")
        }
    }, []);

    return {user, logins, logout, logged};
};

export default useAuth;