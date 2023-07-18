import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="grid-container">
      <img
        class="grid-container-col-2 grid-container-row-2 "
        src="./Grid/grid1.jpg"
      ></img>

      <img
        class="transform-0.3s hover:scale-0.9 animate-ease-in"
        src="./Grid/grid2.png"
      ></img>

      <img src="./Grid/grid3.jpg"></img>

      <img src="./Grid/grid4.png"></img>

      <img src="./Grid/grid5.png"></img>
    </div>
  );
};

export default ImageGrid;
