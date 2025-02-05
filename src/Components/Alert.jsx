import React, { useEffect, useContext } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alerts, removeAlert } = alertContext;

  useEffect(() => {
    const timers = alerts.map((alert) => {
      return setTimeout(() => {
        removeAlert(alert.id);
      }, 3000);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [alerts, removeAlert]);

  return (
    <div className='fixed right-5 bottom-5 z-50 flex flex-col gap-3 max-w-full sm:max-w-xs'>
      {alerts.map(
        (alert) =>
          alert.show && (
            <div
              key={alert.id} // Ensure unique key prop
              className={`
            transition-transform duration-300 ease-in-out
            ${
              alert.show
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
            ${
              alert.type === "success"
                ? "bg-green-50 border-green-500 dark:bg-green-950 dark:border-green-400"
                : "bg-red-50 border-red-500 dark:bg-red-950 dark:border-red-400"
            }
            flex w-full sm:w-80 border-l-4 p-4 shadow-lg rounded-lg
            dark:shadow-lg dark:shadow-black/10
          `}
              role='alert'
              aria-live='polite'
            >
              <div className='flex items-start w-full'>
                <div className='flex-shrink-0'>
                  {alert.type === "success" ? (
                    <CheckCircle className='h-5 w-5 text-green-500 dark:text-green-400' />
                  ) : (
                    <AlertCircle className='h-5 w-5 text-red-500 dark:text-red-400' />
                  )}
                </div>

                <div className='ml-3 w-full'>
                  <h3 className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                    {alert.message}
                  </h3>
                  <div className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
                    {alert.description}
                  </div>
                </div>

                <button
                  onClick={() => removeAlert(alert.id)}
                  className='ml-4 flex-shrink-0 inline-flex text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-400'
                  aria-label='Close alert'
                >
                  <X className='h-5 w-5' />
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Alert;
