import Card from '@/components/card/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <div className="grid w-full grid-cols-3 gap-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </main>
  )
}
