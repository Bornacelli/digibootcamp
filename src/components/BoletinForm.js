import "./BoletinForm.css"

function BoletinForm(){
    return(
        <div className="from-container">
            <h1>Formulario de Contacto </h1>
            <form>
                <input
                    placeholder="Name"
                />

                <input
                    placeholder="Email"
                />

                <input
                    placeholder="Mensaje"
                />

                <button>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default BoletinForm