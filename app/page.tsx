import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='border-b w-full bg-white'>
        <div className='flex h-16 items-center justify-between px-4'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold'>Your App</span>
          </Link>
          <nav className='flex items-center gap-4'>
            <Link href='/dashboard'>
              <Button variant='ghost'>Dashboard</Button>
            </Link>
            <Link href='/login'>
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex-1'>
        <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 flex flex-col items-center justify-center'>
          <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
            <h1 className='text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
              Your SaaS Application
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              Powerful, modern and intuitive SaaS platform for your business
              needs. Get started today and transform your workflow.
            </p>
            <div className='space-x-4'>
              <Link href='/dashboard'>
                <Button size='lg'>Get Started</Button>
              </Link>
              <Link href='/pricing'>
                <Button variant='outline' size='lg'>
                  Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 flex flex-col items-center justify-center'
        >
          <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
              Features
            </h2>
            <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
              Our platform offers powerful features to help you succeed
            </p>
          </div>
          <div className='container mx-auto grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 w-full md:max-w-[80rem] md:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className='relative overflow-hidden rounded-lg border bg-background p-2 w-full'
              >
                <div className='flex h-[180px] flex-col justify-between rounded-md p-6 w-full container'>
                  <div className='space-y-2'>
                    <h3 className='font-bold'>Feature {i + 1}</h3>
                    <p className='text-sm text-muted-foreground'>
                      Description for Feature {i + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className='border-t py-6 md:py-0 w-full bg-white flex items-center justify-center'>
        <div className='flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row'>
          <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
            <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
              Built by{' '}
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                Your Company
              </a>
              . The source code is available on{' '}
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
