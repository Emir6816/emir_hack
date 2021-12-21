import React, { useState } from 'react';
// import MydModalWithGrid from './Components/Content/Modal_Ticket/MydModalWithGrid';
import { Button } from 'react-bootstrap';
import MydModalWithGrid from './MydModalWithGrid';

const Button_Modal = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
               
            <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button>

    <MydModalWithGrid
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
        </div>
    );
};

export default Button_Modal;