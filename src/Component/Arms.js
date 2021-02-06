import 'bootstrap/dist/css/bootstrap.min.css';
import './Arms.css';
import { Card,CardImg, CardBody, CardTitle, CardText,Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalDialog from 'react-bootstrap/ModalDialog'

function Arms() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleM">
                <br />
            <h1>Arms Workout</h1>
            </div>
            <br />
            <br />
            <br />

        <div className="myS">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffff88" }}>
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%9E%E0%B8%A0%E0%B8%B2%E0%B8%9E1.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>ท่ากายภาพท่าที่ 1 ยกแขนขึ้นลง</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" onClick={handleShow}>
                Click for watch video
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Physical Theraphy
                </Modal.Title>
              </Modal.Header>
        <Modal.Body>
            <iframe width="650" height="450" src="https://www.youtube.com/embed/ASV8Y-5Fwv4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
          </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#bcf8cf" }}>
       <CardImg top width="100%" src="https://farm1.staticflickr.com/886/41172418821_5c6c42d69c_c.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>ท่ากายภาพท่าที่ 2 ยกแขนขึ้นลง</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" onClick={handleShow}>
                Click for watch video
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Physical Theraphy
                </Modal.Title>
              </Modal.Header>
        <Modal.Body>
            <iframe width="650" height="450" src="https://www.youtube.com/embed/1E1Y_u0vVD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
          </Modal>
        </Card>
      </div>

    </div>
            );
}

export default Arms;