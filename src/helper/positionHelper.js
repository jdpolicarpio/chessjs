function determineSquareFromFenString(fenStringPosition) {
  const fenArray = fenStringPosition.split("/");
  const resultArray = [];

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      if (isNaN(fenArray[rank][file])) {
        resultArray.push(fenArray[rank][file]);
      } else {
        resultArray.push(" ");
      }
    }
  }

  return resultArray;
}

export default determineSquareFromFenString;
