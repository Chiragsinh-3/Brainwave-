import React, { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const [alerts, setAlerts] = useState([]);

  const removeAlert = (id) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === id ? { ...alert, show: false } : alert))
    );

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 3000);
  };

  const addAlert = (type, message, description) => {
    const newAlert = {
      id: Date.now(),
      type,
      message,
      description,
      show: true,
    };

    // Check if an alert with the same properties already exists
    const exists = alerts.some(
      (alert) =>
        alert.type === newAlert.type &&
        alert.message === newAlert.message &&
        alert.description === newAlert.description
    );

    if (!exists) {
      setAlerts((prev) => [...prev, newAlert]);
      requestAnimationFrame(() => {
        setAlerts((prev) =>
          prev.map((alert) =>
            alert.id === newAlert.id ? { ...alert, show: true } : alert
          )
        );
      });
    }
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
