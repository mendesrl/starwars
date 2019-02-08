<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <a href="#" class="brand-logo center">Star Wars</a>
      </div>
    </nav>


    <div class="container">
      <div class="card-panel hoverable" v-for="filme in filmes.results" :key="filme.name">
        <div>
          <img src="https://lumiere-a.akamaihd.net/v1/images/solo-a-star-wars-story-theatrical-poster-2_f4af9297.jpeg?region=0%2C397%2C1298%2C646&width=600" width="500px" height="300px">
        </div>
        <div>
          <div>
            <h1>{{ filme.title }}</h1>
            <span>{{filme.episode_id}}</span>
          </div>
        </div>
        <div><!--
              <router-link to="/Outro">Outro</router-link>
              <router-link to="/Teste">Teste</router-link>
              <router-view></router-view>
              
              <teste v-if="movie == 'Filmes do Star Wars'" :title="'Filmes do Star Wars'" />-->
              <span>{{ filme.opening_crawl }}</span>
        </div>
        <div>
          <span>Ano de Lançamento:</span>
          <span>{{ filme.release_date}}</span>
        </div>
        <div>
          <!--<<outro v-if="movie == 'Filmes do Brawler Wars'" :title="'Filmes do Brawler Wars'" />-->
          <span>Direção:</span>
          <span>{{ filme.director }}</span>
        </div>
        <li>
          {{filme.characters}}
        </li>
        
      <div v-for="pessoa in pessoas.results" :key="pessoa.name">
        <span>{{pessoa.name}}</span>

      </div>
        
      </div> 
    </div>
  </div>

</template>

<script>
import Filme from './services/filmes'
import Pessoas from './services/pessoas'
/*import Teste from './components/Teste'
import Outro from './components/Outro'*/
export default {
  components: {/*Teste, Outro*/},

  data()
  {
    
    return {
      filmes: [],
      pessoas: [],
      id:{

      } 
    }
    
  },

  mounted(){
    Filme.listar('films').then(resposta =>{
      this.filmes = resposta.data;
    }),
    Pessoas.listar('people').then(resposta =>{
      this.pessoas = resposta.data;
      console.log(resposta.data)
    })
  }
  
}
</script>

<style>
h1{
  font-size: 2.1rem;
}
</style>
