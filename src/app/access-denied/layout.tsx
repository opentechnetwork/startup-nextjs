import React from "react";

export default function AccessDeniedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <title>Access Denied</title>
    </head>
    <body style={{ margin: 0, padding: 0 }}>
    {children} {/* This renders the content of `page.tsx` */}
    </body>
    </html>
  );
}


