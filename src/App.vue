<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <img class="brand-logo center" src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png"
        width="200px" height="90px">
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
import { METHODS } from 'http';
/*import Teste from './components/Teste'
import Outro from './components/Outro'*/
export default {
  components: {/*Teste, Outro*/},

  data()
  {
    
    return {
      filmes: [],
      pessoas: [],
    }
    
  },

  mounted(){
    Filme.listar('films').then(resposta =>{
      this.filmes = resposta.data;
      console.log(this.filmes);
      this.filmes.results.forEach(filme => {
        filme.characters.forEach(pessoa => {
          this.buscarPessoa(pessoa).then(resposta => {
            pessoa = resposta.data;
            console.log(pessoa);
            console.log(this.filmes);
          });
          console.log(pessoa);
         
        })
        
      });
    })
  

  
    
  },
  methods:
  {
    buscarPessoa(pessoa) {
      pessoa = pessoa.replace('https://swapi.co/api/people','');
      return Pessoas.listar('people'+pessoa);
      
    
    }
    
  }
}

</script>

<style>
h1{
  font-size: 2.1rem;
}

body{background-image: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3xEGOGX/nebula-universe-burst-of-light-deep-space-and-nebula-with-rays-of-light-universe-burst-of-light-space-background-abstract-illustration-animation-30fps-hd1080-seamless-loop_eyibkfehl__F0000.png);
  }
</style>
