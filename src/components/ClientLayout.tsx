"use client"; // ✅ Only this part is a Client Component

import { usePathname } from "next/navigation";
import Navigation from "../components/blog/Navigation";
import Footer from "../components/blog/Footer";
import AdminHeader from "../components/blog/AdminHeader";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isAdminPage = (pathname.startsWith("/admin") || pathname.startsWith("/signup"));

    return (
        <div>
            {isAdminPage ? <AdminHeader /> : <Navigation />}
            <main className="flex justify-center">{children}</main>
            <Footer />
        </div>
    );
};

export default ClientLayout;
