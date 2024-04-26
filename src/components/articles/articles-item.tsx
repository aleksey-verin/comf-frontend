import './articles-item.scss'

const ArticlesItem = ({
  title,
  description,
  slug,
  image,
  imageTablet,
  imageMobile,
  twoColumns,
}: {
  title: string
  description: string
  slug: string
  image: string
  imageTablet: string
  imageMobile: string
  twoColumns?: boolean
}) => {
  return (
    <li className={`articles-grid__item articles-grid__item--${twoColumns ? 'two' : 'one'}-column`}>
      <div className='articles-grid__wrap'>
        <div className='articles-grid__image'>
          <picture>
            <source media='(max-width: 767px)' srcSet={`${process.env.NEXT_PUBLIC_BASE_URL}${imageMobile}`} />
            <source media='(max-width: 1279px)' srcSet={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTablet}`} />
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`} alt={title} />
          </picture>
        </div>
        <div className='articles-grid__text'>
          <h3 className='articles-grid__title'>{title}</h3>
          <div className='articles-grid__description'>
            {description}
          </div>
        </div>
        <a href={`/articles/${slug}`} className='button articles-grid__button'>
          Узнать больше
        </a>
      </div>
    </li>
  )
}

export default ArticlesItem
