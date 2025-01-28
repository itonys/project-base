'use client';

import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { useState } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='relative flex min-h-screen flex-col h-full w-full overflow-hidden'>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className='flex-1 md:pl-64 mt-[64px]'>
        <div className='container p-4 md:p-6'>{children}</div>
      </div>
    </div>
  );
}
