import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function checkForUser() {
  const userCookie = Cookies.get("user");
  const isValidCookie = (userCookie != "undefined" && userCookie != undefined)
  if (isValidCookie) return JSON.parse(userCookie);
  return {}
}