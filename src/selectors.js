import { createSelector } from 'reselect'

const getCurrentUser = state => state.currentUser
const getAllPets = state => state.pets
const getSavedPets = state => state.savedPets
export const getActivePetId = state => state.getActivePetId
export const getActiveTab = state => state.activeTab

