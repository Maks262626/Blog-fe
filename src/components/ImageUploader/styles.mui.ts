export const styles = {
  btn: {
    position: "relative",
    overflow: "hidden",
    "& input": {
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: 1,
      overflow: "hidden",
      position: "absolute",
      bottom: 0,
      left: 0,
      whiteSpace: "nowrap",
      width: 1,
    },
  },
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: "cover",
    border: "1px solid #ccc",
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255,0.1)",
  }
};