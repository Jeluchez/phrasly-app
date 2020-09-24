


const [isSelected, setisSelected] = useState(false);
const [hover, sethover] = useState(true);
const PrevImageRef = useRef();

const handleOver = ({ currentTarget }) => {
    const imageBox = currentTarget;
    const checker = imageBox.querySelector('.image-checker');

    // this make hover
    if (checker) {
        if (hover) {
            checker.classList.remove('d-none');
        }
        // if onleave is true and is selected, then remove it
        else if (!hover && isSelected) {
            checker.classList.remove('d-none');
        }
        else {
            checker.classList.add('d-none');
        }
    }
    sethover(!hover);
}

const handleSelectImage = ({ currentTarget }) => {

    dispatch(selectImage(id, url));
    setisSelected(true);

    // let prevImageBox = PrevImageRef.current;
    // if (prevImageBox) {
    //     console.log("previos",prevImageBox);
    // }
    const imageBox = currentTarget;
    const checker = imageBox.querySelector('.image-checker');
    if (checker) {
        checker.classList.add('far', 'fa-check-circle');
        checker.classList.remove('fa-circle', 'd-none');
    }
    // asigna this imageBox as the previos
    PrevImageRef.current = imageBox;
    console.log(PrevImageRef);
}