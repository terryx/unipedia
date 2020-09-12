import Link from 'next/link'

export default function Custom404() {
    return <div>
        <h1>404 - Student are you lost ?</h1>
        <p>Let's go <Link href="/"><a>back</a></Link></p>
    </div>
}