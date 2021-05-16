import React from 'react';
import { getCardData } from '../lib/api';
import { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Card from '../components/main/Card';
const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;
const Main = ({ year, month }) => {
    const [cardData, setCardData] = useState(null);
    const [rawData, setRawData] = useState(null);

    useEffect(() => {
        async () => {
            const data = await getCardData();
            setRawData(data);
            //console.log(data);
            data[year] && setCardData(data[year][month]);
        };
    }, [year, month]);
    return (
        <MainWrap>
            {cardData &&
                cardData.map((data, index) => {
                    return <Card key={index} cardData={data} />
                })
            }
        </MainWrap>
    );
};

export default Main;