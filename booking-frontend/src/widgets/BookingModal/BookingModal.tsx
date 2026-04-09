import React, { type ReactNode } from "react";

export default function BookingModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}): React.JSX.Element | null {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1000,
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "450px",
          maxWidth: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}