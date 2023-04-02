import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPhotos } from '../../api/photo';

interface Image {
    url: string;
    labels: string[];
    primary_key: string;
}

export const ImagesList: React.FC = () => {
    const {isLoading, data} = useQuery({
        queryKey: ["photos"],
        queryFn: fetchPhotos
    })
    console.log(data);

    if (isLoading){
        return <>Carregando ...</>
    }
  return (
    <div>
        {data?.results.map((image: Image) => (
            <div key={image.primary_key}>
                <img src={image.url} alt={image.labels[0]} />
            </div>
        ))}
    </div>
  )
}
