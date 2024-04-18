import { useEffect, useRef } from 'react';
import { Tabs } from '../information'
import './causes.scss'

const Causes = ({currentTab}:{currentTab: Tabs}) => {

  const tab_1_block = useRef<HTMLUListElement>(null);
  const tab_1_item_1 = useRef<HTMLLIElement>(null);
  const tab_1_item_2 = useRef<HTMLLIElement>(null);
  const tab_1_item_3 = useRef<HTMLLIElement>(null);
  const tab_1_item_4 = useRef<HTMLLIElement>(null);
  const tab_1_item_5 = useRef<HTMLLIElement>(null);

  const tab_2_block = useRef<HTMLUListElement>(null);
  const tab_2_item_1 = useRef<HTMLLIElement>(null);
  const tab_2_item_2 = useRef<HTMLLIElement>(null);
  const tab_2_item_3 = useRef<HTMLLIElement>(null);
  const tab_2_item_4 = useRef<HTMLLIElement>(null);
  const tab_2_item_5 = useRef<HTMLLIElement>(null);


  useEffect(() => {

    if (currentTab === 'tab_1') {
      tab_2_item_1.current?.classList.remove('active')
      tab_2_item_2.current?.classList.remove('active')
      tab_2_item_3.current?.classList.remove('active')
      tab_2_item_4.current?.classList.remove('active')
      tab_2_item_5.current?.classList.remove('active')
    } else {
      tab_1_item_1.current?.classList.remove('active')
      tab_1_item_2.current?.classList.remove('active')
      tab_1_item_3.current?.classList.remove('active')
      tab_1_item_4.current?.classList.remove('active')
      tab_1_item_5.current?.classList.remove('active')
    }
    
    setTimeout(() => {
      if (currentTab === 'tab_1') {
        tab_2_block.current?.classList.add('hidden')
        tab_1_block.current?.classList.remove('hidden')
        
        setTimeout(() => {
          tab_1_item_1.current?.classList.add('active')
          tab_1_item_2.current?.classList.add('active')
          tab_1_item_3.current?.classList.add('active')
          tab_1_item_4.current?.classList.add('active')
          tab_1_item_5.current?.classList.add('active')
        }, 200);
        
      } else {
        tab_1_block.current?.classList.add('hidden')
        tab_2_block.current?.classList.remove('hidden')
        
        setTimeout(() => {
          tab_2_item_1.current?.classList.add('active')
          tab_2_item_2.current?.classList.add('active')
          tab_2_item_3.current?.classList.add('active')
          tab_2_item_4.current?.classList.add('active')
          tab_2_item_5.current?.classList.add('active')
        }, 200);
      }
    }, 200);

  }, [currentTab]);

  return (
    <section className='causes'>
      <div className='container causes__container'>
        <h2 className='causes__title title--white title'>
          <span>Причины заболевания</span>
        </h2>
        <div className='causes__wrapper'>
          <ul ref={tab_1_block} data-tab-content='tab_1' className='causes__list'>
            <li  ref={tab_1_item_1} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>ингаляционные аллергены</p>
                <span>(трение, давление, экстремальные температуры);</span>
              </div>
            </li>
            <li ref={tab_1_item_2} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>химические и физические воздействия;</p>
              </div>
            </li>
            <li ref={tab_1_item_3} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>пищевые продукты;</p>
                <p>стресс;</p>
              </div>
            </li>
            <li ref={tab_1_item_4} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инфекции;</p>
                <p>неблагоприятные метеоусловия;</p>
              </div>
            </li>
            <li ref={tab_1_item_5} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инсоляция;</p>
                <p>
                  наследственность<sup>10, 11</sup>
                </p>
              </div>
            </li>
          </ul>
          <ul  ref={tab_2_block} data-tab-content='tab_2' className='causes__list hidden'>
            <li ref={tab_2_item_1} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>физические причины</p>
                <span>(трение, давление, экстремальные температуры);</span>
              </div>
            </li>
            <li  ref={tab_2_item_2} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>химические и физические воздействия;</p>
                <span>(кислоты, щелочи, растения);</span>
              </div>
            </li>
            <li ref={tab_2_item_3} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>металлы;</p>
                <p>косметические средства;</p>
              </div>
            </li>
            <li ref={tab_2_item_4} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>продукты питания;</p>
                <p> лекарственные препараты;</p>
              </div>
            </li>
            <li ref={tab_2_item_5} className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инсектициды;</p>
                <p>
                  парфюмерия<sup> 12,13</sup>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Causes
