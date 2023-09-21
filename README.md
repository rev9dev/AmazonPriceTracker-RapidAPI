# AmazonPriceTracker-RapidAPI
Amazon Price Tracker for Google Sheet using RapidAPI


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
Copy the code and run using Google App Script. 

## Want to Automate the price update? Add a trigger
1. Open your Google Apps Script project (the script editor) where you have your fetchAmazonProductPrices function.
2. In the script editor, click on the clock icon (Triggers) on the left-hand sidebar. This will open the "Triggers" panel.
3. In the "Triggers" panel, click the "+ Add Trigger" button.
4. Configure the trigger settings as follows:

- Function to run: `fetchAmazonProductPrices` (or the name of your function).
- Deployment: Head (if not already selected).
- Event Source: Time-driven.
- Type of Time-based Trigger: Week timer.
- Day timer to run: Select the day of the week you want the script to run.
- Time of day: Specify the time you want the script to run (in your timezone).
- Click the "Save" button to create the trigger.

Now, your fetchAmazonProductPrices function will run automatically every week at the specified day and time. Make sure your Google Sheet is saved and accessible when the trigger runs.

