export default function sortProductsByDate(data: Array<Product>) {
  return data.sort((a: Product, b: Product) => {
    const aStartDate = getStartDate(a.time);
    const bStartDate = getStartDate(b.time);
    const aEndDate = getEndDate(a.time);
    const bEndDate = getEndDate(b.time);

    // sort by end date descending first, then start date descending
    if (aEndDate < bEndDate) {
      return 1;
    } else if (aEndDate > bEndDate) {
      return -1;
    } else if (aStartDate < bStartDate) {
      return 1;
    } else if (aStartDate > bStartDate) {
      return -1;
    } else {
      return 0;
    }
  });
}

function getStartDate(dateString: string): Date {
  // Parse the start date from a string like "Aug 2023" or "Aug 2023 - Sep 2024"
  const startDateString = dateString.split(" - ")[0]; // Take the first date range
  const [month, year] = startDateString.split(" "); // Split into month and year

  // Create date object, assuming the day as 1
  return new Date(`${month} 1, ${year}`); // Return Date object
}

function getEndDate(dateString: string): Date {
  // Parse the end date from a string like "Aug 2023" or "Aug 2023 - Sep 2024" or "Aug 2023 - Present"
  if (dateString.split(" - ").length === 1) {
    // If there is only one date, return the same date
    return getStartDate(dateString);
  } else if (dateString.split(" - ")[1] !== "Present") {
    // If there are two dates and the second date is "Present", return today's date
    return new Date();
  }

  // If there are two dates and the second date is not "Present", return the second date
  const endDateString = dateString.split(" - ")[1]; // Take the second date range
  const [month, year] = endDateString.split(" "); // Split into month and year

  // Create date object, assuming the day as 1
  return new Date(`${month} 1, ${year}`); // Return Date object
}
