'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
];

const Main = styled.main`
  width: 100%;
`;

const Gallery = styled.div`
  height: 175vh;
  background: rgb(45, 45, 45);
  position: relative;
  display: flex;
  gap: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 25%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  &:nth-of-type(1) {
    top: -45%;
  }
  &:nth-of-type(2) {
    top: -95%;
  }
  &:nth-of-type(3) {
    top: -45%;
  }
  &:nth-of-type(4) {
    top: -75%;
  }
`;

const Column = ({ images }) => {
  return (
    <Container>
      {images.map((src, index) => {
        return (
          <ImageContainer key={index}>
            <Image src={`/images/${src}`} fill alt='image' />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default function Home() {
  return (
    <Main>
      <Gallery>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
        <Column images={[images[6], images[7], images[8]]} />
        <Column images={[images[9], images[10], images[11]]} />
      </Gallery>
    </Main>
  );
}
