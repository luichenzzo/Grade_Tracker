import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Notas App',
    description: 'App para guardar notas por materia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-gray-100 text-gray-900" cz-shortcut-listen="true">{children}</body>
        </html>
    )
}
//TODO: Check how neccessary is this file and if it can be removed
// RE: This file is necessary for Next.js to define the root layout of the application.
