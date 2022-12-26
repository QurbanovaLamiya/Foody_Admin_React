import LoadingImage from "../../../image/loading/loading.gif";

const inlineStyle = {
  position: "absolute",
  top: " 50%",
  left: "55%",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

const Loading = () => (
  <img src={LoadingImage} alt="loading...." style={inlineStyle} />
);

export default Loading;
