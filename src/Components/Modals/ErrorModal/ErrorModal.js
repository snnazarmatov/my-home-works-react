import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ModalOverlay from '../ErrorModal/ModalOverlay';

//ErrorModal ды каалаган жерде чакыра беребиз Portal аркылуу аны рендер кылабыз public тин ичинде 2 дивтин ичине(<div id="backdrop-root"></div>)
const ErrorModal = props => {
    return (
    <React.Fragment>
        {ReactDOM.createPortal(
//Portall 2 аргументе алат.1-Backdrop component который мы рендерим. 2-аргумент (backdrop-root) ту getElementById кылабыз.backdrop div тин ичинде(парент катары root тун жанында) озгочо озунчо рендер болуп жатат анкени ал бардык компонентерден жогору туруш керек.анан пропстарын туура бериш керек аны биз ErrorModal га беребиз form турган жерге.
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )} 
        {ReactDOM.createPortal(
                <ModalOverlay
                title={props.title} 
    //props ErrorModal дан келет.
                message={props.message} 
                onConfirm={props.onConfirm}
                />,
                document.getElementById('modal-root')
            )}  
    </React.Fragment>
    )
}

export default ErrorModal;