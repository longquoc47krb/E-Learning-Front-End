import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from "reactstrap";
import PropTypes from "prop-types";
import style from "./CategoryItem.module.scss";
import * as SC from "./../../presentational/components";
function CategoryItem({ img, title, subtitle }) {
  return (
    <div>
      <Card>
        <div className={style.card}>
          <CardImg top width="100%" src={img} className={style.cardImg} />
        </div>
        <CardBody>
          <CardTitle>
            <SC.Typo transform="capitalize">{title}</SC.Typo>
          </CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
CategoryItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
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
export default CategoryItem;
