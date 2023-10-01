import '../../globals.css'
import Link from 'next/link'
import axios from "axios"
import SignUpForm from '@/components/supplier/SignUpForm'

export default function Home() {
    return (
        <>
           <SignUpForm />
        </>
    )
}
