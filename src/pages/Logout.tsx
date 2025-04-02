import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

const Logout: React.FC = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <div>
      <h1>Logging you out!</h1>
      <h5>Have a good day!</h5>
    </div>
  );
};
export default Logout;
