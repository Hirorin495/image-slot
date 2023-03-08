import Slot from "../components/slot";

const TOP_IMAGES = [
  '/red.png',
  '/blue.png',
  '/green.png'
];
const MIDDLE_IMAGES = [
  '/blue.png',
  '/green.png',
  '/red.png'
];
const BOTTOM_IMAGES = [
  '/green.png',
  '/red.png',
  '/blue.png'
];

function Home() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>img-slot</h1> <a href='/'>reload</a>
      <Slot images={TOP_IMAGES}></Slot>
      <Slot images={MIDDLE_IMAGES}></Slot>
      <Slot images={BOTTOM_IMAGES}></Slot>
    </div>
  )
}

export default Home;
