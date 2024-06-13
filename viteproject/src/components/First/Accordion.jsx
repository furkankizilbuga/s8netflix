/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const AccordionTitle = styled.div`
  background: rgb(45, 45, 45);
  color: white;
  cursor: pointer;
  padding: .6vw 1.5vw;
  font-size: 1.3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: rgb(92, 92, 92);
  }
`;

const AccordionContent = styled.div`
  background: rgb(45, 45, 45);
  border-top: 1px solid black;
  max-height: ${props => (props.isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => (props.isOpen ? '15px' : '0 15px')};
`;

const AccordionIcon = styled.span`
  font-size: 2vw;
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleAccordion}>
        {title}
        <AccordionIcon>{isOpen ? '-' : '+'}</AccordionIcon>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;