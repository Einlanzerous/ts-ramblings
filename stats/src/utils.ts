export const dateStringToDate = (dateString: string): Date => {
  // Expect date as 28/08/2018 DAY/MONTH/YEAR
  const dateParts = dateString.split('/')
    .map((value: string): number => {
      return parseInt(value);
    });
  
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}