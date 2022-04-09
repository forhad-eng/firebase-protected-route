import { getAuth, signOut } from 'firebase/auth'
import app from '../firebase.init'

const useAuth = () => {
    const auth = getAuth(app)
    return { auth, signOut }
}

export default useAuth
