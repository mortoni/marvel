import React from 'react';
import './modal_content.scss';
import PropTypes from 'prop-types';

const ModalContent = (props) => {
    const { thumbnail, name, description } = props;
    const uri = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
    return (
        <div className="row modal_content">
            <div className="col-xs-12 col-sm-6">
                <div className="logo">
                    <img
                        src={ uri }
                        alt="Marvel character"
                        className="rounded-circle mx-auto d-block"/>
                </div>

                <div className="btn-group-vertical btn-block">
                    <button
                        type="button"
                        className="btn btn-light btn-lg btn-block">
                        Details
                    </button>

                    <button
                        type="button"
                        className="btn btn-light btn-lg btn-block">
                        Comics
                    </button>

                    <button
                        type="button"
                        className="btn btn-light btn-lg btn-block">
                        Events
                    </button>

                    <button
                        type="button"
                        className="btn btn-light btn-lg btn-block">
                        Series
                    </button>

                    <button
                        type="button"
                        className="btn btn-light btn-lg btn-block">
                        Stories
                    </button>
                </div>

            </div>

            <div className="col-xs-12 col-sm-5 text-center">
                <h4>{ name }</h4>
                <p
                    className="text-justify">
                    { description ? description : 'Has no description'}
                </p>
            </div>
        </div>
    );
}
ModalContent.propTypes = {
    thumbnail: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ModalContent
