export default function Cars(props) {

    return (

        <>

            <div className="card text-dark  mb-3">
                <div className="card-header">
                    <h5 className="card-title">{props.Codigo} - {props.Name}</h5>

                </div>
                <div className="card-body">
                    <h5 className="card-title"></h5>

                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item fa fa-thermometer-full">Presion: {props.Pressure}</li>
                            <li className="list-group-item fa fa-thermometer-full">Humedad: {props.Humidity}</li>
                            <li className="list-group-item fa fa-thermometer-full">Temp Min: {props.Temp_min}</li>
                            <li className="list-group-item fa fa-thermometer-full">Temp Max: {props.Temp_max}</li>

                        </ul>

                    </div>
                    <p className="card-text">{props.Description}</p>



                </div>
            </div>



        </>

    )


}