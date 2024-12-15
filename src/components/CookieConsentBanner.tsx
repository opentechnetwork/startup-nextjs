// components/CookieConsentBanner.tsx
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={() => {
        console.log("Cookies accepted!");
        // Set your tracking cookies or enable analytics here
      }}
      onDecline={() => {
        console.log("Cookies declined!");
        // Ensure no cookies are set
      }}
      cookieName="userCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{
        background: "#4CAF50",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "#f44336",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
      }}
    >
      This website uses cookies to improve your experience. Read our{" "}
      <a href="/policies/cookie" style={{ color: "#FFF", textDecoration: "underline" }}>
        Cookie Policy
      </a>.
    </CookieConsent>
  );
}
