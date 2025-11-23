import * as S from "./SongElement.styles";

interface SongElementProps {
  imgSrc: string;
  songTitle: string;
  artist: string;
  onDelete: () => void;
  onDrag: () => void;
  showActions?: boolean;
}

const SongElement = ({
  imgSrc,
  songTitle,
  artist,
  onDelete,
  showActions = false,
}: SongElementProps) => {
  return (
    <S.Wrapper>
      <S.Cover src={imgSrc} alt="곡 앨범 커버" />

      <S.Content>
        <S.Info>
          <S.Title>{songTitle}</S.Title>
          <S.Artist>{artist}</S.Artist>
        </S.Info>

        {showActions && (
          <S.Actions>
            {/* biome-ignore lint/a11y/useValidAriaRole : none*/}
            <S.DragHandle role="handle">
              <S.Icon className="material-symbols-outlined">drag_handle</S.Icon>
            </S.DragHandle>

            <button type="button" onClick={onDelete}>
              <S.Icon className="material-symbols-outlined">delete</S.Icon>
            </button>
          </S.Actions>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default SongElement;
