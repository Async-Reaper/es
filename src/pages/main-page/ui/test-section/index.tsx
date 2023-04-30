import React from 'react';
import { Container } from 'shared/ui';
import { Element } from 'react-scroll';
import {
  ContentDescription,
  ContentTitle,
  ContentWrapper,
  Icons,
  IconsInner,
  IconsTitle,
  IconsWrapper, TestBtnWrapper,
  TestInner,
  TestWrapper,
} from 'pages/main-page/ui/test-section/ui';
import { OpenTestBtn } from './ui/elements/open-test-btn';

const Component = () => (
   <Element name='test'>
      <TestWrapper>
         <Container>
            <TestInner>
               <IconsWrapper>
                  <IconsTitle />
                  <IconsInner>
                     <Icons />
                  </IconsInner>
               </IconsWrapper>
               <ContentWrapper>
                  <ContentTitle />
                  <ContentDescription />
                  <TestBtnWrapper>
                     <OpenTestBtn />
                  </TestBtnWrapper>
               </ContentWrapper>
            </TestInner>
         </Container>
      </TestWrapper>
   </Element>
);

export const TestSection = React.memo(Component);
