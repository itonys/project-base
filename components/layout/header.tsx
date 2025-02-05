'use client'

import { IBaseProps } from '@/types'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface IHeaderProps extends IBaseProps {
  onMenuClick?: () => void
}

export function Header({ className, onMenuClick }: IHeaderProps) {
  return (
    <header
      className={cn(
        'w-full border-b bg-background fixed top-0 z-50',
        className
      )}
    >
      <div className='flex h-16 items-center justify-between pl-4 pr-10'>
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={onMenuClick}
          >
            <Menu className='h-5 w-5' />
          </Button>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold'>Your App</span>
          </Link>
        </div>
        <nav className='hidden md:flex md:items-center md:gap-6'>
          <Link href='/dashboard' className='text-sm font-medium'>
            Dashboard
          </Link>
          <Link href='/settings' className='text-sm font-medium'>
            Settings
          </Link>
        </nav>
      </div>
    </header>
  )
}
