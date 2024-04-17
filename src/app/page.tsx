import Footer from '@/components/shared/footer/footer'
import styles from './page.module.scss'
import Header from '@/components/shared/header/header'
import Causes from '@/components/home/information/causes/causes'
import Promo from '@/components/home/promo/promo'

export default function Home() {
  return (
    <main >
      <Header />
      <Promo />
      <Causes />
      <section className={styles.promo}>
        Атопический дерматит — это аллергическое кожное заболевание, которое имеет наследственную
        предрасположенность, протекает хронически, сопровождается зудом
      </section>
      <section className={styles.app}>
        Атопический дерматит — это аллергическое кожное заболевание, которое имеет наследственную
        предрасположенность, протекает хронически, сопровождается зудом
      </section>
      <Footer />
    </main>
  )
}
