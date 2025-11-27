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
      <S.Cover src={imgSrc} alt="앨범 커버" />

      <S.Content>
        <S.Info tabIndex={0} role="group" aria-label={`곡명 ${songTitle} 아티스트명 ${artist}`}>
          <S.Title aria-hidden={true}>{songTitle}</S.Title>
          <S.Artist aria-hidden={true}>{artist}</S.Artist>
        </S.Info>

        {showActions && (
          <S.Actions>
            <S.DragHandle aria-label="드래그하여 이동시키기">
              <S.Icon className="material-symbols-outlined">drag_handle</S.Icon>
            </S.DragHandle>

            <button type="button" aria-label="삭제" onClick={onDelete}>
              <S.Icon className="material-symbols-outlined">delete</S.Icon>
            </button>
          </S.Actions>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default SongElement;
