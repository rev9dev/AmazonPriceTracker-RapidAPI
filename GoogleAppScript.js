function fetchAmazonProductPrices() {
  var apiKey = 'YOUR_RAPIDAPI_KEY';
  var locale = 'COUNTRY';

  //Use Amazon Product Price Data by John Liao Link : https://rapidapi.com/JSL346/api/amazon-product-price-data

  // Get the sheet and values in columns (ASINs)
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var asinValues = sheet.getRange("CELL_VALUE" + sheet.getLastRow()).getValues(); //Replace the "CELL_VALUE".

  // Loop through each ASIN in columns
  for (var i = 0; i < asinValues.length; i++) {
    var asin = asinValues[i][0]; // Get the ASIN from the current row in column E

    // Construct the URL
    var url = 'https://amazon-product-price-data.p.rapidapi.com/product?asins=' + asin + '&locale=' + locale;

    var headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
    };

    var options = {
      'headers': headers
    };

    // Use UrlFetchApp.fetch() to make the HTTP request
    var response = UrlFetchApp.fetch(url, options);
    var content = response.getContentText();

    // Parse the response
    var data = JSON.parse(content);

    // Extract the current price from the response
    var price = "Price not found"; // Default value if price is not found
    if (data[0] && data[0].current_price) {
      price = data[0].current_price;
    }

    // Set the price in the corresponding row of column F
    // Replace the "CELL_VALUE".
    sheet.getRange("CELL_VALUE" + (i + 2)).setValue(price); // i + 2 to account for 1-based indexing and header row
  }
}
