import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay,Button } from 'reactstrap';
import './Feet.css';
import ArmForm from './ArmForm';
import Modal from 'react-bootstrap/Modal'


function Feet() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleF">
                <br />
            <h1>Feet Workout</h1>
            <br />
            <br />
            </div>
            <br />
            <br />

            <div className="myS">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffcfca" }}>
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E11.jpg" style={{  width: 405, height: 250}} />
            <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 11 กระดกข้อเท้าขึ้น-ลง / ซ้าย-ขวา</h5></CardTitle>
            <Button variant="primary" onClick={handleShow}>
                Click for watch video
            </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 11 กระดกข้อเท้าขึ้น-ลง / ซ้าย-ขวา</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="760" height="550" src="https://www.youtube.com/embed/hYWR6d7IwJE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#e7d2ef" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E12.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 12 กระดกนิ้วเท้าขึ้น-ลง / กาง-หุบ</h5></CardTitle>
       <Button variant="primary" onClick={handleShow1} >
       Click for watch video
        </Button>
       <Modal show={show1} onHide={handleClose1} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 12 กระดกนิ้วเท้าขึ้น-ลง / กาง-หุบ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/SkyxqArxaq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
        </div>
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ประเมินการกายภาพ</h2>
            <br />
            </div>


            <div>
                <ArmForm />
            </div>

            <div>
            <Card className="li5">
            <CardImg style={{ width:1900,height:270}} src="https://wallpapercave.com/wp/wp2912335.jpg" alt="Card image" />
                <CardImgOverlay>
                <CardTitle><h1>**ทำ 3 เซต เซตละ 10 ครั้ง**</h1></CardTitle>
                    <CardText>
                        <h2>หรือทำจนกว่าจะเหนื่อย</h2>
                    </CardText>
                    <CardText>
                        <h2>Keep Practicing</h2>
                    </CardText>
                </CardImgOverlay>
            </Card>

            </div>
        </div>
    );
}

export default Feet;