import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay,Button } from 'reactstrap';
import './Hip.css';
import Modal from 'react-bootstrap/Modal'
import ArmForm from './ArmForm';

function Hip() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleThurs">
                <br />
            <h1>Hip Workout</h1>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />

            <div className="myS">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffcfca" }}>
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E8.jpg" style={{  width: 405, height: 250}} />
            <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 8 งอ-เหยียดข้อสะโพก</h5></CardTitle>
            <Button variant="primary" onClick={handleShow}>
                Click for watch video
            </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 8 งอ-เหยียดข้อสะโพก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="760" height="550" src="https://www.youtube.com/embed/ZVxif3DHOWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#e7d2ef" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E9.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 9 งอ-เหยียดข้อสะโพก</h5></CardTitle>
       <Button variant="primary" onClick={handleShow1} >
       Click for watch video
        </Button>
       <Modal show={show1} onHide={handleClose1} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 9 งอ-เหยียดข้อสะโพก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/l24LaAFFYtg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>

    <Card style={{ margin: 20, padding: 20,backgroundColor:"#bcf8cf" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E10.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 10 กาง-หุบข้อสะโพก</h5></CardTitle>
       <Button variant="primary" onClick={handleShow2} >
       Click for watch video
        </Button>
       <Modal show={show2} onHide={handleClose2} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 10 กาง-หุบข้อสะโพก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/OeMy1CaJU3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
      </div>

            {/* <div className="myVi">
            <br />

            <h1>ท่ากายภาพสะโพก</h1>
            <br />
            <h2>ท่าที่ 1 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/ZVxif3DHOWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>ยกขาขึ้นเเล้ววางตั้งไขว้กับขาอีกข้าง</h5>
            <h5>ค่อยๆกดน้ำหนักลงจนตึง จึงคลายออก ทำด้านละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>

            <br />
            <br />
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 2 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/l24LaAFFYtg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อเท้า และ ข้อเข่าด้านล่าง เเล้วยกขาขึ้นเป็นมุมฉาก ทำข้างละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>

            <br />
            <br />
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 3 กาง-หุบข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi5">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/OeMy1CaJU3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-primary"><h5>จับบริเวณข้อเท้า และข้อเข่า ยกขาขึ้นเล็กน้อย เเล้วกางออกด้านข้าง 45 องศาเเล้วหุบเข้า ข้างละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>
            <br />
            <br /> */}

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
            <Card className="li4">
            <CardImg style={{ width:1900,height:270}} src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-orange-web-solid-color-background.jpg" alt="Card image" />
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

export default Hip;
