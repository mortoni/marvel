import React from 'react';
import './character.scss';
import PropTypes from 'prop-types';

const Character = (props) => {
    const { thumbnail, name, onOpenModal } = props;
    const uri = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
    return (
        <div
            className="col-sm-6 col-md-2 character"
            onClick={ () => onOpenModal(props) }
        >
            <div className="thumbnail">
                <img
                    src={ uri }
                    alt="Marvel character"/>
                <div className="caption">
                    <h5>{ name }</h5>
                </div>
            </div>
        </div>
    );
}

Character.propTypes = {
    thumbnail: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default Character
