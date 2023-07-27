import React, { useState } from 'react';
import './styles/ArticuloDiv.css';

const ArticuloDiv = () => {
  const [currentCategory, setCurrentCategory] = useState('Comunidad');

  const handleDotClick = (categoria) => {
    setCurrentCategory(categoria);
  };

  const articulos = [
    {
      categoria: 'Comunidad',
      noticias: [
        {
          id: 1,
          titulo: 'Noticia 1 de Comunidad',
          subtitulo: 'Subtítulo de la noticia 1',
          info: 'Breve información sobre la noticia 1 de comunidad...',
          image:'data:image/jpeg;base64,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'
        },
        {
          id: 2,
          titulo: 'Noticia 2 de Comunidad',
          subtitulo: 'Subtítulo de la noticia 2',
          info: 'Breve información sobre la noticia 2 de comunidad...',
        },
        {
          id: 3,
          titulo: 'Noticia 3 de Comunidad',
          subtitulo: 'Subtítulo de la noticia 3',
          info: 'Breve información sobre la noticia 3 de comunidad...',
        },
      ],
    },
    {
      categoria: 'Sociales',
      noticias: [
        {
          id: 4,
          titulo: 'Noticia 1 de Sociales',
          subtitulo: 'Subtítulo de la noticia 1',
          info: 'Breve información sobre la noticia 1 de sociales...',
        },
        {
          id: 5,
          titulo: 'Noticia 2 de Sociales',
          subtitulo: 'Subtítulo de la noticia 2',
          info: 'Breve información sobre la noticia 2 de sociales...',
        },
        {
          id: 6,
          titulo: 'Noticia 3 de Sociales',
          subtitulo: 'Subtítulo de la noticia 3',
          info: 'Breve información sobre la noticia 3 de sociales...',
        },
      ],
    },
    {
      categoria: 'Eventos y Logros',
      noticias: [
        {
          id: 7,
          titulo: 'Noticia 1 de Eventos y Logros',
          subtitulo: 'Subtítulo de la noticia 1',
          info: 'Breve información sobre la noticia 1 de eventos y logros...',
        },
        {
          id: 8,
          titulo: 'Noticia 2 de Eventos y Logros',
          subtitulo: 'Subtítulo de la noticia 2',
          info: 'Breve información sobre la noticia 2 de eventos y logros...',
        },
        {
          id: 9,
          titulo: 'Noticia 3 de Eventos y Logros',
          subtitulo: 'Subtítulo de la noticia 3',
          info: 'Breve información sobre la noticia 3 de eventos y logros...',
          image: 'data:image/jpeg;base64,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', // Reemplaza 'URL_DE_LA_IMAGEN' por la URL de la imagen deseada
        },
      ],
    },
  ];
  // Filtrar las noticias de la categoría seleccionada
  const noticiasCategoriaActual = articulos.find((categoria) => categoria.categoria === currentCategory)?.noticias || [];

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slides">
          <div className="slide active">
            {noticiasCategoriaActual.map((noticia) => (
              <div key={noticia.id} className="articulo">
                <h2>{noticia.titulo}</h2>
                <img src={noticia.image} alt={noticia.titulo} />
                <h3>{noticia.subtitulo}</h3>
                <p>{noticia.info}</p>
                <a href="/noticias-completa">Leer más</a>
              </div>
            ))}
          </div>
        </div>
        <div className="dots">
          {articulos.map((categoria) => (
            <div
              key={categoria.categoria}
              className={`dot ${categoria.categoria === currentCategory ? 'active' : ''}`}
              onClick={() => handleDotClick(categoria.categoria)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticuloDiv;
