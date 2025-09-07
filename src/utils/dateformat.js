export default function dateFormat(date) {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } else {
    return "Invalid Date";
  }
}