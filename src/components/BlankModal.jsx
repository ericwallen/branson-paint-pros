import React from 'react'


const BlankModal = (props) => {


        return (
            <>


                <div id="modal" style={{ display: props.showModal ? 'block' : 'none'}}>
			    <div id="modal-content">
				    <p className="center"><button id="modal-close" onClick={props.handleHideModal}><i className="fas fa-times"></i></button></p> 
                        
                        <div style={{padding: '20px'}}>
                            {props.children}
                        </div>

                    </div>
                </div>



            </>

        )
    
}

export default BlankModal