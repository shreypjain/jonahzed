import { useState } from "react";

type ImageBox = {
  x: number;
  y: number;
  url: string;
  hidden: boolean;
};

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const Gallery = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  // const [listOfPics, setListOfPics] = useState(
  //   [...Array(28)].map((_, i) => `../photos/photos${i+1}.jpg`)
  // );
  const [listOfPics, setListOfPics] = useState([
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891894/photos25_crvlqy.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891894/photos23_of8xyg.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891892/photos28_netp0r.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891890/photos26_c7thl8.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891889/photos19_t8harf.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891888/photos5_hhjqye.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891887/photos2_ictgr4.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891886/photos21_xgugxd.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891886/photos20_pptjqx.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891885/photos17_pdcldo.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891884/photos12_bntama.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891881/photos1_xmxt9e.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891881/photos6_vhgykx.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891881/photos4_nqm99n.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891880/photos10_dvxmsg.jpg",
    "https://res.cloudinary.com/jonah-zed/image/upload/v1659891878/photos9_f6dfkn.jpg",
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
      className="flex flex-col w-screen h-screen opacity-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("https://i1.sndcdn.com/artworks-DzrRexd8mxhBE4cs-qQWlhw-t500x500.jpg")`,
      }}
      onClick={() => {
        const poppedPic = listOfPics.shift();
        if (poppedPic === undefined) {
          return;
        }
        setListOfPics(listOfPics);

        setMappedPics([
          ...mappedPics,
          {
            x: globalCoords.x,
            y: globalCoords.y,
            url: poppedPic!!,
            hidden: false,
          },
        ]);
      }}
    >
      <div className="flex flex-col text-white text-sm font-light items-center justify-center h-screen">
        <h2 className="text-3xl font-extralight">The Gallery</h2>
        <h3>Click anywhere to begin...</h3>
      </div>
      {mappedPics?.map((elem: ImageBox, idx) => {
        return (
          <div
            style={{
              position: "absolute",
              top: `${elem.y}px`,
              left: `${elem.x}px`,
              maxWidth: "20vw",
              maxHeight: "20vh",
              display: elem.hidden ? "none" : "",
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
        );
      })}
    </div>
  );
};
