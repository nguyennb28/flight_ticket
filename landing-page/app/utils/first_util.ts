export function formatDateTimeVNwithTimeStamp(value: string) {
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

export function formatDateTimeUTC(value: string) {
  const date_obj = new Date(value);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("vi-VN", options);
  return formatter.format(date_obj);
}
