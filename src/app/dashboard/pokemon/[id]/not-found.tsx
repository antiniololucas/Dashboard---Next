import { Sidebar } from '@/components';
import Link from 'next/link';

export default function notFoundPage() {
    return (
       
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D]  text-sm rounded rotate-12 absolute">
                    Pokemon No Encontrado
                </div>

            </main>
      
    )
}