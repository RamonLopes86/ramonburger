import "./globals.css";





export const metadata = {
  
  title: "Ramon Burger",
  description: "Hamburgeria Ramon Burger",

  icons:{
    icon:'logosf.png'
  }


};
  
  

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        

      </body>
    </html>
  );
}
