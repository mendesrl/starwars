<template>
  <div id="app">
    
    <nav>
      <div class="nav-wrapper black">
        <a href="#" class="brand-logo center">Star Wars</a>
      </div>
    </nav>
    <div class="container">
      <div class="card-panel hoverable" v-for="filme in filmes.results" :key="filme.id">
          <div>
            <img src="https://lumiere-a.akamaihd.net/v1/images/solo-a-star-wars-story-theatrical-poster-2_f4af9297.jpeg?region=0%2C397%2C1298%2C646&width=600" width="500px" height="300px">
          </div>
          <div>
            <div>
              <h1>{{ filme.title }}</h1>
            </div>
            <div>
              <span>{{ filme.opening_crawl }}</span>
            </div>
            <div>
              <span>Ano de Lançamento:</span>
              <span>{{ (filme.release_date) }}</span>
            </div>
            <div>
              <span>Direção:</span>
              <span>{{ filme.director }}</span>
          </div>
      </div> 
          
      </div>

      
    </div>

  </div>
</template>

<script>
import Filme from './services/filmes'
export default {

  data()
  {
    return {
      filmes: []
      
    }
    
  },

  mounted(){
    Filme.listar('films').then(resposta =>{
      this.filmes = resposta.data;
      console.log(resposta.data);
    })
  }
  
}
</script>

<style>
h1{
  font-size: 2.2rem;
}


</style>
