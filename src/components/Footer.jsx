import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 dark:bg-slate-900 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025{" "}
          <span className="font-semibold text-blue-800 dark:text-blue-300">
            StockGuard
          </span>
          . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
