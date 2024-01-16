import RegistrationForm from "@/app/pages/register/page"
export default function Registrationmodal({ eventname, onClose }) {
  
    return (
    <div className="fixed flex-col top-0 left-0 w-full h-full flex items-center justify-evenly justify-center overflow-hidden  z-50">
        <div><button onClick={onClose} className="color-black bg-[red]">&times;</button></div>
        <RegistrationForm eventname={eventname}/>
      </div>
    );
  }