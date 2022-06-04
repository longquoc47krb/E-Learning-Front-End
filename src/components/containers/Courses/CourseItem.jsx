import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from "reactstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";
import style from "./CourseItem.module.scss";
import * as SC from "../styledComponents";
import { Loading } from "./../../presentational";
import { Rating } from "@mui/material";
function CourseItem({ img, title, author, rating, price }) {
  return (
    <div>
      <Card className="card">
        <CardImg top width="100%" src={img} />
        <CardBody>
          <CardTitle>
            <SC.Typo transform="capitalize">{title}</SC.Typo>
          </CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
          <Rating size="small" value={rating} precision={0.5} readOnly />
          <SC.Typo transform="capitalize">{price}</SC.Typo>
        </CardBody>
      </Card>
    </div>
  );
}
CourseItem.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};
Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string,
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};
CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};
export default CourseItem;
