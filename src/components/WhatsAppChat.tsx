"use client";

import { useRef } from "react";

export default function WhatsAppChat() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Replace with your business WhatsApp number.
  // Use country code + number, without "+" or spaces.
  const phoneNumber = "6584171005";

  const message = encodeURIComponent(
    "Hello Safe Home Services, I need help with a plumbing issue."
  );

  return (
    <>
      <button
        type="button"
        className="wa-floating-button"
        aria-label="Open WhatsApp chat"
        aria-haspopup="dialog"
        aria-controls="whatsapp-chat-dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <WhatsAppIcon />
      </button>

      <dialog
        ref={dialogRef}
        id="whatsapp-chat-dialog"
        className="wa-dialog"
        aria-labelledby="whatsapp-chat-title"
        onClick={(event) => {
          // Close when the shaded area outside the dialog is clicked.
          const bounds = event.currentTarget.getBoundingClientRect();

          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            event.currentTarget.close();
          }
        }}
      >
        <header className="wa-chat-header">
          <div className="wa-chat-heading">
            <WhatsAppIcon />

            <div>
              <h2 id="whatsapp-chat-title">WhatsApp</h2>
              <p>Safe Home Services</p>
            </div>
          </div>

          <button
            type="button"
            className="wa-close-button"
            aria-label="Close WhatsApp chat"
            autoFocus
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </header>

        <div className="wa-chat-body">
          <div className="wa-message">
            <span className="wa-message-name">
              Safe Home Services
            </span>

            <p>
              Hello 👋
              <br />
              Can we help you?
            </p>
          </div>

          <a
            className="wa-open-chat"
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>Open chat</span>
            <span aria-hidden="true">↗</span>
          </a>

          <p className="wa-chat-note">
            Opens WhatsApp. Press Send there to send your message.
          </p>
        </div>
      </dialog>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.08 24l6.34-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.77a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.89-9.87a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61l.45-.52c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}