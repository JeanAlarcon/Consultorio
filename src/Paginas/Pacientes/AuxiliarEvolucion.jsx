import './pacientes.css'
import logo1 from './../../assets/img/icono1.jpg'
import logo2 from './../../assets/img/icono2.jpg'
import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import {store} from './../../firebaseconfig'


function AuxiliarEvolucion(){
    const { id } = useParams()
    const [d18,setd18] = useState(false)
    const [d17,setd17] = useState(false)
    const [d16,setd16] = useState(false)
    const [d15,setd15] = useState(false)
    const [d14,setd14] = useState(false)
    const [d13,setd13] = useState(false)
    const [d12,setd12] = useState(false)
    const [d11,setd11] = useState(false)

    const camd18 = () => {
        setd18(!d18)
    }

    const camd17 = () => {
        setd17(!d17)
    }

    const camd16 = () => {
        setd16(!d16)
    }

    const camd15 = () => {
        setd15(!d15)
    }

    const camd14 = () => {
        setd14(!d14)
    }

    const camd13 = () => {
        setd13(!d13)
    }

    const camd12 = () => {
        setd12(!d12)
    }

    const camd11 = () => {
        setd11(!d11)
    }

    const addAuxiliar = async (event) => {
        event.preventDefault()

        const Auxiliar = {
            d18: d18,
            d17: d17,
            d16: d16,
            d15: d15,
            d14: d14,
            d13: d13,
            d12: d12,
            d11: d11,
        }



        try {
            await store.collection('pacientes').doc(id).collection('Auxiliar').add(Auxiliar);
            const { docs } = await store.collection('pacientes').doc(id).collection('Auxiliar').get()
            //const data = docs.map(item =>({id:item.id, ...item.data()}));
            //setTratamientos(data)
            //console.log('tratamiento agregado',data.data)
            
        } catch (error) {
            console.log(error)
        }
    }


    return(<div className="containerAuxiliar row col-md-12 mx-auto">
    <h1>Auxilar de evolucion</h1>
    

    <div className="row col-md-6 mx-auto md-3">
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>18</p>
            <input class="form-check-input" type="checkbox" checked={d18} onChange={camd18} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>17</p>
            <input class="form-check-input" type="checkbox" checked={d17} onChange={camd17} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>16</p>
            <input class="form-check-input" type="checkbox" checked={d16} onChange={camd16} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>15</p>
            <input class="form-check-input" type="checkbox" checked={d14} onChange={camd15} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>14</p>
            <input class="form-check-input" type="checkbox" checked={d14} onChange={camd14} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>13</p>
            <input class="form-check-input" type="checkbox" checked={d13} onChange={camd13} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>12</p>
            <input class="form-check-input" type="checkbox" checked={d12} onChange={camd12} />
        </div>
        <div className="col-md-4">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>11</p>
            <input class="form-check-input" type="checkbox" checked={d11} onChange={camd11} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>55</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>54</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>53</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>52</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>51</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
    </div>



    <div className="row col-md-6 mx-auto mr-3 md-3">
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>21</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>22</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>23</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>24</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>25</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>26</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>27</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-4">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>28</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>61</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>62</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>63</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>64</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>65</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
    </div>

    <div class="d-flex justify-content-center align-items-end">
        <div class="p-5"/>
        
        <input type="submit" className="btn btn-danger col-md-3" value="Agregar" />
        
    </div>

</div>)
}

export default AuxiliarEvolucion;