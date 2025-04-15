


export default function authLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="">
            <div>Login now to get 20% off</div>
          {children}
        </body>
      </html>
    );
  }
  
  