import React from 'react';
import './app.scss';
import Header from '../../Components/Header';
import Character from '../../Components/Character';
import ModalContent from '../../Components/ModalContent';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { openModal,
         closeModal,
         searchTerm,
         updateChars } from '../../Actions';
import PropTypes from 'prop-types';

export const App = (props) =>  {
    const { openModal,
            closeModal,
            modal,
            search,
            searchTerm,
            updateChars } = props;

    const handleInputChange = (query) => {
        searchTerm(query);
        if (query.length + 1 > 2) {
            updateChars(query);
        }
    }

    const content = () => {
        return modal.isOpen ? <ModalContent { ...modal.char }/> : null;
    }

    return (
        <div className="App">
            <Header
                handleInputChange={ handleInputChange }
                isSearching={ search.isSearching }/>

            <div className="char-container">
                <div className="row">
                    { search.chars.map(char => (
                        <Character
                            key={ char.id }
                            { ...char }
                            onOpenModal={ openModal }
                        />
                    )) }
                </div>

                <Modal open={ modal.isOpen } onClose={ closeModal } center>
                  { content() }
                </Modal>

            </div>
        </div>
    );
}

App.propTypes = {
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    searchTerm: PropTypes.func.isRequired,
    updateChars: PropTypes.func.isRequired,
};

function mapStateToProps({ modal, search }) {
    return {
        modal,
        search,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: (char) => dispatch(openModal(char)),
        closeModal: () => dispatch(closeModal()),
        searchTerm: (query) => dispatch(searchTerm(query)),
        updateChars: (query) => dispatch(updateChars(query)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
