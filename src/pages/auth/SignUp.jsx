import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/storebook', { replace: true });
  }, [navigate]);
  return null;
}