import PropTypes from "prop-types";


function PersonCard(props) {
    const {person} = props;
    return ( <div className="col">
        <div className="card h-100">
            <div className="card-header">
                    {person.name}
            </div>
            <div className="card-body">
                <table className="table">
                        <tbody>
                            <tr>
                                <th>E-mial</th>
                                <td>{person.email}</td>
                            </tr>
                            <tr>
                                <th>Lakcím</th>
                                <td>{person.address}</td>
                            </tr>
                            <tr>
                                <th>Telefonszám</th>
                                <td>{person.phone_number}</td>
                            </tr>
                            <tr>
                                <th>Születési dátum</th>
                                <td>{person.birth_date}</td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div> );
}

PersonCard.propTypes = {
    person: PropTypes.object.isRequired
}

export default PersonCard;