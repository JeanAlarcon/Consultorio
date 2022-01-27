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

    const [d21,setd21] = useState(false)
    const [d22,setd22] = useState(false)
    const [d23,setd23] = useState(false)
    const [d24,setd24] = useState(false)
    const [d25,setd25] = useState(false)
    const [d26,setd26] = useState(false)
    const [d27,setd27] = useState(false)
    const [d28,setd28] = useState(false)

    const [d55,setd55] = useState(false)
    const [d54,setd54] = useState(false)
    const [d53,setd53] = useState(false)
    const [d52,setd52] = useState(false)
    const [d51,setd51] = useState(false)


    const [d61,setd61] = useState(false)
    const [d62,setd62] = useState(false)
    const [d63,setd63] = useState(false)
    const [d64,setd64] = useState(false)
    const [d65,setd65] = useState(false)

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


    const camd21 = () => {
        setd21(!d21)
    }

    const camd22 = () => {
        setd22(!d22)
    }

    const camd23 = () => {
        setd23(!d23)
    }

    const camd24 = () => {
        setd24(!d24)
    }

    const camd25 = () => {
        setd25(!d25)
    }

    const camd26 = () => {
        setd26(!d26)
    }

    const camd27 = () => {
        setd27(!d27)
    }

    const camd28 = () => {
        setd28(!d28)
    }


    const camd55 = () => {
        setd55(!d55)
    }

    const camd54 = () => {
        setd54(!d54)
    }

    const camd53 = () => {
        setd53(!d53)
    }

    const camd52 = () => {
        setd52(!d52)
    }

    const camd51 = () => {
        setd51(!d51)
    }


    const camd61 = () => {
        setd61(!d61)
    }

    const camd62 = () => {
        setd62(!d62)
    }

    const camd63 = () => {
        setd63(!d63)
    }

    const camd64 = () => {
        setd64(!d64)
    }

    const camd65 = () => {
        setd65(!d65)
    }

    useEffect(() => {
        const getEntidad = async () => {
            const { docs } = await store.collection('pacientes').doc(id).collection('Auxiliar').get()
            const data = docs.map(item =>({id:item.id, ...item.data()}));
            setd18(data[0].d18)
            setd17(data[0].d17)
            setd16(data[0].d16)
            setd15(data[0].d15)
            setd14(data[0].d14)
            setd13(data[0].d13)
            setd12(data[0].d12)
            setd11(data[0].d11)
            setd21(data[0].d21)
            setd22(data[0].d22)
            setd23(data[0].d23)
            setd24(data[0].d24)
            setd25(data[0].d25)
            setd26(data[0].d26)
            setd27(data[0].d27)
            setd28(data[0].d28)
            setd55(data[0].d55)
            setd54(data[0].d54)
            setd53(data[0].d53)
            setd52(data[0].d52)
            setd51(data[0].d51)
            setd61(data[0].d61)
            setd62(data[0].d62)
            setd63(data[0].d63)
            setd64(data[0].d64)
            setd65(data[0].d65)
        }
        getEntidad()
    },[])

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
            d21: d21,
            d22: d22,
            d23: d23,
            d24: d24,
            d25: d25,
            d26: d26,
            d27: d27,
            d28: d28,
            d55: d55,
            d54: d54,
            d53: d53,
            d52: d52,
            d51: d51,
            d61: d61,
            d62: d62,
            d63: d63,
            d64: d64,
            d65: d65,
        }



        try {
            await store.collection('pacientes').doc(id).collection('Auxiliar').add(Auxiliar);
            const { docs } = await store.collection('pacientes').doc(id).collection('Auxiliar').get()
            //const data = docs.map(item =>({id:item.id, ...item.data()}));
            //setTratamientos(data)
            console.log('Auxiliar agregado')
            
        } catch (error) {
            console.log(error)
        }
    }


    return(<div className="containerAuxiliar row col-md-12 mx-auto">
    <h1>Auxilar de evolucion</h1>
    
    <form onSubmit={addAuxiliar} className='row' action="">
    <div className="row col-md-6 mx-auto md-3" >
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>18</p>
            <input className="form-check-input" type="checkbox" checked={d18} onChange={camd18} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>17</p>
            <input className="form-check-input" type="checkbox" checked={d17} onChange={camd17} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>16</p>
            <input className="form-check-input" type="checkbox" checked={d16} onChange={camd16} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>15</p>
            <input className="form-check-input" type="checkbox" checked={d14} onChange={camd15} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>14</p>
            <input className="form-check-input" type="checkbox" checked={d14} onChange={camd14} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>13</p>
            <input className="form-check-input" type="checkbox" checked={d13} onChange={camd13} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>12</p>
            <input className="form-check-input" type="checkbox" checked={d12} onChange={camd12} />
        </div>
        <div className="col-md-4">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>11</p>
            <input className="form-check-input" type="checkbox" checked={d11} onChange={camd11} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>55</p>
            <input className="form-check-input" type="checkbox" checked={d55} onChange={camd55} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>54</p>
            <input className="form-check-input" type="checkbox" checked={d54} onChange={camd54} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>53</p>
            <input className="form-check-input" type="checkbox" checked={d53} onChange={camd53} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>52</p>
            <input className="form-check-input" type="checkbox" checked={d52} onChange={camd52} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>51</p>
            <input className="form-check-input" type="checkbox" checked={d51} onChange={camd51} />
        </div>
    </div>



    <div className="row col-md-6 mx-auto mr-3 md-3">
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>21</p>
            <input className="form-check-input" type="checkbox" checked={d21} onChange={camd21} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>22</p>
            <input className="form-check-input" type="checkbox" checked={d22} onChange={camd22} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>23</p>
            <input className="form-check-input" type="checkbox" checked={d23} onChange={camd23} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>24</p>
            <input className="form-check-input" type="checkbox" checked={d24} onChange={camd24} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>25</p>
            <input className="form-check-input" type="checkbox" checked={d25} onChange={camd25} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>26</p>
            <input className="form-check-input" type="checkbox" checked={d26} onChange={camd26} />
        </div>
        <div className="col-md-1">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>27</p>
            <input className="form-check-input" type="checkbox" checked={d27} onChange={camd27} />
        </div>
        <div className="col-md-4">
            <img src={logo1} alt="" width="30px" height="30px"/>
            <p>28</p>
            <input className="form-check-input" type="checkbox" checked={d28} onChange={camd28} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>61</p>
            <input className="form-check-input" type="checkbox" checked={d61} onChange={camd61} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>62</p>
            <input className="form-check-input" type="checkbox" checked={d62} onChange={camd62} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>63</p>
            <input className="form-check-input" type="checkbox" checked={d63} onChange={camd63} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>64</p>
            <input className="form-check-input" type="checkbox" checked={d64} onChange={camd64} />
        </div>
        <div className="col-md-2">
            <img src={logo2} alt="" width="30px" height="30px"/>
            <p>65</p>
            <input className="form-check-input" type="checkbox" checked={d65} onChange={camd65} />
        </div>
    </div>

    <div className="d-flex justify-content-center align-items-end">
        <div className="p-5"/>
        
        <input type="submit" className="btn btn-danger col-md-3" value="Guardar"  />
        
    </div>
    </form>
</div>)
}

export default AuxiliarEvolucion;