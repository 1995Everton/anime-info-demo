import { GetterTree, MutationTree } from 'vuex';

export const state = () => ({
  image: '/photo-not-found.gif',
  locales: [
    { title: 'Português', lang: 'pt-br' },
    { title: 'Spanish', lang: 'es' },
    { title: 'English', lang: 'en' }
  ]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  image: (state) => state.image,
  locales: (state) => state.locales
};

export const mutations: MutationTree<RootState> = {
  SET_IMAGE: (state, payload: string) => (state.image = payload)
};
