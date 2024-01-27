import RegistrationForm from "@/app/pages/register/page"
export default function Registrationmodal({ feeAmount, fee, eventname, onClose, eventtype }) {
    return (
    <div className="fixed flex-col top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden z-50">
        <RegistrationForm feeAmount={feeAmount} fee={fee} eventname={eventname} onClose={onClose} solo={eventtype}/>
      </div>
    );
  }