import React from 'react'

export default class Home extends React.Component {
    constructor (props) {
        super(props)

        this.goTo = this.goTo.bind(this)
    }

    goTo(path) {
        this.props.history.push(path)
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
                                    Hola, soy tu agente inmobiliaria digital. Él único servicio de
                                    personal shopper, que te entiende y te busca y encuentra
                                    los inmuebles por ti.
                                    Cuentame que deseas hacer?
                                </div>
                            </div>
                            <div class="center">
                                <button>Ingresar mi inmueble</button>
                                <button onClick={() => this.goTo('signup')}>Buscar un inmueble</button>
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