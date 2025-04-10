import { useLocation } from 'react-router';

const AuthCheck = ({children}) => {

    const isAuthenticate = true;
    const location = useLocation();

    if (!isAuthenticate) {
        return null;
    }

    return children;
}

export default AuthCheck;
