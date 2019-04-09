import React from 'react'
import axios from 'axios'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            detail: ''
        }

        this.updateField = this.updateField.bind(this);
        this.send = this.send.bind(this);
    }

    updateField(key, value) {
        this.setState((oldState) => {
            let object = {}
            object[key] = value
            return object
        })
    }

    async send() {
        const data = { 
            Telefono: this.state.phone.toString(),
            Nombre: this.state.name,
            Email: this.state.email,
        }
        const result = await axios.post('http://localhost:3005/create', data);
        console.log(result);
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="left">
                        <div class="contact-form">
                            <div class="contact-form-header">
                                <div class="title">
                                    <div class="logo"></div>
                                    <h3>Hola!</h3>
                                </div>
                                <div class="sub-title">
                                    Te ayudare a encontrar el inmueble que estas buscando en la
                                    zona de Santa Barbara. Escribe aca tus datos.
                                </div>
                            </div>
                            <div class="contact-form-body">
                                <input type="text" id="txtName" placeholder="Nombre"
                                        onChange={(e) => { this.updateField('name', e.target.value) }} value={this.state.name} />
                                <div class="two-columns">
                                    <input type="email" id="txtEmail" placeholder="Email" 
                                        onChange={(e) => { this.updateField('email', e.target.value) }} value={this.state.email} />
                                    <input type="number" id="nmbPhone" placeholder="Teléfono"
                                        onChange={(e) => { this.updateField('phone', e.target.value) }} value={this.state.phone} />
                                </div>
                                <div class="second-two-columns">
                                    <select name="TipoInmueble" size="1">
                                        <option value="escoge">Escoge el tipo de inmueble</option>
                                        <option value="casa">Casa</option>
                                        <option value="apartamento">Apartamento</option>
                                        <option value="oficina">Oficina</option>
                                        <option value="local">Local</option>
                                        <option value="lote">Lote</option>
                                        <option value="edificio">Edificio</option>
                                    </select>
                                    <input type="text" id="txtPresupuesto" placeholder="Presupuesto" />
                                </div>
                                <div class="third-two-columns">
                                    <input type="text" id="txtHabitaciones" placeholder="Numero de habitaciones" />
                                    <input type="text" id="zona" placeholder="En que zona te gustaría" />
                                </div>
                                <select name="TipoInmueble" size="3">
                                    <option value="rentabilidad">Me genere buena rentabilidad</option>
                                    <option value="apartamento">Sea amplio por que siento que esta muy estrecho en el que estoy. Pude ser un poco antiguo pero con espacios amplios.</option>
                                    <option value="zona">Quede en una zona exclusiva de la ciudad. Tener a pocas cuadras de mi casa restaurantes, lugares sociales donde pueda caminar y otros servicios cerca.</option>
                                    <option value="central"> Quede en una zona central, cerca de mi trabajo, con acceso por varias vías principales.</option>
                                    <option value="social">Moderno, con una zona social amplia para poder reunirme con mis amigos y familiares, ojalá que tenga terraza.</option>
                                    <option value="residencial">En una zona residencial, tranquila y segura. Con puerta de seguridad y vigilancia 24/7 lo mas importante para mí es la seguridad.</option>
                                    <option value="campestre">Esté lejos de la ciudad, sea campestre, rodeado de naturaleza, con parques, residencial tranquilo y seguro.</option>
                                    <option value="zonassociales">Que el edificio tenga zonas sociales super completas, piscina, canchas, parques, zonas verdes, lobby super amplio y salón social.</option>
                                </select>

                                <textarea id="txtDetail" placeholder="Describe cómo es el inmueble que quieres" rows="6" maxlength="100"></textarea>
                            </div>
                            <div class="center">
                                <button onClick={this.send}>Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="imagen-principal"></div>
                    </div>
                </div>
                <div class="title-QyA">
                    PREGUNTAS FRECUENTES
                </div>
                <div class="content-QyA">
                    <div class="question">
                        ¿COMO FUNCIONA?
                    </div>
                    <div class="answer">
                        Ingresas las especificaciones de lo que estas buscando y haces el pago dependiendo de el plan que quieras y
                        yo, tu agente inmobiliaria virtual, me encargaré de encontrar el inmueble con las características que estas
                        buscando.
                        Pones en el calendario la disponibilidad de horario que tienes para ver los inmuebles, para yo enviarte al
                        correo los inmuebles disponibles con las características que me pediste y en el horario que te sirve.
                        Puedo enviarte el chofer para que te recoja y te lleve a tus citas, para que tengas una experiencia más
                        agradable.
                    </div>
                    <div class="question">
                        ¿QUE PASA DESPUES DE AGENDAR UNA CITA?
                    </div>
                    <div class="answer">
                        Una vez haya acordado la visita del inmueble contigo y con el agente inmobiliario/propietario que te vaya a
                        mostrar el inmueble, te enviaré la confirmación vía Whatsapp y por correo, y en momentos, quien muestra el
                        inmueble se contactará contigo directamente.

                    </div>
                    <div class="question">
                        ¿COMO COMPRO UN INMUEBLE?
                    </div>
                    <div class="answer">
                        Puedes hablar conmigo, yo estaría encantada de conseguirte el precio que quieres por tu inmueble. O si lo
                        prefieres puedes hablar directamente con quien te mostró el inmueble.

                    </div>
                    <div class="question">
                        ¿ME PUEDES ASESORAR EN FORMAS DE PAGO?
                    </div>
                    <div class="answer">
                        Estoy para ayudarte en todo lo que necesites sobre como comprar tu inmueble, ademas te puedo ayudar a sacar
                        el crédito con las entidades financieras aliadas o de tu interés, o en caso de arrendamientos, con los
                        documentos que necesites para el seguro.
                    </div>
                </div>
            </div>
        )
    }
}