'use client'
import { MouseEvent, useEffect, useRef } from 'react';
import './info.scss'
import { Tabs } from '../information';

const Info = ({currentTab, toggleTab}:{currentTab: Tabs, toggleTab: (tab: Tabs) => void}) => {
  const bulletActiveTab = useRef<HTMLDivElement>(null);
  const tab_1_block = useRef<HTMLDivElement>(null);
  const tab_1_paragraph = useRef<HTMLParagraphElement>(null);
  const tab_1_item_1 = useRef<HTMLLIElement>(null);
  const tab_1_item_2 = useRef<HTMLLIElement>(null);
  const tab_1_item_3 = useRef<HTMLLIElement>(null);
  const tab_1_item_4 = useRef<HTMLLIElement>(null);

  const tab_2_block = useRef<HTMLDivElement>(null);
  const tab_2_paragraph = useRef<HTMLParagraphElement>(null);
  const tab_2_item_1 = useRef<HTMLLIElement>(null);
  const tab_2_item_2 = useRef<HTMLLIElement>(null);
  const tab_2_item_3 = useRef<HTMLLIElement>(null);
  const tab_2_item_4 = useRef<HTMLLIElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newTab: Tabs) => {
    if (currentTab === newTab) return
    const currentTarget = e.target as HTMLButtonElement;
    if (currentTarget.classList.contains('information__tab--active')) {
      return;
    }
    if (bulletActiveTab.current) {
      bulletActiveTab.current.style.top = currentTarget.offsetTop + "rem";
    }
    if (currentTab === 'tab_1') {
      toggleTab('tab_2')
    } else {
      toggleTab('tab_1')
    }
  }

  useEffect(() => {

    if (currentTab === 'tab_1') {
      tab_2_paragraph.current?.classList.remove('active')
      tab_2_item_1.current?.classList.remove('active')
      tab_2_item_2.current?.classList.remove('active')
      tab_2_item_3.current?.classList.remove('active')
      tab_2_item_4.current?.classList.remove('active')
    } else {
      tab_1_paragraph.current?.classList.remove('active')
      tab_1_item_1.current?.classList.remove('active')
      tab_1_item_2.current?.classList.remove('active')
      tab_1_item_3.current?.classList.remove('active')
      tab_1_item_4.current?.classList.remove('active')
    }
    
    setTimeout(() => {
      if (currentTab === 'tab_1') {
        tab_2_block.current?.classList.add('hidden')
        tab_1_block.current?.classList.remove('hidden')
        
        setTimeout(() => {
          tab_1_paragraph.current?.classList.add('active')
          tab_1_item_1.current?.classList.add('active')
          tab_1_item_2.current?.classList.add('active')
          tab_1_item_3.current?.classList.add('active')
          tab_1_item_4.current?.classList.add('active')
        }, 200);
        
      } else {
        tab_1_block.current?.classList.add('hidden')
        tab_2_block.current?.classList.remove('hidden')
        
        setTimeout(() => {
          tab_2_paragraph.current?.classList.add('active')
          tab_2_item_1.current?.classList.add('active')
          tab_2_item_2.current?.classList.add('active')
          tab_2_item_3.current?.classList.add('active')
          tab_2_item_4.current?.classList.add('active')
        }, 200);
      }
    }, 200);

  }, [currentTab]);

  return (
    <section className='information' id='information'>
      <div className='information__container container'>
        <div className='information__wrapper'>
          <div className='information__tab-list'>
            <div ref={bulletActiveTab} className='information__tab-bullet'></div>
            <button onClick={(e) => handleClick(e, 'tab_1')}  data-tab='tab_1' className={`information__tab ${currentTab === 'tab_1' ? 'information__tab--active' : ''}`}>
              Атопический дерматит
            </button>
            <button onClick={(e) => handleClick(e, 'tab_2')} data-tab='tab_2' className={`information__tab ${currentTab === 'tab_2' ? 'information__tab--active' : ''}`}>
              Контактный дерматит
            </button>
          </div>
          <div ref={tab_1_block} data-tab-content='tab_1' className={`information__content-tab`}>
            <p ref={tab_1_paragraph} className={`information__description`} data-animate-tab>
              Атопический дерматит — это аллергическое кожное заболевание, которое имеет
              наследственную предрасположенность, протекает хронически, сопровождается зудом{' '}
              <sup>9</sup>.
            </p>
            <ul className='information__list-symptoms'>
              <li ref={tab_1_item_1} className={`information__symptom-item`} data-animate-tab>
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>30-80%</div>
                  <div className='information__symptom-text'>
                    риски наследования болезни <sup>10, 11</sup>
                  </div>
                </div>
              </li>
              <li
               ref={tab_1_item_2}
                className={`information__symptom-item information__symptom-item--image`}
                data-animate-tab
              >
                <div className='information__symptom-image'>
                  <img src='/img/tab-image.jpg' alt='Children' />
                </div>
              </li>

              <li
               ref={tab_1_item_3}
                className={`information__symptom-item information__symptom-item--smear`}
                data-animate-tab
              >
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>3</div>
                  <div className='information__symptom-text'>возрастных периода</div>
                </div>
              </li>
              <li
               ref={tab_1_item_4}
                className={`information__symptom-item information__symptom-item--itching`}
                data-animate-tab
              >
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>зуд</div>
                  <div className='information__symptom-text'>
                    постоянный симптом&nbsp;<sup>10, 11</sup>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div ref={tab_2_block} data-tab-content='tab_2' className={`information__content-tab hidden`}>
            <p ref={tab_2_paragraph} className={`information__description`} data-animate-tab>
              Контактный дерматит - это воспаление кожи в месте непосредственного контакта с
              раздражителем. В зависимости от причины контактный дерматит делится на простой и
              аллергический<sup>12</sup> .
            </p>
            <ul   className='information__list-symptoms'>
              <li ref={tab_2_item_1}
                className={`information__symptom-item information__symptom-item--smear`}
                data-animate-tab
              >
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>80%</div>
                  <div className='information__symptom-text'>
                    развивается в ответ на действие раздражителя <sup>12</sup>
                  </div>
                </div>
              </li>

              <li ref={tab_2_item_2}className={`information__symptom-item`} data-animate-tab>
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>2</div>
                  <div className='information__symptom-text'>
                    основные причины <sup>12</sup>{' '}
                  </div>
                </div>
              </li>
              <li
              ref={tab_2_item_3}
                className={`information__symptom-item information__symptom-item--image`}
                data-animate-tab
              >
                <div className='information__symptom-image'>
                  <img src='/img/tab-image-2.jpg' alt='Children' />
                </div>
              </li>
              <li
              ref={tab_2_item_4}
                className={`information__symptom-item information__symptom-item--itching`}
                data-animate-tab
              >
                <div className='information__symptom-wrap'>
                  <div className='information__symptom-head'>зуд</div>
                  <div className='information__symptom-text'>
                    болезненностьи жжение<sup>12,13</sup>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
