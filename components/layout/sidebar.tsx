'use client';

import { cn } from '@/lib/utils';
import { IBaseProps } from '@/types';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings } from 'lucide-react';

interface ISidebarProps extends IBaseProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings
  }
];

export function Sidebar({ className, isOpen, onClose }: ISidebarProps) {
  const pathname = usePathname();

  const content = (
    <div className={cn('flex h-full flex-col gap-4', className)}>
      <div className='px-4 mt-[64px]'>
        {/* <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold'>Your App</span>
        </Link> */}
      </div>
      <nav className='flex-1 space-y-1 px-2'>
        {navigation.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
              )}
            >
              <item.icon className='h-5 w-5' />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <aside className='hidden h-screen w-64 border-r md:fixed md:block'>
        {content}
      </aside>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side='left' className='w-64 p-0'>
          {content}
        </SheetContent>
      </Sheet>
    </>
  );
}
