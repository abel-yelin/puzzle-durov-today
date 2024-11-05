// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'puzzle durov today',
  description: 'Here Is Today’s "Major" Telegram Game Puzzle Durov Combo.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          puzzle durov today
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Here Is Today’s "Major" Telegram Game Puzzle Durov Combo.</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
        Here Is Today’s "Major" Telegram Game Puzzle Durov Combo,MAJOR is now featured in Bitget Pre-Market, giving users the chance to engage in OTC token trades ahead of spot trading. This is an excellent opportunity to enhance your returns!.
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}