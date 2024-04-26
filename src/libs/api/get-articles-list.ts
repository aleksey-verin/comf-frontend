import { ArticleListData } from './types'

export async function getArticlesList() {
  try {
    const reqUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles?populate[0]=preview_picture_desktop&populate[1]=preview_picture_tablet&populate[2]=preview_picture_mobile`
    const headersList = {
      Authorization: `bearer ${process.env.TOKEN}`,
    }
    // await new Promise(resolve => setTimeout(resolve, 2000)) // Задержка
    const request = await fetch(reqUrl, {
      method: 'GET',
      headers: headersList,
      next: { revalidate: 60 },
      // cache: 'no-store',
    })
    if (!request.ok) {
      throw new Error('Failed to fetch articles')
    }
    const articles = (await request.json()) as ArticleListData
    return articles
  } catch (error) {
    console.log(error)
    return undefined
  }
}