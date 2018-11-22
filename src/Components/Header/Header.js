import React from 'react';
import { Debounce } from 'react-throttle'
import PropTypes from 'prop-types';
import { HashLoader } from 'react-spinners';
import './header.scss';

const Header = (props) => {
    const { handleInputChange, isSearching } = props;

    const boxContent = () => {
        return isSearching ? (
            <HashLoader
                color={'#dc3545'}
                loading={ isSearching }
                sizeUnit={"px"}
                size={25}
            />
        ) : '@';
    }

    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span
                                    className="input-group-text box"
                                    id="basic-addon1">
                                    { boxContent() }
                                </span>
                            </div>
                            <Debounce time="400" handler="onChange">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="search"
                                    placeholder="Search..."
                                    onChange={(e) => handleInputChange(e.target.value)}/>
                            </Debounce>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    isSearching: PropTypes.bool,
};

export default Header
