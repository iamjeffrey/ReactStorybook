import React from 'react';
import { action } from '@storybook/addon-actions'
import Say from '../src/components/say'
import EventPractice from '../src/components/event_practice'
import ScrollBox from '../src/components/scrollbox'
import LifeCycleContainer from '../src/components/LifeCycleContainer'
import InfoContainer from '../src/components/Hooks/InfoContainer'
import MemoAverage from '../src/components/Hooks/MemoAverage'
import StyledEx from '../src/components/Style/StyledEx'

export default { 
    title: 'My Sample'
}

//↓스토리북 참고
// http://katieleonard.ca/blog/2018/styled-components-and-storybooks/
// https://gist.github.com/mxstbr/9c26ff3bca8d9a4aa3364402ef98a49a

export const UseStateSample = () => <Say action={action()} />
export const EventSample = () => <EventPractice name='Event Practice & Ref' action={action()} />
export const ScrollBoxSample = () => <ScrollBox action={action()} />
export const LifeCycleSample = () => <LifeCycleContainer action={action()} />
export const InfoSample = () => <InfoContainer action={action()} />
export const MemoAverageSample = () => <MemoAverage action={action()} />
export const StyledBasicSample = () => <StyledEx action={action()} />