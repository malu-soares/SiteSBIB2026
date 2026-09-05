import React from 'react';
import EditionPage from '@/app/_components/EditionPage';

export default function Page2021() {
  return (
    <EditionPage
      year={2021}
      bannerSrc="/img.past/2021-banner.jpg"
      photoSrc= {null}
      youtubePlaylist="https://www.youtube.com/watch?v=RSfTR9myrTM&list=PLe1vQfY4mMmjpfC6oN3QN5z-kJ-qk2yM9"
      committee="Comissão Organizadora: Ana Powarchuk Xavier, Andréia Martins Ferreira, Bianca Siega Bernardi, Carlos Eduardo Capelini Eli Lopes, Caroline Bernich, Debora Daniela Wendland Amorim, Felipe Limão Lopes de Almeida, Gabriela Toledo da Costa, Guilherme Pereira Menezes, Laura Teresa Ricoboni, Leticia Fontanelli Straube de Souza, Mariana Aya Suzuki Uchida, Rafaela Laura Ribeiro, Thiago Figueiredo e Vitória Torrescasana Teixeira."
      acknowledgements="Agradecimentos: Rocket Studio, VarStation, Sabin, InfoBioJr., InnovaSpace, Carefy e Kidopi."  
    />
  );
}


