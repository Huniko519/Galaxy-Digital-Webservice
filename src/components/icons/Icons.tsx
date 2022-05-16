import React from "react";

interface IconProps {
  size: number;
}

export const Phone = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color="#24754e"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {" "}
      <path
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      ></path>{" "}
    </svg>
  );
};

export const Mail = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color="#24754e"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {" "}
      <path
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      ></path>{" "}
    </svg>
  );
};
export const Address = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color="#24754e"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {" "}
      <path
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      ></path>{" "}
      <path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>{" "}
    </svg>
  );
};
export const Apartment = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color="#24754e"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {" "}
      <path
        strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      ></path>{" "}
    </svg>
  );
};
