import React from "react";
import { Accordion } from 'react-bootstrap'

const Acordion = () => {
    return(
        <Accordion className=" container mt-5 p-3">
            <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>¿Puedo Registrar mas de un Animal? </Accordion.Header>
                <Accordion.Body>
                Se pueden registrar todos los animales caninos y felinos, que cuenten con los requisitos 
                mencionados. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="item">
                <Accordion.Header>¿El registro es solo para animales de raza? </Accordion.Header>
                <Accordion.Body>
                No, es para todos los animales de compañía, perros y gatos inicialmente. Para el caso de los perros “sin raza”, 
                al momento de registrarlos deben ser clasificados como “mestizos”, 
                en el caso de los gatos estos deben clasificarse como “doméstico de pelo corto” o “doméstico de pelo largo”.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="item">
                <Accordion.Header>¿Qué es una mascota o animal de compañía? </Accordion.Header>
                <Accordion.Body>
                Es un animal doméstico, que es tenido para compañía o seguridad. Pueden ser consideradas diferentes especies, 
                pero no es posible tener especies protegidas o en peligro de extinción como mascota o animal de compañía.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="item">
                <Accordion.Header>¿Qué es el maltrato o crueldad animal? </Accordion.Header>
                <Accordion.Body>
                Es cualquier acción u omisión, ocasional o reiterada que le cause daño, dolor o sufrimiento a un animal.
                 Estos hechos podrán ser sancionados con multa y presidio, además de la inhabilidad absoluta y perpetua
                  para la tenencia de cualquier tipo de animales.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="item">
                <Accordion.Header>¿Qué pasa si abandono a un animal de compañía? </Accordion.Header>
                <Accordion.Body>
                La ley considera el abandono como un acto de maltrato o crueldad animal, es decir toda acción u omisión, 
                ocasional o reiterada que injustificadamente cause daño, dolor o sufrimiento al animal. 
                Por lo tanto, si una entidad fiscalizadora constata un hecho de este tipo, una persona podría recibir como pena presidio y multa,
                 además de inhabilidad absoluta y perpetua para la tenencia de cualquier tipo de animales. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="item">
                <Accordion.Header>¿Cómo denunciar un acto de maltrato o crueldad animal?</Accordion.Header>
                <Accordion.Body>
                Se considera un acto de maltrato o crueldad animal cualquier acción u omisión, que sea ocasional o reiterada, que injustificadamente cause daño, dolor o sufrimiento a un animal.
El procedimiento comienza al presentar la denuncia formal en Carabineros de Chile, la Policía de Investigaciones o en la Fiscalía local. Los requisitos para denunciar son los siguientes:
La denuncia debe ir acompañada de antecedentes como fecha, lugar, narración del suceso, documento de un Médico Veterinario que indique las lesiones (si existe)
Además de todo registro del ilícito que posea la persona (fotografías, videos, audios, testigos, otros). 
Este trámite debe ser efectuado por una persona mayor de 18 años, y en el caso de ser menor de esas edad, debe ser representado jurídicamente por un mayor de edad.
Posteriormente el Ministerio Público revisará la denuncia y tomará las acciones que determine según cada caso.


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Acordion;