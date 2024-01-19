import RegistrationForm from "@/app/pages/register/page"
export default function Registrationmodal({ fee, eventname, onClose }) {
    return (
    <div className="fixed flex-col top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden z-50">
        <RegistrationForm fee={fee} eventname={eventname} onClose={onClose}/>
      </div>
    );
  }