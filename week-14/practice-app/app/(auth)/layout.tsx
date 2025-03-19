


export default function authLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="">
            <div>This is the auth layout component....</div>
          {children}
        </body>
      </html>
    );
  }
  