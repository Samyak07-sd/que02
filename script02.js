function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // Create a map of plain text words to their positions in the HTML content.
    const plainTextWordPositions = new Map();
    for (const plainTextPosition of plainTextPositions) {
      const start = plainText.indexOf(plainTextPosition.start, plainTextPosition.end);
      const end = plainText.indexOf(plainTextPosition.end, start + 1);
      plainTextWordPositions.set(plainText.substring(start, end), start);
    }
  
    // Create a new HTML content with the highlighted words.
    const highlightedHTMLContent = htmlContent.replace(/(.*?)(\b|\W)(\w+)(\b|\W)/g, (match, before, separator, word) => {
      const position = plainTextWordPositions.get(word);
      if (position !== undefined) {
        return before + separator + '<mark>' + word + '</mark>';
      } else {
        return match;
      }
    });
  
    return highlightedHTMLContent;
  }
  