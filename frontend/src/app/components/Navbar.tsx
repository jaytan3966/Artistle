"use client"
import Link from "next/link"
export default function NavBar(){

    return  (

        <div className="grid grid-cols-3 text-center font-bold text-3xl m-4 duration-500">
            <Link href="/faq" className="flex justify-end hover:cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path transform="translate(4, 4)" fill="white" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                </svg>
            </Link>

            <Link href="/">ARTISTLE</Link>

            <Link href="/stats" className="hover:cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path transform="translate(4, 4)" fill="white" d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
                </svg>
            </Link>
        </div>
    )
}