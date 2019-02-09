<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <img class="brand-logo center" 
        src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png"
        width="250px" height="110px">
      </div>
    </nav>
    
    <div class="container">
      <div class="card-panel hoverable" v-for="filme in filmes.results" :key="filme.name">
        <app-card :idItem="poster(filme.episode_id)"></app-card>
        <div>
          <h1>{{ filme.title }}</h1>
        </div>
        <div>
          <p>{{ filme.opening_crawl }}</p>
        </div>
        <div>
          <span class="negrito"> Ano de Lançamento: </span>
          <span>{{ (filme.release_date).substr(-20,4) }}</span>
        </div>
        <div>
          <span class="negrito"> Direção: </span>
          <span>{{ filme.director }}</span>
        </div>
        <div>
          <a ><span @click="vermaisdetalhes(filme)"> Mais Detalhes </span></a>
          <div v-if="maisDetalhes == filme.title">
            <div>
              <span class="negrito"> Personagens: </span>
              <span v-for="pessoa in filme.characters" :key="pessoa.name"> {{pessoa.name}}, </span>
            </div>
            <div>
              <span class="negrito"> Planetas: </span>
              <span v-for="planeta in filme.planets" :key="planeta.name"> {{planeta.name}}, </span>
            </div>
            <div>
              <span class="negrito">Naves:</span>
              <span v-for="nave in filme.starships" :key="nave.name"> {{nave.name}}, </span>
            </div>
            <div>
              <span class="negrito">Especies:</span>
              <span v-for="especie in filme.species" :key="especie.name"> {{especie.name}}, </span>
            </div>
        </div>      
      </div>
    </div> 
  </div>
</div>
</template>

<script>
import api from './services/api'
import AppCard from './components/AppCard'
export default {
  components: {AppCard},

  data()
  {
    
    return {
      filmes: [],
      maisDetalhes: false
    }
    
  },

  mounted(){
    api.buscar('films/').then(resposta =>{
      this.filmes = resposta.data;
      
      this.filmes.results.forEach(filme => {
        let characters = [];
        let planets = [];
        let starships = [];
        let species = [];

                    filme.characters.forEach(pessoa => {
                      
                      this.buscarPessoa(pessoa).then(resposta => {
                        pessoa = resposta.data;
                        characters.push(resposta.data);
                        });
                                    
                    })

                    filme.planets.forEach(planeta => {
                      
                      this.buscarPlaneta(planeta).then(resposta => {
                        planeta = resposta.data;
                        planets.push(resposta.data);
                        });
                                    
                    })

                    filme.starships.forEach(nave => {
                      
                      this.buscarNave(nave).then(resposta => {
                        nave = resposta.data;
                        starships.push(resposta.data);
                        });
                                    
                    })

                    filme.species.forEach(especie => {
                      
                      this.buscarEspecie(especie).then(resposta => {
                        especie = resposta.data;
                        species.push(resposta.data);
                        });
                                    
                    })
      
        filme.characters = characters;
        filme.planets = planets;
        filme.starships = starships;
        filme.species = species;
        });
    })

  },
  methods:
  {
    buscarPessoa(pessoa) {
      pessoa = pessoa.replace('https://swapi.co/api/people','');
      return api.buscar('people'+pessoa);
    },
    buscarPlaneta(planeta) {
      planeta = planeta.replace('https://swapi.co/api/planets','');
      return api.buscar('planets'+planeta);
    },
    buscarNave(nave) {
      nave = nave.replace('https://swapi.co/api/starships','');
      return api.buscar('starships'+nave);
    },
    buscarEspecie(especie) {
      especie = especie.replace('https://swapi.co/api/species','');
      return api.buscar('species'+especie);
    },
    vermaisdetalhes(filme)
    {
      this.maisDetalhes = filme.title;
    },
    poster (index) {
      let imagens = [{
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=46%2C333%2C580%2C290',
        id: 4
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=0%2C136%2C678%2C339&width=600',
        id: 2
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_f5832812.jpeg?region=0%2C241%2C678%2C339&width=600',
        id: 1
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=61%2C329%2C634%2C319&width=600',
        id: 3
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=40%2C244%2C593%2C296',
        id: 6
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=31%2C272%2C603%2C302&width=600',
        id: 5
      },
      {
        url: 'https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=118%2C252%2C1384%2C696&width=600',
        id: 7
      }]
      const value = imagens.filter(value => {
        return value.id === index
      })
      return value[0].url
    }
  }
    
  }
</script>

<style>
body{background-image: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3xEGOGX/nebula-universe-burst-of-light-deep-space-and-nebula-with-rays-of-light-universe-burst-of-light-space-background-abstract-illustration-animation-30fps-hd1080-seamless-loop_eyibkfehl__F0000.png);}
h1{font-size: 2.1rem;}
a{cursor: pointer;}
nav{height: 100px;}
.negrito{font-weight: bold;}
</style>
