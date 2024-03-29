import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function showToast(message : string, type: 'success' | 'info' | 'warning' | 'error'){
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
