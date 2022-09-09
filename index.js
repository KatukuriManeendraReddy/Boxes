const Box = (props) => {
  const { className, children } = props;
  return <p className={className}>{children}</p>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="inner-cont">
      <Box className="box1" children="Small" />
      <Box className="box2" children="Medium" />
      <Box className="box3" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
