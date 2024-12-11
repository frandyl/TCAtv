import "./ImageGrid.css";

const ImageGrid = () => {
  const grids = [
    {
      url: "https://3news.com/wp-content/uploads/2024/09/Naana-Jane.jpg",
      title: "Jane Naana Opoku-Agyemang: 4 times she broke barriers and made history",
      className: "grid-container-col-2 grid-container-row-2 text-5xl",
      color: "white",
    },
    {
      url: "https://tcatvgh-5b603.web.app/Grid/grid2.png",
      title: "This is the text supposed to appear on the grid",
      color: "black",
    },
    {
      url: "https://tcatvgh-5b603.web.app/Grid/grid3.jpg",
      title: "This is the text supposed to appear on the grid",
      color: "white",
    },
    {
      url: "https://tcatvgh-5b603.web.app/Grid/grid4.png",
      title: "This is the text supposed to appear on the grid",
      color: "white",
    },
    {
      url: "https://tcatvgh-5b603.web.app/Grid/grid5.png",
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
