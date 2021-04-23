import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'
 const Form=(props) => {
    return (
    <div className="container">
        <div>{props.erore ? error() : null}</div>
        <form onSubmit={props.loadweather}>
            
        <div className="row">
            <div className="col-md-3 offset-md-2">
                <input type="text" className="form-control" name="city" autoComplete="off" placeholder="شهر"/>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" name="country" autoComplete="off" placeholder="کشور"/>
            </div>
            <div className="col-md-3 mt-md-0 text-md-left">
             <button className="btn btn-warning">گرفتن آب و هوا</button>
            </div>
        </div>
        </form>
    </div>

    )
}
const error=()=>{
    return(
     <div className="alert alert-danger mx-5" role="alert">
         Please Enter City and Country
         {console.log("jjkjkjkjkl")}
     </div>
    )
}
export default Form;
