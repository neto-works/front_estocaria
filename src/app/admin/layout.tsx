export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className="w-full h-full py-4">
            {children}
        </div>
    );
}
