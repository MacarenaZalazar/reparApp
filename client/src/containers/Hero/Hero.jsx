import { StyledDiv, HeroDiv } from "./styledHero";
import Searchbar from "../../components/Searchbar/Searchbar";
import video from "../../utils/videos/video_hero.mp4";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <StyledDiv>
      <HeroDiv className="container">
        <Searchbar />
      </HeroDiv>
      {/* <ReactPlayer className="video" url={video} loop playing muted /> */}
    </StyledDiv>
  );
};

export default Hero;
