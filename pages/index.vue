<template>
  <v-container>
    <v-row no-gutters class="container-mobile">
      <v-col cols="12" class="my-5">
        <v-row no-gutters justify="center" align="center">
            <v-col cols="10" md="4">
              <a-input 
                class="mt-7" 
                v-model="select" 
                :characters="characters">
              </a-input>
            </v-col>
            <v-col cols="10" md="4">
              <a-button @click="getCharacter"></a-button>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" v-if="loading">
        <a-loading></a-loading>
      </v-col>
      <v-col cols="12" v-else-if="error">
        <a-not-found></a-not-found>
      </v-col>
      <template v-else>
        <v-col cols="12">
          <div class="main-content" >
            <div class="notebook">
              <div class="notebook__inner">
                <div class="title"> 
                  <h1 v-html="character.name"></h1>
                  <h3 v-html="character.birthday"></h3>
                </div>
                <div class="squares">
                  <div 
                    class="squares__item"
                    v-for="square of squares"
                    :key="square.title"
                  >
                    <div class="squares__day" v-html="square.title"></div>
                    <div class="squares__list">
                      <p 
                        v-for="(value,i) of square.itens"
                        :key="i"
                        v-html="value">
                      </p>
                    </div>
                  </div>
                </div>
                <div class="notes"><span>Sobre</span>
                  <div class="notes__list" v-html="character.description">
                  </div>
                </div>
                <div class="person">
                  <h4>Informações Pessoais</h4>
                  <div 
                    class="savings" 
                    v-for="item of person"
                    :key="item.title"
                  >
                    <span class="person__title" v-html="item.title"></span>
                    <span class="person__amount" v-html="item.value"></span>
                  </div>
                </div>
                <div class="picture">
                  <div class="picture__border">
                    <img :src="photo"/>
                    <figcaption >
                      <a-button-simple 
                        @click="changePhoto(index)"
                        v-for="(photo,index) of character.photo" 
                        :key="photo.name"
                        :title="photo.name"
                      >
                        </a-button-simple>
                    </figcaption>
                  </div>
                </div>
                <div class="graduations"><span></span><span>Graduação</span>
                  <div class="graduations__inner">
                    <div class="graduations__list"> 
                      <div 
                        class="graduations__item"
                        v-for="graduation of graduations"
                        :key="graduation.title"
                      >
                        <div class="graduations__item__checkbox">
                          <span v-if="graduation.completed">&#10004;</span>
                        </div>
                        <div class="graduations__item__desc" v-html="graduation.title"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="databook">
                  <div 
                    class="databook__day"
                    v-for="n in ['I','II','III','IV','V']"
                    :key="n"
                    v-html="n"
                  >I</div>
                  <template v-for="(item, index) of databook">
                    <div class="databook__title" :key="item.title">
                      <img height="17" :src="item.src"/> 
                      <span v-html="item.title"></span>
                    </div>
                    <div  
                      v-for="n in 5"
                      class="databook__bubble"
                      :class="{ 'point' : n <= item.points}"
                      :key="Math.random() * n + index"
                    ></div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="my-12">
          <v-toolbar flat>
            <v-toolbar-title class="a-json-return">JSON de retorno</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <tree-view :data="character" :options="options"></tree-view>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import Vue from 'vue';
import AButton from '~/components/AButton.vue';
import AButtonSimple from '~/components/AButtonSimple.vue';
import AInput from '~/components/AInput.vue';
import ALoading from '~/components/ALoading.vue';
import ANotFound from '~/components/ANotFound.vue';
import {
  NarutoData,
  DataBook,
  Graduations,
  Person,
  Squares,
  Info
} from '~/models/naruto';

export default Vue.extend({
  components: {
    AButton,
    AInput,
    ALoading,
    AButtonSimple,
    ANotFound,
  },
  mounted(){
    this.getCharacter();
  },
  data: (): NarutoData => ({
    select: 'Itachi Uchiha',
    error: false,
    loading: false,
    photo_select: 0,
    characters: [
      'Itachi Uchiha',
      'Sasuke Uchiha',
      'Kakashi Hatake',
      'Madara Uchiha',
      'Obito Uchiha',
      'Nagato',
      'Konan',
      'Deidara',
      'Sasori',
      'Kisame Hoshigaki',
      'Kakuzu',
      'Hidan',
      'Iruka Umino',
      'Konohamaru Sarutobi',
      'Jiraiya',
      'Shizune',
      'Rin Nohara',
      'Anko Mitarashi',
      'Kushina Uzumaki',
      'Shisui Uchiha',
      'Hashirama Senju',
      'Tobirama Senju',
      'Hiruzen Sarutobi',
      'Minato Namikaze',
      'Tsunade',
      'Kakashi Hatake',
      'Naruto Uzumaki',
      'Yashamaru',
      'Chiyo',
      'Gaara',
      'Kankurō',
      'Temari',
      'Reto',
      'Shamon',
      'Terceiro Kazekage',
      'Rasa',
      'Zabuza Momochi',
      'Haku',
      'Chōjūrō',
      'Ao',
      'Gengetsu Hōzuki',
      'Byakuren',
      'Terceiro_Mizukage',
      'Yagura',
      // 'Mei Terumi',
      // 'Killer Bee',
      'Darui',
      'Karui',
      'A (Quarto_Raikage)',
      'Ōnoki',
      'Kurotsuchi',
      'Akatsuchi',
      'Mū',
      'Kaguya Ōtsutsuki',
      'Hamura Ōtsutsuki',
      'Hagoromo Ōtsutsuki',
      'Ashura Ōtsutsuki',
      'Indra Ōtsutsuki',
      'Shukaku',
      'Matatabi',
      'Isobu',
      'Son Goku',
      'Kokuou',
      'Saiken',
      'Choumei',
      'Gyuuki',
      'Kurama',
      'Shinjuu',
      'Yugito Nii',
      'Rōshi',
      'Han',
      'Utakata',
      'Fū',
      'Mito Uzumaki',
      'Zetsu Negro',
      'Ginkaku',
      'Kinkaku',
      'Sora'
    ],
    character: {},
    options: {
      maxDepth: 3,
      rootObjectKey: "character",
      link: true
    }
  }),
  computed:{
    photo(): string{
      const { photo } = this.character
      if(photo instanceof Array && photo.length > 0 && photo[this.photo_select]){
        return photo[this.photo_select].icon as string
      }
      return '/photo-not-found.gif';
    },
    squares(): Squares[]{
      const squares : Squares[] = [];
      if(Object.keys(this.character).length > 0){
        const {
         debut,
         clan,
         classification,
         affiliation,
         kekkei_genkai,
         partner
        } = this.character;
        if(debut && debut.manga && debut.anime){
          squares.push({
            title: 'Estréia',
            itens:[
              debut.manga,
              debut.anime
            ]
          })
        }
        if(clan instanceof Array){
          const itens: (string | null) [] = [];
          for (const cla of clan) {
            itens.push(cla.name)
          }
          squares.push({
            title: 'Clã',
            itens
          })
        }
        if(classification instanceof Array && classification.length > 0){
          const itens: string[] = [];
          for (const cla of classification) {
            itens.push(cla)
          }
          squares.push({
            title: 'Classificação',
            itens
          })
        }
        if(affiliation instanceof Array && affiliation.length > 0){
          const itens: (string | null) [] = [];
          for (const affi of affiliation) {
            itens.push(affi.name)
          }
          squares.push({
            title: 'Afiliação',
            itens
          })
        }
        if(kekkei_genkai instanceof Array && kekkei_genkai.length > 0){
          const itens: (string | null) [] = [];
          for (const kekkei of kekkei_genkai) {
            itens.push(kekkei.name)
          }
          squares.push({
            title: 'Kekkei Genkai',
            itens
          })
        }
        if(partner instanceof Array && partner.length > 0){
          const itens: (string | null) [] = [];
          for (const partners of partner) {
            itens.push(partners)
          }
          squares.push({
            title: 'Parceiros',
            itens
          })
        }
      }
      return squares;
    },
    person(): Person[]{
      const person : Person[] = [];
      if(Object.keys(this.character).length > 0){
        const {
          weight,
          height,
          age,
          sex,
          ninja_registration,
          status
        } = this.character;
        if(weight instanceof Array && weight.length > 0){
          person.push({
            title: 'Peso',
            value: weight[weight.length - 1]
          })
        }
        if(height instanceof Array && height.length > 0){
          person.push({
            title: 'Altura',
            value: height[height.length - 1]
          })
        }
        if(age instanceof Array && age.length > 0){
          person.push({
            title: 'Idade',
            value: age[age.length - 1]
          })
        }
        if(sex){
          person.push({
            title: 'Sexo',
            value: sex
          })
        }
        if(ninja_registration){
          person.push({
            title: 'Registro Ninja',
            value: ninja_registration
          })
        }
        if(status){
          person.push({
            title: 'Estado',
            value: status
          })
        }
      }
      return person;
    },
    graduations(): Graduations[]{
      const graduations : Graduations[] = [];
      if(Object.keys(this.character).length > 0 
        && this.character.ninja_rank instanceof Array
        && this.character.ninja_rank.length > 0){
        graduations.push(
          {
            title: 'Genin',
            completed: this.character.ninja_rank.includes('Genin')
          },
          {
            title: 'Chūnin',
            completed: this.character.ninja_rank.includes('Chūnin')
          },
          {
            title: 'Jonin',
            completed: this.character.ninja_rank.includes('Jonin')
          }
        );
      }
      return graduations;
    },
    databook(): DataBook[]{
      return [
        {
          src: '/naruto/ninjutsu.png',
          title: 'Ninjutsu',
          points: 3
        },
        {
          src: '/naruto/taijutsu.png',
          title: 'Taijutsu',
          points: 2
        },
        {
          src: '/naruto/genjutsu.png',
          title: 'Genjutsu',
          points: 5
        }
      ];
    }
  },
  methods:{
    changePhoto(index: number): void{
      this.photo_select = index
    },
    async getCharacter(): Promise<any>{
      this.character = {};
      this.loading = true;
      this.error = false;
      try { 
        this.character = await this.$axios.$get<Info>(`naruto/${this.select.replace(' ','_')}`)
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    }
  }
  
})
</script>

<style lang="scss" scoped>
  @import "~/assets/reset.scss";

  $color-black: #111;
  $color-red: #cc4b48;
  $color-red2: #e4572e;
  $color-vermilion: #f4442e;
  $color-vermilion2: #d05b58;
  $color-pink: #efb8ba;
  $color-pink2: #e79598;
  $color-pink3: #db6165;

  @mixin text-shadow() {
    text-shadow: 2px 1px 0 #fbfae8, 5px 4px 0 coral;
  }

  * {
    box-sizing: border-box;
  }

  .a-json-return {
    font: 32px "Lobster", cursive;
    margin: 10px 0;
  }

  body {
    background: #222;
    font-family: "Gochi Hand", sans-serif;
    color: #333;
  }

  aside.context {
    text-align: center;
    color: #fff;
    line-height: 1.7;
    font-size: 20px;
    letter-spacing: .5px;
    a {
      text-decoration: none;
      color: #fff;
      padding: 3px 0;
      border-bottom: 1px dashed;
      &:hover {
        border-bottom: 1px solid;
      }
    }
    .explanation {
      max-width: 700px;
      margin: 4em auto 0;
    }
  }

  .notebook {
    max-width: 72%;
    margin: auto;
    border-radius: 16px;
    background: $color-red;
    padding: 2px 4px 2.5px;
    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 16px;
      background: linear-gradient(90deg, #fbfae8 15px, transparent 1%) center,
        linear-gradient(#fbfae8 15px, transparent 1%) center, #ccc;
      background-size: 16px 16px;
      display: grid;
      padding: 30px 20px 25px;
      grid-template-areas:
        "picture person"
        "picture person"
        "title person"
        "notes squares"
        "notes squares"
        "databook graduations";
      grid-template-columns: 50% 50%;
      grid-template-rows: 18% auto auto auto auto auto;
      &:after {
        content: "";
        width: 100px;
        height: 100%;
        top: 0;
        margin: auto;
        left: 0;
        right: 0;
        position: absolute;
        background: linear-gradient(
          to right,
          transparent 10%,
          rgba(153, 153, 153, 0.05) 50%,
          rgba(153, 153, 153, 0.4) 51%,
          rgba(153, 153, 153, 0.15) 51.5%,
          transparent 90%
        );
      }
    }
  }

  .title {
    grid-area: title;
    text-align: center;
    margin-top: 15px;
    h1 {
      font: 50px/1 "Lobster", cursive;
      @include text-shadow();
      margin: 0;
    }
    h3 {
      font: 13px/1.2 "Rock Salt", cursive;
      margin: 8px;
    }
  }

  .squares {
    grid-area: squares;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;
    margin-left: 22px;
    &__item {
      border: 2px solid $color-black;
      position: relative;
      &:nth-child(1) {
        box-shadow: 3px 3px 0 0 rgba($color-vermilion2,0.4);
      }
      &:nth-child(2) {
        box-shadow: 3px 3px 0 0 rgba($color-vermilion,0.5);
      }
      &:nth-child(3) {
        box-shadow: 3px 3px 0 0 rgba($color-pink,0.6);
      }
      &:nth-child(4) {
        box-shadow: 3px 3px 0 0 rgba($color-red,0.7);
      }
      &:nth-child(5) {
        box-shadow: 3px 3px 0 0 rgba($color-pink2,0.7);
      }
      &:nth-child(6) {
        box-shadow: 3px 3px 0 0 rgba($color-red2,0.5);
      }
    }
    &__day {
      padding: 5px 5px 2px;
      font: 14px/1.5 "Special Elite", cursive;
      border-bottom: 2px solid $color-black;
    }
    &__list {
      padding: 8px;
      font-size: 14px;
      line-height: .9;
    }
    p {
      padding-left: 8px;
      position: relative;
      margin: 5px 0;
      &:after {
        content: '-';
        top: 0;
        position: absolute;
        left: 0;
      }
    }
    .highlighted {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 8px;
      left: 0;
      text-align: center;
      .text {
        margin-top: 5px;
        position: relative;
        span {
          position: relative;
          z-index: 2;
        }
        &:after {
          content: '';
          background: rgba($color-pink,0.3);
          width: 95%;
          height: 100%;
          position: absolute;
          left: 2px;
          top: 0;
          z-index: 1;
          transform: rotate(-3deg);
        }
      }
    }
  }

  .notes {
    grid-area: notes;
    border: 2px solid $color-black;
    border-width: 0 2px 2px;
    margin: 35px 20px 0 0;
    position: relative;
    span {
      display: block;
      margin: -25px 22px;
      font: 32px "Lobster", cursive;
      @include text-shadow;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        top: 0;
        left: 0;
        background: #111;
        background: linear-gradient(
          to right,
          #111 15px,
          transparent 15px,
          transparent 95px,
          #111 95px
        );
      }
    }
    &__list {
      margin-top: 24px;
      padding: 10px;
      line-height: 1.2;
    }
  }

  .person {
    grid-area: person;
    margin: 0 0 20px 20px;
    display: grid;
    grid-gap: 6px 10px;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, auto);
    h4 {
      text-align: center;
      margin: 0 0 10px;
      font: 16px/1 "Rock Salt", cursive;
      &:first-of-type {
        grid-column: 1 / span 4;
      }
    }
    &__box {
      border: 2px solid $color-black;
      grid-column: span 2;
      padding: 7px 7px 5px;
    }
    &__title {
      font: 4px;
    }
    &__amount {
      font: 19px 'Gochi Hand', cursive;
      display: inline-block;
      margin-left: 10px;
    }
    .savings {
      position: relative;
      grid-column: 1 / span 4;
      width: 99%;
      padding: 10px 10px 5px;
      background: rgba($color-pink, 0.4);
      box-shadow: 3px 3px 0 0 rgba($color-pink2, 0.7);
      font: 16px/1 "Rock Salt", cursive;
    }
  }

  .picture {
    grid-area: picture;
    margin-right: 20px;
    &__border {
      width: 100%;
      background: #f9f9f9;
      padding: 20px 10px 50px;
      height: 95%;
      transform: rotate(5deg);
      position: relative;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
      &:after {
        content: "";
        width: 55%;
        height: 20px;
        top: -10px;
        z-index: 5;
        left: 25%;
        transform: rotate(-2deg);
        position: absolute;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        background: rgba(220, 220, 220, 0.4);
      }
      img {
        width: 21em;
        height: 16em;
        object-fit: cover;
      }
      figcaption {
        margin: 10px 0;
        text-align: center;
        display: flex;
        font: 14px/1 "Gochi Hand", cursive;
        color: $color-vermilion;
      }
    }
  }

  .graduations {
    grid-area: graduations;
    margin: 48px 0 0 20px;
    border: 2px solid $color-black;
    border-width: 0 2px 2px;
    position: relative;
    &__item {
      padding: 3px 12px;
      &__checkbox {
        border: 2px solid $color-black;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 5px;
        position: relative;
        span {
          font-size: 22px;
          display: inline-block;
          position: absolute;
          top: -8px;
          color: $color-pink3;
        }
      }
      &__desc {
        display: inline-block;
        font: 18px "Gochi Hand", cursive;
        vertical-align: top;
      }
    }
    > span:nth-child(1) {
      position: absolute;
      text-transform: uppercase;
      font: 700 9px "Rock Salt", cursive;
      top: -30px;
      transform: rotate(-15deg);
    }
    > span:nth-child(2) {
      display: block;
      margin: -25px 22px;
      font: 32px "Lobster", cursive;
      @include text-shadow;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        top: 0;
        left: 0;
        background: #111;
        background: linear-gradient(
          to right,
          #111 15px,
          transparent 15px,
          transparent 95px,
          #111 95px
        );
      }
    }
    &__inner {
      margin-top: 40px;
    }
  }

  .databook {
    grid-area: databook;
    display: grid;
    margin: 20px 20px 0 0;
    grid-template-rows: repeat(4, 28px);
    grid-template-columns: max-content repeat(5, 1fr);
    align-items: center;
    font: 18px/1 "Gochi Hand", cursive;
    grid-auto-flow: row;
    text-align: center;
    .point {
      background: rgba($color-vermilion,0.5);
    }
    &__title {
      grid-column: 1;
      text-align: left;
      padding-right: 15px;
    }
    &__day {
      text-align: center;
      &:nth-child(1) {
        grid-column-start: 2;
      }
    }
    &__bubble {
      border: 1.5px dashed;
      margin: auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }

  /* Responsive here */
  @media screen and (max-width: 768px) {
    .container-mobile {
      margin-top: 35px;
    }

    .notebook {
      max-width: 100%;
      margin: 0;
    }

    .picture__border img{
      width: 17.5em;
    }
        
    .notebook__inner {
      grid-template-columns: 40% 25% 35%;
      grid-template-rows: auto;
      grid-template-areas: 
        "picture picture picture"
        "title title title" 
        "squares squares squares" 
        "notes notes notes" 
        "person person person"
        "graduations graduations graduations"
        "databook databook databook";
      > div {
        margin: 30px 20px;
      }
      &:after {
        width: 100%;
        height: 100px;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          transparent 10%,
          rgba(153, 153, 153, 0.05) 50%,
          rgba(153, 153, 153, 0.4) 51%,
          rgba(153, 153, 153, 0.15) 51.5%,
          transparent 90%
        );
      }
    }
  }
  
</style>
