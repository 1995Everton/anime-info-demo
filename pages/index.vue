<template>
  <v-container>
    <v-row no-gutters class="container-mobile">
      <a-action
        v-model="select"
        :characters="characters"
        @search="getCharacter"
      ></a-action>
      <v-col v-if="loading" cols="12">
        <a-loading></a-loading>
      </v-col>
      <v-col v-else-if="error" cols="12">
        <a-not-found></a-not-found>
      </v-col>
      <template v-else>
        <v-col cols="12">
          <a-notebook>
            <a-title
              v-if="character.name"
              :title="character.name"
              :subtitle="character.birthday"
            ></a-title>
            <a-square-list :items="squares"></a-square-list>
            <a-notes
              :title="$t('above')"
              :description="character.description"
            ></a-notes>
            <a-person-list
              :title="$t('personal')"
              :items="person"
            ></a-person-list>
            <a-picture :items="character.photo"></a-picture>
            <a-check-list
              :title="$t('graduate')"
              :items="graduations"
            ></a-check-list>
            <a-states :states="databook"></a-states>
            <a-carousel title="Jutsus" :items="jutsus"></a-carousel>
          </a-notebook>
        </v-col>
        <a-json :data="character"></a-json>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { NarutoData, States, NarutoInfo } from '~/models/naruto';
import { Checklist, Squares, Person, GenericPhoto } from '~/models/global';

export default Vue.extend({
  data: (): NarutoData => ({
    select: 'Itachi Uchiha',
    error: false,
    loading: false,
    characters: [],
    character: {}
  }),
  computed: {
    jutsus(): GenericPhoto[] {
      const { jutsu = [] } = this.character;
      if (jutsu.length > 0) {
        const jutsus: GenericPhoto[] = [];
        jutsu.forEach((item) => {
          if (typeof item === 'string') {
            jutsus.push({
              name: item,
              icon: this.$store.state.image
            });
          } else {
            jutsus.push(item);
          }
        });
        return jutsus;
      }
      return [
        {
          name: this.$t('error-image') as string,
          icon: this.$store.state.image
        }
      ];
    },
    squares(): Squares[] {
      const squares: Squares[] = [];
      if (Object.keys(this.character).length > 0) {
        const {
          debut,
          clan,
          classification,
          affiliation,
          kekkei_genkai,
          partner
        } = this.character;
        if (debut && debut.manga && debut.anime) {
          squares.push({
            title: this.$t('debut') as string,
            itens: [debut.manga, debut.anime]
          });
        }
        if (Array.isArray(clan)) {
          const itens: (string | null)[] = [];
          for (const cla of clan) {
            itens.push(cla.name);
          }
          squares.push({
            title: this.$t('clan') as string,
            itens
          });
        }
        if (Array.isArray(classification) && classification.length > 0) {
          const itens: string[] = [];
          for (const cla of classification) {
            itens.push(cla);
          }
          squares.push({
            title: this.$t('classification') as string,
            itens
          });
        }
        if (Array.isArray(affiliation) && affiliation.length > 0) {
          const itens: (string | null)[] = [];
          for (const affi of affiliation) {
            itens.push(affi.name);
          }
          squares.push({
            title: this.$t('affiliation') as string,
            itens
          });
        }
        if (Array.isArray(kekkei_genkai) && kekkei_genkai.length > 0) {
          const itens: (string | null)[] = [];
          for (const kekkei of kekkei_genkai) {
            itens.push(kekkei.name);
          }
          squares.push({
            title: 'Kekkei Genkai',
            itens
          });
        }
        if (Array.isArray(partner) && partner.length > 0) {
          const itens: (string | null)[] = [];
          for (const partners of partner) {
            itens.push(partners);
          }
          squares.push({
            title: this.$t('partner') as string,
            itens
          });
        }
      }
      return squares;
    },
    person(): Person[] {
      const person: Person[] = [];
      if (Object.keys(this.character).length > 0) {
        const {
          weight,
          height,
          age,
          sex,
          ninja_registration,
          status
        } = this.character;
        if (Array.isArray(weight) && weight.length > 0) {
          person.push({
            title: this.$t('weight') as string,
            value: weight[weight.length - 1]
          });
        }
        if (Array.isArray(height) && height.length > 0) {
          person.push({
            title: this.$t('height') as string,
            value: height[height.length - 1]
          });
        }
        if (Array.isArray(age) && age.length > 0) {
          person.push({
            title: this.$t('age') as string,
            value: age[age.length - 1]
          });
        }
        if (sex) {
          person.push({
            title: this.$t('sex') as string,
            value: sex
          });
        }
        if (ninja_registration) {
          person.push({
            title: this.$t('registration') as string,
            value: ninja_registration
          });
        }
        if (status) {
          person.push({
            title: this.$t('status') as string,
            value: status
          });
        }
      }
      return person;
    },
    graduations(): Checklist[] {
      const graduations: Checklist[] = [];
      if (
        Object.keys(this.character).length > 0 &&
        Array.isArray(this.character.ninja_rank) &&
        this.character.ninja_rank.length > 0
      ) {
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
    databook(): States[] {
      return [
        {
          src: '/anime-info-demo/naruto/ninjutsu.png',
          title: 'Ninjutsu',
          points: 3
        },
        {
          src: '/anime-info-demo/naruto/taijutsu.png',
          title: 'Taijutsu',
          points: 2
        },
        {
          src: '/anime-info-demo/naruto/genjutsu.png',
          title: 'Genjutsu',
          points: 5
        }
      ];
    },
    lang(): string {
      const locale = this.$i18n.getLocaleCookie();
      return (locale === 'en' ? 'pt-br' : locale) as string;
    }
  },
  mounted() {
    this.getNames();
    this.getCharacter();
  },
  methods: {
    async getNames(): Promise<void> {
      try {
        const characters = await this.$axios.$get<string[]>(
          '/naruto/character'
        );
        this.characters = characters.map((name) => name.replace(/_/g, ' '));
      } catch (error) {}
    },
    async getCharacter(): Promise<void> {
      this.character = {};
      this.loading = true;
      this.error = false;
      try {
        this.character = await this.$axios.$get<NarutoInfo>(
          `naruto/${this.lang}/${this.select.replace(' ', '_')}`
        );
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    }
  }
});
</script>

<style lang="scss">
@import '~/assets/components/notebook.scss';
</style>
