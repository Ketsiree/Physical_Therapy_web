import 'bootstrap/dist/css/bootstrap.min.css';
import './Arms.css';
import { Card,CardText,CardImgOverlay,CardTitle,CardImg,Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import ArmForm from './ArmForm';


function Arms() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [show1, setShow1] = useState(false);
        const handleClose1 = () => setShow1(false);
        const handleShow1 = () => setShow1(true);
        const [show2, setShow2] = useState(false);
        const handleClose2 = () => setShow2(false);
        const handleShow2 = () => setShow2(true);
        const [show3, setShow3] = useState(false);
        const handleClose3 = () => setShow3(false);
        const handleShow3 = () => setShow3(true);
        const [show4, setShow4] = useState(false);
        const handleClose4 = () => setShow4(false);
        const handleShow4 = () => setShow4(true);
        const [show5, setShow5] = useState(false);
        const handleClose5 = () => setShow5(false);
        const handleShow5 = () => setShow5(true);
        const [show6, setShow6] = useState(false);
        const handleClose6 = () => setShow6(false);
        const handleShow6 = () => setShow6(true);

        
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
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%9E%E0%B8%A0%E0%B8%B2%E0%B8%9E1.jpg" style={{  width: 405, height: 250}} />
            <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 1 ยกแขนขึ้น-ลง</h5></CardTitle>
            <Button variant="primary" onClick={handleShow}>
                Click for watch video
            </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 1 ยกแขนขึ้น-ลง</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="760" height="550" src="https://www.youtube.com/embed/ASV8Y-5Fwv4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#bcf8cf" }}>
       <CardImg top width="100%" src="https://farm1.staticflickr.com/886/41172418821_5c6c42d69c_c.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 2 กางหุบแขน</h5></CardTitle>
       <Button variant="primary" onClick={handleShow1} >
       Click for watch video
        </Button>
       <Modal show={show1} onHide={handleClose1} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 2 กางหุบแขน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/1E1Y_u0vVD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
      </div>

      <div className="myS">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffd6da" }}>
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E-3.jpg" style={{  width: 405, height: 250}} />
            <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 3 หมุนข้อไหล่ เข้า-ออก</h5></CardTitle>
            <Button variant="primary" onClick={handleShow2}>
                Click for watch video
            </Button>
      <Modal show={show2} onHide={handleClose2} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 3 หมุนข้อไหล่ เข้า-ออก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="760" height="550" src="https://www.youtube.com/embed/jfrSk89jk3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffb384" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E4.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 4 งอ-เหยียดข้อศอก</h5></CardTitle>
       <Button variant="primary" onClick={handleShow3} >
       Click for watch video
        </Button>
       <Modal show={show3} onHide={handleClose3} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 4 งอ-เหยียดข้อศอก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/uRgV11hv8Ak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
      </div>

      <div className="myS">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#b6e3e9" }}>
        <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E5.jpg" style={{  width: 405, height: 250}} />
            <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 5 กระดกข้อมือขึ้น-ลง / ซ้าย-ขวา</h5></CardTitle>
            <Button variant="primary" onClick={handleShow4}>
                Click for watch video
            </Button>
      <Modal show={show4} onHide={handleClose4} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 5 กระดกข้อมือขึ้น-ลง / ซ้าย-ขวา</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="760" height="550" src="https://www.youtube.com/embed/8nqAa9fKRmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>

       <Card style={{ margin: 20, padding: 20,backgroundColor:"#cdb9d6" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E6.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 6 งอข้อนิ้วมือ</h5></CardTitle>
       <Button variant="primary" onClick={handleShow5} >
       Click for watch video
        </Button>
       <Modal show={show5} onHide={handleClose5} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 6 งอข้อนิ้วมือ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/R0TMRdHlKKM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>

    <Card style={{ margin: 20, padding: 20,backgroundColor:"#f7af9f" }}>
       <CardImg top width="100%" src="https://www.ocare.co.th/blog/wp-content/uploads/2019/04/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E7.jpg" style={{  width: 405, height: 250 }} />
       <br />
            <CardTitle><h5>ท่ากายภาพท่าที่ 7 กางนิ้วมือ</h5></CardTitle>
       <Button variant="primary" onClick={handleShow6} >
       Click for watch video
        </Button>
       <Modal show={show6} onHide={handleClose6} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title>ท่ากายภาพท่าที่ 7 กางนิ้วมือ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="760" height="550" src="https://www.youtube.com/embed/0NJ6R93liY8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
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
            <Card className="li1">
            <CardImg style={{ width:1900,height:270}} src="https://wallpaperboat.com/wp-content/uploads/2020/04/pastel-pink-wallpaper-image.jpg" alt="Card image" />
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

export default Arms;