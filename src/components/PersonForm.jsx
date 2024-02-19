import { useRef } from "react";
import PropTypes from "prop-types";

function PersonForm(props) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const phone_numberRef = useRef(null);
    const birth_dateRef = useRef(null);
    const {onSubmit} = props;

    const createPerson = async () => {
        const person = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            phone_number: phone_numberRef.current.value,
            birth_date: birth_dateRef.current.value,
        };
        const success = await onSubmit(person);
        if(success){
            resetForm();
        }
    } 

    const resetForm = () => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        phone_numberRef.current.value = "";
        birth_dateRef.current.value = "";
    }

    return ( <form onSubmit={event => {event.preventDefault(); createPerson();}}>

        <div className="mb-3">
            <label htmlFor="name" className="form-label">Név</label>
            <input type="text" className="form-control" id="name" placeholder="Név" ref={nameRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Cím</label>
            <input type="text" className="form-control" id="address" placeholder="Cím" ref={addressRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="phone_number" className="form-label">Telefonszám</label>
            <input type="tel" className="form-control" id="phone_number" placeholder="Telefonszám" ref={phone_numberRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="birth_date" className="form-label">Születési dátum</label>
            <input type="date" className="form-control" id="birth_date" placeholder="Születési dátum" ref={birth_dateRef}/>
        </div>
        <button type="submit" className="btn btn-primary">Felvétel</button>
    </form>  );
}

PersonForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default PersonForm;