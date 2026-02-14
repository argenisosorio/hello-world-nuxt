// app/composables/useAppLoader.js
export const useAppLoader = () => {
  // useState crea una variable reactiva global que sobrevive entre páginas
  const isLoading = useState('app-loading', () => false)

  const showLoader = () => { isLoading.value = true }
  const hideLoader = () => { isLoading.value = false }

  return {
    isLoading,
    showLoader,
    hideLoader
  }
}