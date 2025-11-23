interface SongElementProps {
  imgSrc: string;
  songTitle: string;
  artist: string;
  onDelete: () => void;
  onDrag: () => void;
}

const SongElement = ({ imgSrc, songTitle, artist, onDelete, onDrag }: SongElementProps) => {
  return (
    <article className="flex justify-center items-center rounded-lg background overflow-hidden">
      <img className="w-[80px] h-[80px] aspec-[1/1]" alt="곡 앨범 커버" src={imgSrc} />

      {/** 곡 정보 섹션 */}
      <div className="flex flex-1 w-full p-3">
        <div className="flex flex-col flex-1 h-full justify-between">
          <h3 className="typo-body1 text-primary">{songTitle}</h3>
          <p className="typo-body2 text-secondary">{artist}</p>
        </div>

        {/** 드래그 및 삭제 버튼 섹션 */}
        <div className="flex flex-col h-full justify-between">
          {/**biome-ignore  lint/a11y/useValidAriaRole: drag 이벤트를 위한 시멘틱 태그가 존재하지 않음*/}
          <div role="handle" className="drag-handle cursor-pointer active:cursor-grabbing">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              drag_handle
            </span>
          </div>
          <button type="button" onClick={onDelete}>
            <span className="material-symbols-outlined text-secondary text-[20px]">delete</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SongElement;
