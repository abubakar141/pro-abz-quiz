"use client";
import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  
  return (
    <main>
          <div>
          <Link
         href={"/"}
            className="flex gap-1 items-center text-2xl"
          >
            <h1 className="text-dark font-bold m-14 text">
              ABZ <span className='ml-11'> </span> 
              <span>
               
              </span>
            </h1>
            </Link>
            </div>
            
      <center>
 <br /> <br />
      <div className='container'>
        <h1 className='font-bold'>ABZ <span className='quiz font-black text-blue-800'>Quiz</span>
        
        <br />
        </h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
       
      </div>
      <p className='font-black text-blue-300 text-1xl'><ClerkProvider>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
          </ClerkProvider>
          </p>
      </center>
    </main>
  );
}
