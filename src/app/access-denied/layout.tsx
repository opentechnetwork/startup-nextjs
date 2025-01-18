

export default function AccessDeniedLayout() {
  return (
    <html lang="en">
    <head>
      <title>Access Denied</title>
    </head>
    <body style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#dc3545' }}>Access Denied</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#6c757d' }}>
        Sorry, access to this content is restricted in your location. If you believe this is an error, please contact support.
      </p>
    </div>
    </body>
    </html>
  );
}

