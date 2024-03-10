import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { useCreateReviewsMutation } from "../../store/slices/reviews-slice";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import { Button, Form, ListGroup } from "react-bootstrap";
import Rating from '../product/Rating.js'

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  const { userInfo } = useSelector(state => state.auth);
  console.log(userInfo?.data?.auth?._id)
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [createReviews] = useCreateReviewsMutation();
  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await createReviews({ review, rating, product: id, user: userInfo?.data?.auth?._id }).unwrap();

      cogoToast.success('Review Submitted')
      setReview('');
      setRating(0);

    } catch (err) {
      console.log(err?.data?.message || err?.message);

    }
  }
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const { data } = await axios.get(BASE_URL + `/review?product=${id}`)
    setReviews(data?.data)
    console.log(data?.data)
  }

  useEffect(() => {
    getReviews()
  }, [review , id])




  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productReviews">
            <Nav variant="pills" className="description-review-topbar">
              {/* <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item> */}

              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <ListGroup variant='flush'>
                  {reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.user.email}</strong>
                      <Rating value={review.rating} />
                      {/* <p>{review.createdAt.substring(0, 10)}</p> */}
                      <p>{review.review}</p>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item>
                    <h2>Write Review</h2>

                    {/* {loadingProductReview && <Loader />} */}

                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group className='my-2' controlId='rating'>
                          <Form.Label>Rating</Form.Label>
                          <Form.Control style={{ width: "8vw" }}
                            as='select'
                            required
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value=''>Select...</option>
                            <option value='1'>1 - Poor</option>
                            <option value='2'>2 - Fair</option>
                            <option value='3'>3 - Good</option>
                            <option value='4'>4 - Very Good</option>
                            <option value='5'>5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control style={{ width: "20vw", height: "20vh" }}
                            as='textarea'
                            row='3'
                            required
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <Button

                          // disabled={loadingProductReview}
                          type='submit'
                          variant='warning'
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <h4>
                        Please <Link to='/login-register' style={{ color: "goldenrod" }}>sign in</Link> to write a review
                      </h4>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
