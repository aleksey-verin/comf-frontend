import Footer from '@/components/shared/footer/footer'
import styles from './page.module.scss'
import Header from '@/components/shared/header/header'
import Causes from '@/components/home/information/causes/causes'
import Promo from '@/components/home/promo/promo'
import Information from '@/components/home/information/information'
import Articles from '@/components/home/articles/articles'
import Questions from '@/components/home/questions/questions'
import Ticket from '@/components/home/ticket/ticket'
import Pharmacies from '@/components/home/pharmacies/pharmacies'

export default function Home() {
  return (
    <main >
      <Header />
      <Promo />
      <Information />
      <Articles />
      <Questions />
      <Ticket />
      <Pharmacies />
      <Footer />
    </main>
  )
}
