import './index.css';

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = ({phone, text}) => {
  {/* https://wa.me/1XXXXXXXXXX */}
  const whastappNumber = phone;
  return (
    <a className='whatsAppChat' href={`https://wa.me/${whastappNumber}`}><FaWhatsapp/>{text}</a>
  );
};

export default WhatsAppBtn;