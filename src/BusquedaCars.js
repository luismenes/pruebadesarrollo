import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListaCars from './ListaCars';

export default function busquedaCars(props2) {

    return (

        // <>

        //     <div className="card text-dark  mb-3">
        //         <div className="card-header">
        //             <h5 className="card-title">{props2.Codigo} - {props2.Name}</h5>

        //         </div>
        //         <div className="card-body">
        //             <h5 className="card-title"></h5>

        //             <div className="card">
        //                 <ul className="list-group list-group-flush">
        //                     <li className="list-group-item fa fa-thermometer-full">Presion: {props2.Pressure}</li>
        //                     <li className="list-group-item fa fa-thermometer-full">Humedad: {props2.Humidity}</li>
        //                     <li className="list-group-item fa fa-thermometer-full">Temp Min: {props2.Temp_min}</li>
        //                     <li className="list-group-item fa fa-thermometer-full">Temp Max: {props2.Temp_max}</li>

        //                 </ul>

        //             </div>
        //             <p className="card-text">{props2.Description}</p>



        //         </div>
        //     </div>



        // </>

        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ciudad</TableCell>
                        <TableCell align="right">Codigo</TableCell>
                        <TableCell align="right">Humedad</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={props2.Id}>
                        <TableCell component="th" scope="row">
                            {props2.Name}
                        </TableCell>
                        <TableCell align="right">{props2.Codigo}</TableCell>
                        <TableCell align="right">{props2.Humidity}</TableCell>
                        <TableCell align="right">{props2.Description}</TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

    )


}