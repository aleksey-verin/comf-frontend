'use client'

import { useState } from 'react';
import Causes from './causes/causes'
import Info from './info/info'

export type Tabs = 'tab_1' | 'tab_2'

const Information = () => {

  const [currentTab, seCurrentTab] = useState<Tabs>('tab_1');

  const toggleTab = (tab: Tabs) => {
    seCurrentTab(tab)
  }
  return (
    <>
      <Info currentTab={currentTab} toggleTab={toggleTab} />
      <Causes currentTab={currentTab} />
    </>
  )
}

export default Information
