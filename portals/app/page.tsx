import './globals.css'
import Image from 'next/image'
import itLogo from '../public/images/1hwqxknj.bmp'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaClipboardUser, FaPerson, FaMailchimp } from "react-icons/fa6";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <br />
      <br />
      <Image
        src={itLogo}
        width={100}
        height={100}
        alt="Picture of the author"
        className="rounded-lg mx-auto"
      />


      <div className="flex justify-center items-center my-20">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Choose your login option</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center items-center">
            <Link href="/customer">
            <Button className="flex items-center max-w-xs w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6">
              <FaPerson className="mr-4 h-6 w-6" /> Customer Log-in
            </Button>
            </Link>
            <Link href="/supplier">
            <Button className="flex items-center max-w-xs w-full py-4 px-6">
              <FaClipboardUser className="mr-4 h-6 w-6" /> Supplier Log-in
            </Button>
            </Link>
            <Link href="/employee">
            <Button className="flex items-center max-w-xs w-full py-4 px-6">
              <FaMailchimp className="mr-4 h-6 w-6" /> Employee Log-in
            </Button>
            </Link>
          </CardContent>
        </Card>
      </div>


    </>
  )
}
