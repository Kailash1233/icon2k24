import RegistrationForm from "@/app/pages/register/page"
export default function Registrationmodal({ eventname, onClose }) {
  console.log("EVENT NAME : " + eventname)
    return (
    <div className="fixed flex-col top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden z-50">
        <RegistrationForm eventname={eventname} onClose={onClose}/>
      </div>
    );
  }