import { GetterTree, MutationTree } from 'vuex';

export const state = () => ({
  image: '/photo-not-found.gif'
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  image: (state) => state.image
};

export const mutations: MutationTree<RootState> = {
  CHANGE_IMAGE: (state, newImage: string) => (state.image = newImage)
};
