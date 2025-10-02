export function formatDateTimeVN(value: string) {
  const date = new Date(Number(value) * 1000);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
  };

  return date.toLocaleString("vi-VN", options);
}
