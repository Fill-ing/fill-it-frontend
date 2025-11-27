export const hexToRgba = (colorCode: string, opacity: number) => {
  const raw = colorCode.replace("#", "");
  if (raw.length !== 6) {
    throw new Error(`6자리의 색상 코드를 작성해 주세요. 허용되지 않는 colorCode: ${colorCode}`);
  }
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);

  return `rgba(${r},${g},${b}, ${opacity})`;
};
