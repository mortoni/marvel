import React from 'react';

const Header = (props) => {
    const { handleInputChange } = props;

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="search"
                                placeholder="Search..."
                                onChange={(e) => handleInputChange(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
