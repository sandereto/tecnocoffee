import React, { Component } from 'react'


export default class footer extends Component {
    render() {
        return (
            <React.Fragment>

                    <footer className="main-footer" style={{backgroundColor:'#EEE9E9'}}>
                        
                            <div className="float-right d-none d-sm-block">
                                <b>Version</b> 3.0.4
                            </div>
                            <strong>Copyright © 2020-2020 Rehagro TI</strong> Todos os direitos reservados
                       
                    </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </React.Fragment>
        )
    }
}
