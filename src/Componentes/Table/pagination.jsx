import React from 'react'

export default props => (
    <React.Fragment>
        <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                <ul className="pagination pagination-sm">
                    {props.children}
                </ul>
            </div>
        </div>
    </React.Fragment>
)