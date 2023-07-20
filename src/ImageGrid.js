import "./ImageGrid.css";

const ImageGrid = () => {
  const grids = [
    {
      url: "http://localhost:3000/Grid/grid1.jpg",
      title: "This is the text supposed to appear on the grid",
      className: "grid-container-col-2 grid-container-row-2 text-5xl",
      color: "white",
    },
    {
      url: "http://localhost:3000/Grid/grid2.png",
      title: "This is the text supposed to appear on the grid",
      color: "black",
    },
    {
      url: "http://localhost:3000/Grid/grid3.jpg",
      title: "This is the text supposed to appear on the grid",
      color: "white",
    },
    {
      url: "http://localhost:3000/Grid/grid4.png",
      title: "This is the text supposed to appear on the grid",
      color: "white",
    },
    {
      url: "http://localhost:3000/Grid/grid5.png",
      title: "This is the text supposed to appear on the grid",
      color: "white",
    },
  ];

  return (
    <div className="grid-container">
      {grids.map((grid, index) => (
        <div key={index} className={`grid-item ${grid.className}`}>
          <img src={grid.url} alt={grid.title} />
          <h2
            className="image-title font-bold text-sm"
            style={{ color: grid.color }}
          >
            {grid.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
