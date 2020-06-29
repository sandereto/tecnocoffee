import React from 'react'

export default props => {
    return (
        
        <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            {props.children}
            <button hidden={props.hidden} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>

            
        
    )
}
