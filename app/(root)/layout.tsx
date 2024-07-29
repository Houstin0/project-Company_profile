import NavBar from "@/components/navBar"
import Footer from "@/components/footer"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex h-screen flex-col">
        <NavBar/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </div>
    )
  }