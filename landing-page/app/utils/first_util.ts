import axios from "axios";
import axiosInstance from "~/axiosInstance";

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

export async function getIPclient() {
  localStorage.setItem("ip_addr", "");
  localStorage.setItem("user_agent", "");
  localStorage.setItem("is_access_info", "empty");
  const ip_addr = localStorage.getItem("ip_addr");
  const user_agent = localStorage.getItem("user_agent");
  const is_access_info = localStorage.getItem("is_access_info");
  if (!ip_addr && !user_agent && is_access_info == "empty") {
    try {
      localStorage.setItem("is_access_info", "empty");
      const first_response = await axios.get(
        "https://api.ipify.org?format=json"
      );
      if (first_response.status == 200) {
        const { ip } = first_response.data;
        const userAgentString = navigator.userAgent;
        localStorage.setItem("ip_addr", ip);
        localStorage.setItem("user_agent", userAgentString);

        collectAccessInfor(ip, userAgentString, is_access_info);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      localStorage.setItem("is_access_info", "not_empty");
    }
  } else {
    localStorage.setItem("is_access_info", "not_empty");
  }
}

export async function collectAccessInfor(
  ip_addr: string,
  user_agent: string,
  ip_access_info: string
) {
  if (
    ip_addr.length > 0 &&
    user_agent.length > 0 &&
    ip_access_info == "empty"
  ) {
    try {
      const response = await axiosInstance.post("/access-infor/", {
        ip_addr: ip_addr,
        user_agent: user_agent,
      });
      if (response.status == 200) {
        localStorage.setItem("is_access_info", "not_empty");
      }
    } catch (err: any) {
      console.error(err);
    }
  }
  return 0;
}
