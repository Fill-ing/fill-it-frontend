import { ThemeProvider } from "@emotion/react";
import SwiperAction from "./components/ui/swiperAction/SwiperAction";
import SongElement from "./components/ui/domain/SongElement";
import GlobalStyle from "./styles/globals/globalStyle";
import theme from "./styles/globals/theme";

const App = () => {
  const mockSongs = [
    {
      imgSrc: "https://picsum.photos/seed/song1/200",
      songTitle: "Midnight Breezekuhㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
      artist: "Luna Park",
      onDelete: () => console.log("delete song 1"),
      onDrag: () => console.log("drag song 1"),
      showActions: false,
    },
    {
      imgSrc: "https://picsum.photos/seed/song2/200",
      songTitle: "Fading Echo",
      artist: "Noon Mirage",
      onDelete: () => console.log("delete song 2"),
      onDrag: () => console.log("drag song 2"),
      showActions: false,
    },
    {
      imgSrc: "https://picsum.photos/seed/song3/200",
      songTitle: "Lost Signal",
      artist: "Analog Kids",
      onDelete: () => console.log("delete song 3"),
      onDrag: () => console.log("drag song 3"),
      showActions: false,
    },
    {
      imgSrc: "https://picsum.photos/seed/song4/200",
      songTitle: "Electric Dawn",
      artist: "Pulsecraft",
      onDelete: () => console.log("delete song 4"),
      onDrag: () => console.log("drag song 4"),
      showActions: false,
    },
    {
      imgSrc: "https://picsum.photos/seed/song5/200",
      songTitle: "Glass Ocean",
      artist: "Eden Shore",
      onDelete: () => console.log("delete song 5"),
      onDrag: () => console.log("drag song 5"),
      showActions: false,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SwiperAction
        sidePeekRatio={0.02}
        swiperElement={mockSongs.map((song) => <SongElement key={song.artist} {...song} />)}
      />
    </ThemeProvider>
  );
};

export default App;
