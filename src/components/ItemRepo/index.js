import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' className=''>Ver Repositório</a><br />
        <a href="#" className='remove' onClick={handleRemove}>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;