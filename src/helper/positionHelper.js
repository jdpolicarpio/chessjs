// Returns a String array based off the FEN String
function positionArrayFromFenString(fenStringPosition) {
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

function isSquareEmpty(imageString) {
  return imageString == " " ? true : false;
}

function isLowerCase(imageString) {
  return imageString == imageString.toLowerCase() ? true : false;
}

function isString(s) {
  return typeof s == "string" ? true : false;
}

export default positionArrayFromFenString;
