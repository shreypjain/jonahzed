import { useState } from "react";

type ImageBox = {
  x: number;
  y: number;
  url: string;
  hidden: boolean;
};

export const Gallery = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const [listOfPics, setListOfPics] = useState([
    `https://uploads-ssl.webflow.com/600764b039279f159ae570ef/61a509f11a36c5e5e09bc6be_jonah-zed-interview-sheesh-media.jpg`,
    `https://i.ytimg.com/vi/EVDg3jVDHec/maxresdefault.jpg`,
    `https://igrw.files.wordpress.com/2021/08/img_1107-1.jpg`,
    `https://i1.sndcdn.com/artworks-xSNwt9QKjlalm0cC-pzwzeA-t500x500.jpg`,
    `https://i.ytimg.com/vi/bZV5RdjkCKM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAmY6mpa9PFZqpYZcfdbLy4gcyvNw`,
    `https://i0.wp.com/acidstag.com/wp-content/uploads/2021/09/jonah-zed-acid-stag.jpg`,
    `https://thematic-prod-users.s3.us-west-2.amazonaws.com/o/695357e6deae9af8867e60d3d83249a3/97229786-acbe-407f-9004-7200a6356fd5-t.jpeg`,
  ]);

  const [mappedPics, setMappedPics] = useState<ImageBox[]>([]);

  const handleMouseMove = (event: any) => {
    setGlobalCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen opacity-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("https://i1.sndcdn.com/artworks-DzrRexd8mxhBE4cs-qQWlhw-t500x500.jpg")`,
      }}
      onClick={() => {
        const poppedPic = listOfPics.shift()
        if (poppedPic === undefined) {
            return
        }
        setListOfPics(listOfPics)

        setMappedPics([
          ...mappedPics,
          { x: globalCoords.x, y: globalCoords.y, url: poppedPic!!, hidden: false},
        ]);
      }}
    >
      {mappedPics?.map((elem: ImageBox, idx) => (
        <div
          style={{
            position: "absolute",
            top: `${elem.y}px`,
            left: `${elem.x}px`,
            maxWidth: "20vw",
            maxHeight: "20vh",
            display: elem.hidden ? "none" : ""
          }}
          key={idx}
        >
          <div className="flex flex-col outline outline-4 outline-orange-900">
            {/* <div
              className="flex p-1 justify-end items-end w-full h-18 bg-orange-900 hover:cursor-pointer"
              onClick={() => {
                  mappedPics[idx]["hidden"] = true
                  setMappedPics(mappedPics)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </div> */}
            <div>
              <img src={elem.url} alt="there should be a little pic here" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
