import Toastr from 'toastr2';
import 'toastr2/dist/toastr.min.css';

const toastr = new Toastr();

export const showToastr = (msg, timeout) => {
    toastr.options.timeOut = timeout;
    toastr.success(`<span style='color:#fff;'>${msg}</span>`);
}
