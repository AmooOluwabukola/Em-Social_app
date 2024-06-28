import { useState,useEffect, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profileImg from '../assets/profile-img.svg';
import NavBag from './NavBag';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import UserContext from '../context/UserContext';

function ProfilePopUp({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {getBioProfile,setBioProfile,bioProfile} = useContext(UserContext)
  

  const token = localStorage.getItem("clientToken");
  const navigate = useNavigate();


  useEffect(()=>{
    if(!token){
      toast.error("unauthorized,sign in")
        navigate('/signin');
    }
  
},[])

  return (
    <>
    <img src={bioProfile?.profilePhoto} alt='' className='profile-img'  style={{borderRadius:"5rem", height:"3rem",width:"3rem"}} onClick={handleShow}/>
      {/* <img src={profileImg} onClick={handleShow} alt='' /> */}

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <NavBag/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <ProfilePopUp key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}



export default Example;
