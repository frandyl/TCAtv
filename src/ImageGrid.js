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
      url: "https://editorial.uefa.com/resources/0294-1c8b2f7e5805-9566a8592655-1000/format/wide1/ucl_24x27_-_label_frame_-_email_1_.jpeg?imwidth=2048",
      title: "In the Zone: How Leverkusen's patient game overcame Inter",
      color: "white",
    },
    {
      url: "https://3news.com/wp-content/uploads/2020/10/lydia-forson.jpg",
      title: "Electorates no longer vote base on tribal lines or party loyalty – Lydia Forson",
      color: "white",
    },
    {
      url: "https://3news.com/wp-content/uploads/2023/11/Kidney-dialysis.jpg",
      title: "40 health facilities ready to implement Free Dialysis policy on December 1 – NHIA CEO",
      color: "white",
    },
    {
      url: "https://3news.com/wp-content/uploads/2024/09/Ghana-cedi-notes.webp",
      title: "Cedi sells at 14.9275 to a Dollar, buys at 14.9125 per BoG rate on Thursday",
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
